import React, {useState} from 'react';
import GroupGenerator from '../organisms/GroupGenerator';
import AppTemplate from '../templates/AppTemplate';
import './AppPage.css';
import GroupCard from "../molecules/GroupCard";

const AppPage: React.FC = () => {
    const [participants, setParticipants] = useState('');
    const [groupCount, setGroupCount] = useState<number>(2);
    const [groups, setGroups] = useState<string[][]>([]);
    const [darkMode, setDarkMode] = useState(false); // ダークモードの状態

    // ダークモードを切り替える関数
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    const handleParticipantsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setParticipants(event.target.value);
    };

    const handleGroupCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGroupCount(parseInt(event.target.value, 10));
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <div className="AppContent">
                <div className="DarkModeToggle">
                    <label>
                        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                        Dark Mode
                    </label>
                </div>
                <GroupGenerator
                    participants={participants}
                    groupCount={groupCount}
                    onParticipantsChange={handleParticipantsChange}
                    onGroupCountChange={handleGroupCountChange}
                />
                {groups.length > 0 && (
                    <div className="GroupsContainer">
                        {groups.map((group, index) => (
                            <GroupCard key={index} participants={group} groupNumber={index + 1}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppPage;
