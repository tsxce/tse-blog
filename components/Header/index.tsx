import React, { useRef, useEffect } from "react"
import LightDarkSwitcher from "../Button/LightDarkSwitcher";

export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null)

    const HandleScroll = () => {
        headerRef.current?.classList.add("sticky-nav-full");
    }

    const HandleTop = () => {
        headerRef.current?.classList.remove("sticky-nav-full");
    }

    function handleClickHeader (/** @type {MouseEvent} */ ev) {
        // if (![navRef.current, titleRef.current].includes(ev.target)) return
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        console.log(scrollPosition);
        if(scrollPosition > 0) {
            HandleScroll()
        } else {
            HandleTop()
        }
    };
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <div className="sticky-nav" ref={headerRef}>
            <button onClick={handleClickHeader}>
                <svg
                    viewBox="0 0 24 24"
                    className="caret w-6 h-6 absolute inset-x-0 bottom-0 mx-auto cursor-pointer opacity-30 group-hover:opacity-100 transition duration-100"
                >
                    <path
                        d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
                        className="fill-black dark:fill-white"
                    />
                </svg>
            </button>
            <LightDarkSwitcher />
        </div>
    )
}