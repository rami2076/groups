import React from 'react';
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className="Button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
