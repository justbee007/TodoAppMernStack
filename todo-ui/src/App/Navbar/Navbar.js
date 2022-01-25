import React from 'react';
import './Navbar.scss';

export class Navbar extends React.Component
{
    render()
    {
        return (
        <nav>
            <span className="menu"></span>
            <h1 className="title">To-do App</h1>
            <span className="create"></span>
            </nav>
                    );
    }
}