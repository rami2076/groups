import React from 'react';
import './GroupCard.css';

interface GroupCardProps {
    participants: string[];
    groupNumber: number;
}

const GroupCard: React.FC<GroupCardProps> = ({ participants, groupNumber }) => {
    return (
        <div className="GroupCard">
            <h2>Group {groupNumber}</h2>
            <ul>
                {participants.map((participant, index) => (
                    <li key={index}>{participant}</li>
                ))}
            </ul>
        </div>
    );
};

export default GroupCard;
