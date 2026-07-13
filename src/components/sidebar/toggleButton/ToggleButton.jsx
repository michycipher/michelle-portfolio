import "./ToggleButton.scss";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button
      type="button"
      className="toggle-button"
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={open}
      aria-controls="sidebar-navigation"
      onClick={() => setOpen((previousOpen) => !previousOpen)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23" aria-hidden="true">
        <path
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d={open ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
        />
        <path
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          opacity={open ? 0 : 1}
        />
        <path
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d={open ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
