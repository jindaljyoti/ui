import React from "react";
import SandboxEditor from "~/components/tools/SandboxEditor/SandboxEditor";
import RovingFocusGroup from "../RovingFocusGroup";
import RovingFocusItem from "../fragments/RovingFocusItem";
import RovingFocusRoot from "../fragments/RovingFocusRoot";

const items = [
    {label: 'Item1'},
    {label: 'Item2'},
    {label: 'Item3'}
]
export default {
    title: 'WIP/RovingFocusGroup',
    component: RovingFocusGroup,
    render: () => <SandboxEditor>
        
    <RovingFocusRoot itemCount={items.length}>
           {items.map((item,index) => (
            <RovingFocusItem index={index}>
                   {item.label}
                </RovingFocusItem>
                
              ))}  
    </RovingFocusRoot>
</SandboxEditor>
}

export const All = {}

