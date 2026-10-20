export default function AnimationControls({ playing, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button type="button" className="btn" onClick={onToggle} aria-pressed={playing}>
        {playing ? '⏸ 멈추기' : '▶ 춤추기'}
      </button>
      <label className="speed">
        속도 {speed.toFixed(1)}x
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
        />
      </label>
    </div>
  )
}
