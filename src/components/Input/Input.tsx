import { FC } from "react"
import useInput from "../../hooks/useInput"

const Input = () => {
  const name = useInput({
    initialValue: 'harry',
    placeholder: 'Name'
  });

  const surname = useInput({
    initialValue: 'potter'
  });
  
  return (
    <>
    <input type="text" 
      {...name}
    />
    <input type="text" 
      {...surname}
    />
    </>
  )
}

export default Input