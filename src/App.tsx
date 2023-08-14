import React, { useState } from 'react';
import './App.css';

function App() {
    const [participants, setParticipants] = useState('');
    const [groupCount, setGroupCount] = useState<number>(2);
    const [groups, setGroups] = useState<string[][]>([]);

    const handleParticipantsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setParticipants(event.target.value);
    };

    const handleGroupCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGroupCount(parseInt(event.target.value, 10));
    };

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

        setGroups(dividedGroups);
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
        <div className="App">
            <h1>Group Divider Tool</h1>
            <div>
                <label>一行ごとにグループに分けるメンバーを入力してください</label>
                <textarea rows={6} value={participants} onChange={handleParticipantsChange} />
            </div>
            <div>
                <label>Number of groups:</label>
                <input type="number" min={2} value={groupCount} onChange={handleGroupCountChange} />
            </div>
            <button onClick={generateGroups}>Generate Groups</button>
            {groups.length > 0 && (
                <div>
                    <h2>Groups:</h2>
                    {groups.map((group, index) => (
                        <div key={index}>
                            <strong>Group {index + 1}:</strong>
                            <ul>
                                {group.map((participant, participantIndex) => (
                                    <li key={participantIndex}>{participant}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;