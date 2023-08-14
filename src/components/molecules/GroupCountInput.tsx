import React from 'react';

interface GroupCountInputProps {
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GroupCountInput: React.FC<GroupCountInputProps> = ({value, onChange}) => {
    return (
        <div>
            <p><label>グループ数を入力してください</label></p>
            <input type="number" min={2} value={value} onChange={onChange}/>
        </div>
    );
};

export default GroupCountInput;
