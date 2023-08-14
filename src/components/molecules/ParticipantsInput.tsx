import React from 'react';

interface ParticipantsInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ParticipantsInput: React.FC<ParticipantsInputProps> = ({value, onChange}) => {
    return (
        <div className="ParticipantsInput">
            <p><label htmlFor="participantsInput">1行ずつ分割するメンバーを入力7してください</label></p>
            <textarea id="participantsInput" rows={6} value={value} onChange={onChange}/>
        </div>
    );
};

export default ParticipantsInput;
