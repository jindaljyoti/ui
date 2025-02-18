import React from "react";
import SandboxEditor from "~/components/tools/SandboxEditor/SandboxEditor";
import RovingFocusGroup from "../RovingFocusGroup";
import RovingFocusItem from "../fragments/RovingFocusItem";
import RovingFocus from "../RovingFocus";
import Button from "../../Button/Button";

const items = [
    {label: 'Item1'},
    {label: 'Item2'},
    {label: 'Item3'}
]
export default {
    title: 'WIP/RovingFocusGroup',
    component: RovingFocusGroup,
    render: () => <SandboxEditor>
        
    <RovingFocus.Root orientation="vertical" loop={true}>
        <RovingFocus.Group>
           {items.map((item,index) => (
            <RovingFocus.Item index={index}>
                  <Button> {item.label} </Button>
                </RovingFocus.Item>
                
              ))}  
        </RovingFocus.Group> 
       
    </RovingFocus.Root>
</SandboxEditor>
}

export const All = {}

