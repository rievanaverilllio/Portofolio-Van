import React from "react";

const Heading: React.FC = () => (
  <header className="flex items-center justify-between w-full p-4 my-2 relative z-10">
    <div className="font-playfair-display text-xl font-semibold !text-white opacity-100">
      Rievan Averillio
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2 text-sm text-gray-200 font-semibold">
        <span className="h-2 w-2 rounded-full bg-white animate-pulse-dot"></span>
        <span>available for work</span>
      </div>
      <div className="flex space-x-3">
        <a href="https://www.instagram.com/rievanavrellio/" target="_blank" rel="noopener noreferrer" className="icon-button text-white p-2 hover:bg-gray-800 rounded-full">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/rievanavrellio" target="_blank" rel="noopener noreferrer" className="icon-button text-white p-2 hover:bg-gray-800 rounded-full">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://github.com/rievanaverilllio" target="_blank" rel="noopener noreferrer" className="icon-button text-white p-2 hover:bg-gray-800 rounded-full">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
        </a>
      </div>
    </div>
  </header>
);

export default Heading;