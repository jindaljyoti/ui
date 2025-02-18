import React, { cloneElement, ReactElement, useEffect, useRef } from "react";
import { useRovingFocus } from "./RovingFocusRoot";

type RovingFocusItemProps = {
   asChild?: boolean;
   onFocus?: () => void;
   children: React.ReactNode;
   index: number;
}
const RovingFocusItem = ({ children, index, asChild=false, onFocus }:RovingFocusItemProps) => { 
 
     const {focusedIndex, setFocusedIndex, itemRefs} = useRovingFocus()
     
     const ref = useRef<HTMLElement | null>(null)

     // Register this itemRef in the array
     useEffect(() => {
        itemRefs.current[index] = ref.current
        
     },[index,itemRefs])

     useEffect(() => {
        if(focusedIndex === index){
            itemRefs.current[index]?.focus()
            
        }
     },[index,itemRefs,focusedIndex])

     const childProps = {
      ref,
      tabIndex: focusedIndex === index ? 0 : -1,
      onFocus: () => setFocusedIndex(index),
      role:'button',
     }
    return asChild ? cloneElement(children, childProps): <button {...childProps}> {children} </button>
          
}

export default RovingFocusItem