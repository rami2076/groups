import React from 'react';

interface ParticipantsInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ParticipantsInput: React.FC<ParticipantsInputProps> = ({ value, onChange }) => {
    return (
        <div>
            <label>Enter participant names (one per line):</label>
            <textarea rows={6} value={value} onChange={onChange} />
        </div>
    );
};

export default ParticipantsInput;
