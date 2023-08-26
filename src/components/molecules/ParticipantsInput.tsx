import React from 'react';
import './ParticipantsInput.css';

interface ParticipantsInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ParticipantsInput: React.FC<ParticipantsInputProps> = ({value, onChange}) => {
    return (
        <div className="ParticipantsInput">
            <label htmlFor="participantsInput">1行ずつ分割するメンバーを入力してください</label>
            <textarea id="participantsInput" rows={6} value={value} onChange={onChange}/>
        </div>
    );
};

export default ParticipantsInput;
