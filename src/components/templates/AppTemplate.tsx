import React from 'react';

interface AppTemplateProps {
    children: React.ReactNode;
}

const AppTemplate: React.FC<AppTemplateProps> = ({ children }) => {
    return <div className="App">{children}</div>;
};

export default AppTemplate;
