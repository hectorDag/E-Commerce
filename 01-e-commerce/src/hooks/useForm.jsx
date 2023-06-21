import { useState } from 'react'

function useForm (callback, defaults) {
  const [input, setInput] = useState(defaults)

  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  return {
    input,
    handleSubmit,
    handleInputChange
  }
}

export default useForm
