import React from 'react';
import { Col } from '../grid';

var colStyle;




class TextContainer extends React.Component {


    render() {
        if (this.props.center) {
            colStyle = {
                position: "relative",
                textAlign: "center"
            }
        }
        else {
            colStyle = {
                position: "relative",
            }
        }

        if (this.props.title === undefined) {
            return (
                <Col xsWidth={this.props.width[3]} smWidth={this.props.width[2]} mdWidth={this.props.width[1]} lgWidth={this.props.width[0]}
                    xsXOffset={this.props.x[3]} smXOffset={this.props.x[2]} mdXOffset={this.props.x[1]} lgXOffset={this.props.x[0]}
                    xsYOffset={this.props.y[3]} smYOffset={this.props.y[2]} mdYOffset={this.props.y[1]} lgYOffset={this.props.y[0]}
                    style={colStyle}
                >
                    <p>{this.props.text}</p>
                </Col>
            );
        }
        else {
            return (
                <Col xsWidth={this.props.width[3]} smWidth={this.props.width[2]} mdWidth={this.props.width[1]} lgWidth={this.props.width[0]}
                    xsXOffset={this.props.x[3]} smXOffset={this.props.x[2]} mdXOffset={this.props.x[1]} lgXOffset={this.props.x[0]}
                    xsYOffset={this.props.y[3]} smYOffset={this.props.y[2]} mdYOffset={this.props.y[1]} lgYOffset={this.props.y[0]}
                    style={colStyle}
                >   
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </Col>               
            )
        }
    }
}

export default TextContainer;