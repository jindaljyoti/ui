import React from 'react';
import { customClassSwitcher } from '~/core';
import { clsx } from 'clsx';

const COMPONENT_NAME = 'TextArea';

export type TextAreaProps = {
    children: React.ReactNode;
    customRootClass?: string;
    className?: string;
}

const TextAreaRoot = ({ children, customRootClass = '', className = '' }:TextAreaProps) => {
    const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME);
    return <div className={clsx(rootClass, className)}>
        {children}
    </div>;
};

export default TextAreaRoot;
