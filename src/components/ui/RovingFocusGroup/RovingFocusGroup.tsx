import React from "react";

type RovingFocusGroupType = {
    children: React.ReactNode;
}

const RovingFocusGroup = ({ children }:RovingFocusGroupType) => {
    
    return (
        <div>
            {children}
        </div>
        
    )
}

export default RovingFocusGroup;