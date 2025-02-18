import React, { useState, useRef } from 'react';
import { clsx } from 'clsx';
import { customClassSwitcher } from '~/core';
import { getAllBatchElements, getNextBatchItem, getPrevBatchItem } from '~/core/batches';

import { ToggleContext } from '../contexts/toggleContext';
import RovingFocus from '../../../RovingFocus';
import { handleKeyDown } from '../../../helpers/useKeyboardNavigation';

const ToggleGroupRoot = ({ type = 'multiple', className = '', loop = true, customRootClass = '', componentName = '', value = null, color = '', children }:any) => {
    const rootClass = customClassSwitcher(customRootClass, componentName);
    const toggleGroupRef = useRef(null);
    // value can be either a string or an array of strings
    // if its null, then no toggles are active

    const [activeToggles, setActiveToggles] = useState(value || []);

    // const nextItem = () => {
    //     const currentRef = toggleGroupRef.current;
    //     if (currentRef) {
    //         const batches = getAllBatchElements(currentRef);
    //         const nextItem = getNextBatchItem(batches, loop);
    //         if (nextItem) {
    //             (nextItem as HTMLElement)?.focus();
    //         }
    //     }
    // };

    // const previousItem = () => {
    //     const currentRef = toggleGroupRef?.current;
    //     if (currentRef) {
    //         const batches = getAllBatchElements(currentRef);
    //         const prevItem = getPrevBatchItem(batches, loop);
    //         if (prevItem) {
    //             (prevItem as HTMLElement)?.focus();
    //         }
    //     }
    // };

    const sendValues = {
        // nextItem,
        // previousItem,
        activeToggles,
        setActiveToggles,
        type
    };

    const data_attributes: Record<string, string> = {};

    if (color) {
        data_attributes['data-accent-color'] = color;
    }

    return (
        <RovingFocus.Root>
            <RovingFocus.Group>
        <div className={clsx(rootClass, className)} role="group" ref={toggleGroupRef} {...data_attributes}
        onKeyDown={(e:any) => handleKeyDown(e,toggleGroupRef,"button")}
        >
            <ToggleContext.Provider
                value={sendValues}>
                {children}
            </ToggleContext.Provider>
        </div>
        </RovingFocus.Group>
    </RovingFocus.Root>
    );
};

export default ToggleGroupRoot;
