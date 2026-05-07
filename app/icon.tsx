export default function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="256"
      height="256"
    >
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffdbe7" />
          <stop offset="100%" stopColor="#f8b8cc" />
        </linearGradient>

        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffeaf1" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <rect
        width="256"
        height="256"
        rx="64"
        fill="url(#bg)"
      />

      <circle
        cx="128"
        cy="128"
        r="82"
        fill="url(#glass)"
      />

      <path
        d="M88 78 L128 150 L168 78"
        fill="none"
        stroke="#111111"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="128"
        cy="168"
        r="10"
        fill="#111111"
      />

      <path
        d="M108 178 Q128 196 148 178"
        fill="none"
        stroke="#111111"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}