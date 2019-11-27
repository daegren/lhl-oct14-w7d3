import React, { useState, useCallback } from "react";
import useEventHandler from '../hooks/useEventHandler'

const EventHandlerDemo = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 })

  const handler = useCallback(e => {
    setPoint({ x: e.clientX, y: e.clientY })
  }, [])
  useEventHandler('mousemove', handler)

  return (
    <div>
      Mouse is at: ({point.x}, {point.y})
    </div>
  );
}

export default EventHandlerDemo;
