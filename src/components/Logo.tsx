"use client";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="w-14 h-14 flex items-center justify-center relative group transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-full h-full group-hover:drop-shadow-lg transition-all duration-300"
          role="img"
          aria-labelledby="diamond-icon-title"
        >
          <title id="diamond-icon-title">Diamond Icon with C</title>

          <path
            d="M100 10 L40 50 V150 L100 190 Z"
            fill="url(#purpleGradient)"
          />
          <path d="M100 10 L160 50 V150 L100 190 Z" fill="url(#darkGradient)" />

          <text
            x="100"
            y="125"
            textAnchor="middle"
            fontSize="80"
            fontWeight="bold"
            fill="white"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            C
          </text>

          <path d="M90 35 L100 15 L110 35 Z" fill="#a855f7" />
          <path d="M90 165 L100 185 L110 165 Z" fill="#6b7280" />

          <defs>
            <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c026d3" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
            <linearGradient id="darkGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4b5563" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            CELI
          </span>
          <span className="text-gray-800">NA</span>
        </h1>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Logo;
