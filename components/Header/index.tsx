import React, { useRef, useEffect, useState, useCallback } from 'react'
// import LightDarkSwitcher from '../Button/LightDarkSwitcher'

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isFullNav, setIsFullNav] = useState(false)

  const HandleScroll = () => {
    headerRef.current?.classList.add('sticky-nav-full')
  }

  const HandleScrollAtTop = () => {
    headerRef.current?.classList.remove('sticky-nav-full')
  }

  function handleClickHeader(/** @type {MouseEvent} */ ev) {
    // if (![navRef.current, titleRef.current].includes(ev.target)) return
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY // => scroll position
    if (scrollPosition > 0) {
      HandleScroll()
      setIsFullNav(true)
    } else {
      HandleScrollAtTop()
      setIsFullNav(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="sticky-nav" ref={headerRef}>
      {isFullNav ? (
        <button onClick={handleClickHeader}>
          <svg
            viewBox="0 0 24 24"
            className={
              'caret w-6 h-6 absolute inset-x-0 bottom-0 mx-auto cursor-pointer opacity-30 group-hover:opacity-100 transition duration-100'
            }
          >
            <path
              d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
              className="fill-black dark:fill-white"
            />
          </svg>
        </button>
      ) : (
        ''
      )}
      <p className="font-extrabold">TSE</p>
      <div></div>
      {/* <LightDarkSwitcher /> */}
    </div>
  )
}
