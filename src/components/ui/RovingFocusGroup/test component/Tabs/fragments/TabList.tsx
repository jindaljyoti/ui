'use client';
import React, { useContext, useRef, useState } from 'react';
import { clsx } from 'clsx';
import TabTrigger from './TabTrigger';
import { TabProps } from '../types';
import TabsRootContext from '../context/TabsRootContext';
import RovingFocus from '../../../RovingFocus';
import { handleKeyDown } from '../../../helpers/useKeyboardNavigation';
const COMPONENT_NAME = 'TabList';

export type TabListProps = {
    tabs?: Tab[]
    className?: string;
    customRootClass?: string;
    setActiveTab: React.Dispatch<Tab>;
    activeTab: TabProps;
}

const TabList = ({ className = '', children }: TabListProps) => {
    const { rootClass } = useContext(TabsRootContext);
   
     const listRef = useRef<HTMLElement>(null)
    
    return <RovingFocus.Root>
        <RovingFocus.Group>
    <div role="tablist" aria-orientation='horizontal' aria-label="todo" className={clsx(`${rootClass}-list`, className)}
       onKeyDown={(e:any) => handleKeyDown(e,listRef,"tab")} 
       ref={listRef}
    >
        {children}
    </div>
    </RovingFocus.Group>
    </RovingFocus.Root>
};

TabList.displayName = COMPONENT_NAME;

export default TabList;
