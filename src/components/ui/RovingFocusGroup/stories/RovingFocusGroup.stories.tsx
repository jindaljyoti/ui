import React from "react";
import SandboxEditor from "~/components/tools/SandboxEditor/SandboxEditor";
import RovingFocusGroup from "../RovingFocusGroup";
import RovingFocusItem from "../fragments/RovingFocusItem";
import RovingFocus from "../RovingFocus";

const items = [
    {label: 'Item1'},
    {label: 'Item2'},
    {label: 'Item3'}
]
export default {
    title: 'WIP/RovingFocusGroup',
    component: RovingFocusGroup,
    render: () => <SandboxEditor>
        
    <RovingFocus.Root itemCount={items.length}>
        <RovingFocus.Group>
           {items.map((item,index) => (
            <RovingFocus.Item index={index}>
                   {item.label}
                </RovingFocus.Item>
                
              ))}  
        </RovingFocus.Group>      
    </RovingFocus.Root>
</SandboxEditor>
}

export const All = {}

