import { createContext, MutableRefObject } from "react";

export type RovingFocusContextType = {
    focusedIndex: number;
    setFocusedIndex: (index:number) => void;
    itemRefs: MutableRefObject<(HTMLElement | null)[]>;
    getNavigationKeys: () => {next: string, prev: string};
    moveFocus: (dir: 'next' | 'prev') => void;
}

export const RovingFocusContext = createContext<RovingFocusContextType>({} as RovingFocusContextType)

