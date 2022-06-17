import { ChangeEvent, useState } from "react";

interface Props {
    initialValue: string,
}

const useInput = ({initialValue}: Props) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (value: ChangeEvent<HTMLInputElement>) => {
        setValue(value.target.value)
    }

    return {
        value,
        onChange: handleChange,
    }
}

export default useInput;