import React from 'react';

const Link = ({ route }) => {
    return (
        
        <li>
            <a 
                href={route.path} 
                className="hover:bg-primary hover:text-primary-content transition-all duration-300 rounded-md px-4 py-2 font-medium"
            >
                {route.name}
            </a>
        </li>
    );
};

export default Link;