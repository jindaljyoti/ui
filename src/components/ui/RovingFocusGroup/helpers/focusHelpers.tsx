
export const getNavigationKeys = (orientation:'horizontal' | 'vertical', dir: 'ltr' | 'rtl') => {
      if(orientation === 'horizontal'){
        return dir === 'rtl'? 
               {next: 'ArrowRight', prev: 'ArrowLeft'} :
               {next: 'ArrowLeft', prev: 'ArrowRight'}
      }
      return {next: 'ArrowDown', prev: 'ArrowUp'}
}