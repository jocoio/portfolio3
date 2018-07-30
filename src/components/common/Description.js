import React from 'react';
import { Col } from '../grid';

class Description extends React.Component {

    render() {
        var divStyle = {
            marginBottom: "25px",
            marginTop: "0px",
        };
        var text;

        // If the description contains more than one paragraph
        if(Array.isArray(this.props.info)) {
            text=this.props.info.map(function (listValue, idx) {
                    return <div key={idx} ><p>{listValue}</p><br/></div>;
                });
        }
        // One paragaraph
        else {
            text= <p>{this.props.info}</p>;
        }

        if(this.props.width === undefined) {
            return (
                <Col style={divStyle}>{text}</Col>
            );
        }
        else {
            return (
                <Col style={divStyle}
                    lgWidth={this.props.width[0]}
                    mdWidth={this.props.width[1]}
                    smWidth={this.props.width[2]}
                    xsWidth={this.props.width[3]}
                >
                    {text}
                </Col>
            );
        }
    }
}

export default Description;