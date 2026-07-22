import { useState, useCallback } from 'react'

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const reset = useCallback(() => {
    setValues(initialValues)
  }, [initialValues])

  return { values, handleChange, reset, setValues }
}
