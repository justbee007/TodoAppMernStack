import React from 'react';
import { render } from 'react-dom';
import './Contacts.scss';

export class Contacts extends React.Component
{
    constructor(props)
    {
        super(props);
        const contacts = this.props.contacts;
    }
    render()
    {
        return <div>Contacts</div>
    }
}