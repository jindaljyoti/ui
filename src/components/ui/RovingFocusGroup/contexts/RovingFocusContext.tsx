import { createContext, MutableRefObject } from "react";

export type RovingFocusContextType = {
    focusedIndex: number;
    setFocusedIndex: (index:number) => void;
    itemRefs: MutableRefObject<(HTMLElement | null)[]>;
    orientation: 'horizontal' | 'vertical' | undefined;
    loop: boolean;
}

export const RovingFocusContext = createContext<RovingFocusContextType>({} as RovingFocusContextType)

