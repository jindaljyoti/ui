import React, { useEffect, useRef } from "react";
import { useRovingFocus } from "./RovingFocusRoot";
import { useKeyboardNavigation } from "../helpers/useKeyboardNavigation";

type RovingFocusItemProps = {
   asChild?: boolean;
   onFocus?: () => void;
   children: React.ReactNode;
   index: number;
}
const RovingFocusItem = ({ children, index, asChild, onFocus, ...props}:RovingFocusItemProps) => { 
 
     const {focusedIndex, setFocusedIndex, itemRefs} = useRovingFocus()
     const handleKeyDown = useKeyboardNavigation();
     
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

    return <div className="p-2 border bg-gray-600 w-[100px]" 
         ref={ref}
         tabIndex={focusedIndex === index ? 0 : -1}
         onKeyDown={handleKeyDown}
         onFocus={() => setFocusedIndex(index)}
         role= 'button'
         {...props}

        >
            {children}
    
    </div>
    
}

export default RovingFocusItem