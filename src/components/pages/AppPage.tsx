import React, { useState } from 'react';
import GroupGenerator from '../organisms/GroupGenerator';
import AppTemplate from '../templates/AppTemplate';
import './AppPage.css';

const AppPage: React.FC = () => {
    const [participants, setParticipants] = useState('');
    const [groupCount, setGroupCount] = useState<number>(2);

    const handleParticipantsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setParticipants(event.target.value);
    };

    const handleGroupCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGroupCount(parseInt(event.target.value, 10));
    };

    const generateGroups = () => {
        // ... (same logic as before)
    };

    return (
        <AppTemplate>
            <GroupGenerator
                participants={participants}
                groupCount={groupCount}
                onParticipantsChange={handleParticipantsChange}
                onGroupCountChange={handleGroupCountChange}
                onGenerateGroups={generateGroups}
            />
        </AppTemplate>
    );
};

export default AppPage;
