import React, { useState } from "react";
import CircularGallery from "../react-bits/CircularGallery";

interface Item {
  image: string;
  text: string;
}

interface TrackableCircularGalleryProps {
  items: Item[];
  renderImage?: (src: string, alt: string) => React.ReactElement;
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
  loopCount?: number;
}


const TrackableCircularGallery: React.FC<TrackableCircularGalleryProps> = (props) => {
  const [centerIndex, setCenterIndex] = useState(0);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <CircularGallery
        items={props.items}
        bend={props.bend}
        textColor={props.textColor}
        borderRadius={props.borderRadius}
        font={props.font}
        scrollSpeed={props.scrollSpeed}
        scrollEase={props.scrollEase}
        loopCount={9}
        initialSet={5}
        onActiveChange={setCenterIndex}
      />
      {/* Bubble di bawah judul card yang sedang di tengah */}
      <div style={{ minHeight: 40, marginTop: 12, pointerEvents: "none" }}>
        <div
          className="bubble-track-card"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 1,
            transition: "opacity 0.3s",
          }}
        >
          <span
            style={{
              background: "rgba(96,165,250,0.18)",
              color: props.textColor || "#fff",
              borderRadius: 18,
              padding: "8px 22px",
              fontWeight: 600,
              fontSize: 18,
              boxShadow: "0 2px 12px 0 rgba(96,165,250,0.10)",
              border: "1.5px solid #60a5fa",
              fontFamily: props.font?.split(" ").slice(2).join(" ") || undefined,
            }}
          >
            {(() => {
              if (!props.items || props.items.length === 0) return "";
              let normalizedIndex = centerIndex % props.items.length;
              if (isNaN(normalizedIndex) || normalizedIndex < 0) normalizedIndex = ((centerIndex % props.items.length) + props.items.length) % props.items.length;
              if (isNaN(normalizedIndex) || normalizedIndex < 0 || normalizedIndex >= props.items.length) normalizedIndex = 0;
              return props.items[normalizedIndex]?.text || "";
            })()}
          </span>
        </div>
      </div>
      <style>{`
        .bubble-track-card {
          animation: bubbleIn 0.4s cubic-bezier(.4,2,.6,1) both;
        }
        @keyframes bubbleIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default TrackableCircularGallery;
