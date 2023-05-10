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
      <a href="#" className="logo">
        Athviha
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </header>
  );
}
