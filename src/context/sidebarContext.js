import { createContext, ReactElement, useEffect, useState } from "react";

/*
    The Sidebar feature defined in the layoutSlice of
    the src/actions folder is the current implementation
    used in this template.

    To use the sidebar context implementation instead, then
    you can implement this by calling useContext(sidebarContext)
    from anywhere in your app.
*/
const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
});



export function SidebarContextProvider({children}) {
  const [isOpen, setIsOpen] = useState(false);

  
  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContext;