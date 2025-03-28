import React, { JSX, useState } from 'react';
import Switch, { SwitchProps } from '../Switch';
import SandboxEditor from '~/components/tools/SandboxEditor/SandboxEditor';

const Variants = ['surface', 'soft'];
const Sizes = ['small', 'medium', 'large', 'x-large'];

export default {
    title: 'Components/Switch',
    component: Switch,
    render: (args: JSX.IntrinsicAttributes & SwitchProps) => <CheckBox {...args}/>
};

const CheckBox = (args: SwitchProps) => {
    const variants = ['classic', 'surface', 'solid'];
    const [isChecked, setIsChecked] = useState(true);

    const handleChange = (state: boolean | ((prevState: boolean) => boolean)) => {
        setIsChecked(state);
    };
    return <SandboxEditor className="flex flex-col gap-2">
        {variants.map((variant, index) => (
            <Switch defaultChecked={args} key={index} variant={variant} onChange={handleChange} {...args}/>
        ))}

    </SandboxEditor>;
};

export const All = {};

export const controlled = () => {
    const [checked, setChecked] = useState(true);

    const handleToggle = () => {
        setChecked((prev) => !prev);
    };
    return <SandboxEditor>
        <Switch checked={checked} onChange={handleToggle}/>
    </SandboxEditor>;
};

export const Uncontrolled = () => {
    return <SandboxEditor>
        <Switch defaultChecked ={true} onChange={() => {}}/>

    </SandboxEditor>;
};
export const Color = {
    args: {
        color: 'blue'
    }
};

export const Size = () => {
    return <SandboxEditor>
        <div className='mt-4 mb-2'>
            <p className='text-gray-950'>Switch Size</p>
        </div>
        <div>
            <div className='flex flex-col gap-2'>
                {Sizes.map((size, index) => {
                    return <Switch key={index} size={size} />;
                })}
            </div>

        </div>
    </SandboxEditor>;
};


export const Variant = () => {
    return <SandboxEditor>
        <div className='mt-4 mb-2'>
            <p className='text-gray-950'>Switch Variant</p>
        </div>
        <div>
            <div className='flex flex-col gap-2'>
                {Variants.map((variant, index) => {
                    return <Switch key={index} variant={variant} />;
                })}
            </div>

        </div>
    </SandboxEditor>;
};