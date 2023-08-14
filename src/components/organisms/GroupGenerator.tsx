import React from 'react';
import ParticipantsInput from '../molecules/ParticipantsInput';
import GroupCountInput from '../molecules/GroupCountInput';
import Button from '../atoms/Button';
import GroupCard from '../molecules/GroupCard'; // 追加

interface GroupGeneratorProps {
    participants: string;
    groupCount: number;
    onParticipantsChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onGroupCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GroupGenerator: React.FC<GroupGeneratorProps> = ({
                                                           participants,
                                                           groupCount,
                                                           onParticipantsChange,
                                                           onGroupCountChange
                                                       }) => {
    const [groups, setGroups] = React.useState<string[][]>([]);

    const generateGroups = () => {
        const participantList = participants.split('\n').filter(participant => participant.trim() !== '');
        const shuffledParticipants = shuffleArray(participantList);
        const dividedGroups: string[][] = [];
        const participantsPerGroup = Math.ceil(shuffledParticipants.length / groupCount);

        for (let i = 0; i < groupCount; i++) {
            const startIndex = i * participantsPerGroup;
            const endIndex = startIndex + participantsPerGroup;
            const group = shuffledParticipants.slice(startIndex, endIndex);
            dividedGroups.push(group);
        }

        setGroups(dividedGroups); // グループを設定
    };

    const shuffleArray = (array: string[]) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    return (
        <div>
            <h1>グループ分けツール</h1>
            <ParticipantsInput value={participants} onChange={onParticipantsChange}/>
            <GroupCountInput value={groupCount} onChange={onGroupCountChange}/>
            <Button onClick={generateGroups}>Generate Groups</Button>
            {groups.length > 0 && (
                <div className="GroupsContainer">
                    {groups.map((group, index) => (
                        <GroupCard key={index} participants={group} groupNumber={index + 1}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GroupGenerator;
