import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();
  const observerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observerRef.current.observe(section));

    return () => observerRef.current.disconnect();
  }, []);

  function menuIcon() {
    setMenu(!menu);
  }

  return (
    <header className="header">
      <a href="#" className="logo">Joseph Da Costa</a>

      <nav className={menu ? "navbar active" : "navbar"} onClick={menuIcon}>
        <a href="#home" className={activeItem === "home" ? "active" : ""}>Home</a>
        <a href="#skills" className={activeItem === "skills" || location.pathname === "/skills" ? "active" : ""}>Skills</a>
        {/* <a href="#portfolio" className={activeItem === "portfolio" ? "active" : ""}>Portfolio</a> */}
        <a href="#contact" className={activeItem === "contact" || location.pathname === "/contact" ? "active" : ""}>Contact</a>
      </nav>

      <div className={menu ? "bx bx-menu" : "bx bx-x"} id="menu-icon" onClick={menuIcon}></div>
    </header>
  );
}
