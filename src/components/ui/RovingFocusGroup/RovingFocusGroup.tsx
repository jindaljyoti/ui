import React, { useCallback } from "react";
import { useRovingFocus } from "./fragments/RovingFocusRoot";

type RovingFocusGroupType = {
    children: React.ReactNode;
}

const RovingFocusGroup = ({ children }:RovingFocusGroupType) => {
    const {focusedIndex, setFocusedIndex, itemRefs, orientation, loop} = useRovingFocus();

    const handleKeyDown = useCallback((event:React.KeyboardEvent<HTMLDivElement>) => {
            const itemsCount = itemRefs.current.length;
            let newIndex = focusedIndex;

            const isHorizontal = orientation === 'horizontal';
            const forwardKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';
            const backwardKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';

            if(event.key === forwardKey) {
                newIndex = focusedIndex +1;
                if(newIndex >= itemsCount){
                    newIndex = loop ? 0: focusedIndex;
                }
            }
            else if(event.key === backwardKey){
                newIndex = focusedIndex -1;
                if(newIndex < 0) {
                    newIndex = loop ? itemsCount-1: focusedIndex;
                }
            }

            if(newIndex !== focusedIndex) {
                event.preventDefault()
                setFocusedIndex(newIndex)
                itemRefs.current[newIndex]?.focus();
            }
    },[focusedIndex, setFocusedIndex, itemRefs, orientation, loop]

)

    
    return (
        <div role="group" onKeyDown={handleKeyDown}>
            {children}
        </div>
        
    )
}

export default RovingFocusGroup;