import React from 'react'

import './Input.scss'

interface IInputProps {
  text: string
  updateText: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ text, updateText }: IInputProps) => {
  return (
    <input value={text} onChange={updateText} className='input' type='text' />
  )
}

export default Input
