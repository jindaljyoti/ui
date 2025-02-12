import {KeyboardEvent} from "react";
import { useRovingFocus } from "../fragments/RovingFocusRoot";

export const useKeyboardNavigation = () => {
    const { moveFocus, getNavigationKeys } = useRovingFocus()
    const { next, prev} = getNavigationKeys()

      return (event: KeyboardEvent<HTMLElement>):void => {
           if(event.key === next) {
            moveFocus('next')
           }
           if(event.key === prev) {
             moveFocus('prev')
           }
    }
} 