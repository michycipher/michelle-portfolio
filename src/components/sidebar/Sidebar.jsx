import { useEffect, useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className={`sidebar${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="sidebar-overlay"
        aria-label="Close navigation menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
      <nav
        className="bg"
        id="sidebar-navigation"
        aria-label="Primary navigation"
        aria-hidden={!open}
      >
        <Links setOpen={setOpen} open={open} />
      </nav>
      <ToggleButton open={open} setOpen={setOpen} />
    </div>
  );
};

export default Sidebar;
