import { ChangeEvent, useState } from "react";

interface Props {
    initialValue: string;
    placeholder?: string;
}

const useInput = ({initialValue, placeholder}: Props) => {
    const [value, setValue] = useState(initialValue)

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    

    return {
        value,
        placeholder: placeholder || 'mock placeholder',
        onChange: changeValue,
    }
}

export default useInput;