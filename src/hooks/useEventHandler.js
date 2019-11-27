import { useRef, useEffect } from 'react'

const useEventHandler = (eventName, handler, element = document.body) => {
  console.log('useEventHandler called')
  const handlerRef = useRef()

  useEffect(() => {
    console.log('handler updated')
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    console.log('addEventListener')

    const eventListener = e => handlerRef.current(e)
    element.addEventListener(eventName, eventListener)

    return () => {
      console.log('removeEventListener')
      element.removeEventListener(eventName, eventListener)
    }
  }, [element, eventName])

}
export default useEventHandler
