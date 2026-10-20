export default function DancingCat({ playing, speed, onToggle }) {
  const style = { '--speed': `${1 / speed}s` }
  return (
    <button
      type="button"
      className={`cat-stage ${playing ? 'is-playing' : 'is-paused'}`}
      style={style}
      onClick={onToggle}
      aria-label={playing ? '고양이 춤 멈추기' : '고양이 춤 시작하기'}
    >
      <div className="cat-shadow" />
      <svg className="cat" viewBox="0 0 200 260" role="img" aria-label="춤추는 고양이">
        <g className="tail">
          <path d="M150 210 Q200 200 190 150 Q186 130 170 140" stroke="#f4a259" strokeWidth="14" fill="none" strokeLinecap="round" />
        </g>
        <g className="body-wrap">
          <ellipse cx="100" cy="195" rx="48" ry="50" fill="#f4a259" />
          <ellipse cx="100" cy="205" rx="26" ry="34" fill="#fde6c8" />
          <g className="arm arm-left">
            <rect x="38" y="165" width="16" height="48" rx="8" fill="#f4a259" />
          </g>
          <g className="arm arm-right">
            <rect x="146" y="165" width="16" height="48" rx="8" fill="#f4a259" />
          </g>
          <ellipse cx="78" cy="250" rx="16" ry="8" fill="#f4a259" />
          <ellipse cx="122" cy="250" rx="16" ry="8" fill="#f4a259" />
          <g className="head">
            <polygon points="45,75 52,22 92,55" fill="#f4a259" />
            <polygon points="155,75 148,22 108,55" fill="#f4a259" />
            <polygon points="55,66 58,38 78,56" fill="#f2a6b0" />
            <polygon points="145,66 142,38 122,56" fill="#f2a6b0" />
            <circle cx="100" cy="105" r="60" fill="#f4a259" />
            <g className="eyes">
              <ellipse cx="78" cy="100" rx="8" ry="10" fill="#222" />
              <ellipse cx="122" cy="100" rx="8" ry="10" fill="#222" />
              <circle cx="81" cy="96" r="3" fill="#fff" />
              <circle cx="125" cy="96" r="3" fill="#fff" />
            </g>
            <polygon points="94,118 106,118 100,126" fill="#e5707e" />
            <path d="M100 126 Q92 138 84 130 M100 126 Q108 138 116 130" stroke="#222" strokeWidth="3" fill="none" strokeLinecap="round" />
            <g stroke="#222" strokeWidth="2" strokeLinecap="round">
              <line x1="30" y1="116" x2="62" y2="120" />
              <line x1="30" y1="130" x2="62" y2="127" />
              <line x1="170" y1="116" x2="138" y2="120" />
              <line x1="170" y1="130" x2="138" y2="127" />
            </g>
          </g>
        </g>
      </svg>
    </button>
  )
}
