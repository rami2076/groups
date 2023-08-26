import React from 'react';
import './GroupCountInput.css'

interface GroupCountInputProps {
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GroupCountInput: React.FC<GroupCountInputProps> = ({value, onChange}) => {
    return (
        <div className="GroupCountInput">
            <label htmlFor={"GroupCountInput"}>グループ数を入力してください</label>
            <input id="GroupCountInput" type="number" min={2} value={value} onChange={onChange}/>
        </div>
    );
};

export default GroupCountInput;
