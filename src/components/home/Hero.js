import React from 'react';

export default class Hero extends React.Component {

    render() {
        return (
            <div className="landing">
                <div className="intro">   
                    <p>Hi, I'm</p>
                    <h1>Jon Corbett</h1>
                    <p>a Boston based designer and developer <span role="img" aria-label="hand emoji">👋</span></p>
                </div>
            </div>
        );
    }
}