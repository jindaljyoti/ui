'use client';
import React, { useContext } from 'react';
import { customClassSwitcher } from '~/core';
import TabTrigger from './TabTrigger';
import { TabProps } from '../types';
import TabsRootContext from '../context/TabsRootContext';

const COMPONENT_NAME = 'TabList';

export type TabListProps = {
    tabs?: Tab[]
    className?: string;
    customRootClass?: string;
    setActiveTab: React.Dispatch<Tab>;
    activeTab: TabProps;
}

const TabList = ({ className = '', customRootClass = '' }: TabListProps) => {
    const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME);
    const { tabs, activeTab, setActiveTab } = useContext(TabsRootContext);

    // TODO: in the previous return value of
    // {tabs.map((tab, index) => {
    //  return <TabTrigger activeTab={activeTab} setActiveTab={setActiveTab} key={index} tab={tab} index={index} />;
    // })
    // idk if React changed anything, but because its mapped, it shouldve worked. maybe it is the wrong prop? look into it.
    // ive temporarily added an unnecessary '
    return <div role="tablist" aria-orientation='horizontal' aria-label="todo" className={`${rootClass} ${className}`}>
        {tabs.map((tab, index) => {
            return <TabTrigger activeTab={activeTab} setActiveTab={setActiveTab} key={index} tab={tab} index={index} />;
        })
        }
    </div>;
};

TabList.displayName = COMPONENT_NAME;

export default TabList;
