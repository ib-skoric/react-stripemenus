import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {

  const {isSubmenuOpen, location} = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
      const submenu = container.current;
      const {center, bottom} = location;

      container.style.left = `${center}px`;
      container.style.top = `${bottom}px`;
  }, [location])

  return(
    <aside ref="container" className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}>
      Submenu
    </aside>
    )
}

export default Submenu
