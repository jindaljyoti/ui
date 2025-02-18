
export const handleKeyDown = (
  event: KeyboardEvent, 
  containerRef: React.RefObject<HTMLElement>,
  role: string) => {
     
  const focusableItems = containerRef.current?.querySelectorAll<HTMLButtonElement>(`[role = "${role}"]`)
    
    
  if(!focusableItems?.length) return
  const currentIndex = Array.from(focusableItems).findIndex((item) => item === document.activeElement)
  let nextIndex = currentIndex
  const length = focusableItems.length
  if(event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % length
  }

  else if(event.key === 'ArrowLeft') {
      nextIndex = (currentIndex -1 + length) % length
  }
  focusableItems[nextIndex]?.focus()

 
}