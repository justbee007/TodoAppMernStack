import React from 'react';

export class Newtodo extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {   return(
        <nav>
        <span className="create" onClick={this.props.createHandler}><img alt = "Create" src="assets/icon-content-add_24px.png"></img>
        
            </span>
            </nav>
    )
    }
}