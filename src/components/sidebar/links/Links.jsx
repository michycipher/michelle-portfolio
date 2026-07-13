const Links = ({ setOpen, open }) => {
  const items = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Experience",
    "Contact",
  ];

  return (
    <div className="links">
      {items.map((item) => (
        <a
          href={`#${item}`}
          key={item}
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
