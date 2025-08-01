import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  )
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement | null>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config = useMemo(() =>
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        },
    [easing]
  );

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const refs: CardRef[] = useMemo(() => {
    const arr: CardRef[] = [];
    for (let i = 0; i < childArr.length; i++) {
      arr.push({ current: null } as CardRef);
    }
    return arr;
  }, [childArr]);

  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const isSwapping = useRef(false);

  // Move swap function outside useEffect so it can be called from onClick
  const swap = useCallback(() => {
    if (order.current.length < 2) return;
    if (isSwapping.current) return;
    if (tlRef.current && tlRef.current.isActive()) return;
    isSwapping.current = true;
    const [front, ...rest] = order.current;
    const elFront = refs[front]?.current;
    if (!elFront) {
      isSwapping.current = false;
      return;
    }
    const tl = gsap.timeline();
    tlRef.current = tl;
    tl.to(elFront, {
      y: "+=500",
      duration: config.durDrop,
      ease: config.ease,
    });
    tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
    rest.forEach((idx, i) => {
      const el = refs[idx]?.current;
      if (!el) return;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, "promote");
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease,
        },
        `promote+=${i * 0.1}`
      );
    });
    const backSlot = makeSlot(
      refs.length - 1,
      cardDistance,
      verticalDistance,
      refs.length
    );
    tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
    tl.set(elFront, { zIndex: backSlot.zIndex }, "return");
    tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
    tl.to(
      elFront,
      {
        y: backSlot.y,
        duration: config.durReturn,
        ease: config.ease,
      },
      "return"
    );
    tl.call(() => {
      order.current = [...rest, front];
    });
    tl.eventCallback("onComplete", () => {
      isSwapping.current = false;
    });
    tl.eventCallback("onInterrupt", () => {
      isSwapping.current = false;
    });
  }, [refs, cardDistance, verticalDistance, config]);

  useEffect(() => {
    if (refs.length === 0 || !refs.every(ref => ref.current)) return;

    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(
          r.current,
          makeSlot(i, cardDistance, verticalDistance, total),
          skewAmount
        );
      }
    });

    // Initial swap after a small delay
    const initialTimeout = setTimeout(() => {
      swap();
      intervalRef.current = window.setInterval(swap, delay);
    }, 1000);

    if (pauseOnHover && container.current) {
      const node = container.current;
      const pause = () => {
        if (tlRef.current) {
          tlRef.current.pause();
          // Saat di-pause, flag tetap true jika timeline masih aktif
          if (!tlRef.current.isActive()) isSwapping.current = false;
        }
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
      const resume = () => {
        if (tlRef.current) {
          tlRef.current.play();
          // Jika timeline sudah selesai setelah resume, pastikan flag false
          if (!tlRef.current.isActive()) isSwapping.current = false;
        }
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearTimeout(initialTimeout);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
    return () => {
      clearTimeout(initialTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [refs, cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, config, swap]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            if (isSwapping.current) return;
            // Only allow swap if this card is the front card
            if (order.current[0] !== i) {
              child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
              onCardClick?.(i);
              return;
            }
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
            swap();
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[-10%] translate-y-[3%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[5%] max-[768px]:translate-y-[8%] max-[768px]:scale-[0.7] max-[480px]:translate-x-[10%] max-[480px]:translate-y-[13%] max-[480px]:scale-[0.5]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
