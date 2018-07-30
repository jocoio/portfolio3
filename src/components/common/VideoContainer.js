import React from 'react';
import { Col } from '../grid';

var colStyles = {
    position: "relative"
}

class TextContainer extends React.Component {

    render() {

        return (
            <Col xsWidth={this.props.width[3]} smWidth={this.props.width[2]} mdWidth={this.props.width[1]} lgWidth={this.props.width[0]}
                xsXOffset={this.props.x[3]} smXOffset={this.props.x[2]} mdXOffset={this.props.x[1]} lgXOffset={this.props.x[0]}
                xsYOffset={this.props.y[3]} smYOffset={this.props.y[2]} mdYOffset={this.props.y[1]} lgYOffset={this.props.y[0]}
                style={colStyles}
            >   
                <div className="videoWrapper">
                    <iframe width="1920" height="1080" src={this.props.url} title="video" frameBorder="0" allowFullScreen />
                </div>
            </Col>               
        )   
    }
}

export default TextContainer;