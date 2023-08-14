import React from 'react';
import ParticipantsInput from '../molecules/ParticipantsInput';
import GroupCountInput from '../molecules/GroupCountInput';
import Button from '../atoms/Button';

interface GroupGeneratorProps {
    participants: string;
    groupCount: number;
    onParticipantsChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onGroupCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onGenerateGroups: () => void;
}

const GroupGenerator: React.FC<GroupGeneratorProps> = ({
                                                           participants,
                                                           groupCount,
                                                           onParticipantsChange,
                                                           onGroupCountChange,
                                                           onGenerateGroups
                                                       }) => {
    return (
        <div>
            <h1>Group Divider Tool</h1>
            <ParticipantsInput value={participants} onChange={onParticipantsChange} />
            <GroupCountInput value={groupCount} onChange={onGroupCountChange} />
            <Button onClick={onGenerateGroups}>Generate Groups</Button>
        </div>
    );
};

export default GroupGenerator;
