import { useState } from 'react'

const useControlledComponent = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const onChangeHandler = e => setValue(e.target.value)
  const clear = () => setValue('')

  return [value, clear, onChangeHandler]
}
export default useControlledComponent
