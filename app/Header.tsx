"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={isSticky ? "sticky" : ""}>
      <a href="#" className="logo"></a>
      <div
        className={isOpen ? "bx bx-menu " : "bx bx-x "}
        id="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      <ul className={"navbar " + (isOpen ? "open " : "")}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#package">Specialities</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </header>
  );
}
