import React, { useState, useContext, useRef }from "react";
import { RovingFocusContext } from "../contexts/RovingFocusContext";

type RovingFocusRootProps = {
    children: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
    dir?: 'ltr' | 'rtl';
    loop?: boolean;
}
const RovingFocusRoot = ({ children, orientation='horizontal', dir, loop=true }:RovingFocusRootProps) => {
       
    const [focusedIndex, setFocusedIndex] = useState(0);
    const itemRefs = useRef<(HTMLElement | null)[]>([])
   
//     const getNavigationKeys = () => {
//         if(orientation === 'horizontal') {
//             return dir === 'rtl' ? {next: 'ArrowLeft', prev: 'ArrowRight'}:
//                    {next: 'ArrowRight', prev: 'ArrowLeft'}
//         }
//          return {next: 'ArrowDown', prev: 'ArrowUp'}
//     }

//     const moveFocus = (dir: 'next' | 'prev'): void => {
//           setFocusedIndex((prevIndex:number) => {
//               if(dir === 'next'){
//                  return loop ? (prevIndex +1)% itemCount : Math.min(prevIndex +1, itemCount-1)
//                }
//                else{
//                  return loop ? (prevIndex -1 + itemCount)% itemCount : Math.max(prevIndex -1, 0)
//                }
        
//     })

 
//  }

    return <RovingFocusContext.Provider value={{focusedIndex,setFocusedIndex,itemRefs,orientation,loop}}>
         {children}
    </RovingFocusContext.Provider>
    
}

export const useRovingFocus = () => {
    return useContext(RovingFocusContext)
}

export default RovingFocusRoot