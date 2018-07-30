import React from 'react';
import { Col } from '../grid';
import { Link } from 'react-router-dom';

var styles;

class PhotoContainer extends React.Component {
    
    render() {
        if(this.props.absolute === true) {
            styles = {
                boxShadow: "0 1px 3px 0 rgba(0,0,0,0.35)",
                borderRadius: "2px",
                background: "url(" + this.props.img + ") no-repeat center center",
                backgroundSize: "cover",
                position: "absolute"
            }
        }
        else {
            styles = {
                boxShadow: "0 1px 3px 0 rgba(0,0,0,0.35)",
                borderRadius: "2px",
                background: "url(" + this.props.img + ") no-repeat center center",
                backgroundSize: "cover",
                position: "relative"
            }
        }

        var blockStyles = {
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.35)",
            borderRadius: "2px",
            background: "url(" + this.props.img + ") no-repeat center center",
            position: "relative",
            margin: "5px",
        }

        var urlString = this.props.id;

        if (this.props.height === undefined) {
            return (
                <Col xsWidth={this.props.width[3]} smWidth={this.props.width[2]} mdWidth={this.props.width[1]} lgWidth={this.props.width[0]}
                    xsHeight={this.props.height[3]} smHeight={this.props.height[2]} mdHeight={this.props.height[1]} lgHeight={this.props.height[0]}
                    xsXOffset={this.props.x[3]} smXOffset={this.props.x[2]} mdXOffset={this.props.x[1]} lgXOffset={this.props.x[0]}
                    xsYOffset={this.props.y[3]} smYOffset={this.props.y[2]} mdYOffset={this.props.y[1]} lgYOffset={this.props.y[0]}
                    xsZ={this.props.z[3]} smZ={this.props.z[2]} mdZ={this.props.z[1]} lgZ={this.props.z[0]}
                    style={styles} className={this.props.className} >
                </Col>
            );
        }
        // Project block 
        else if (this.props.x === undefined) {
            return (
                <Link to={{
                    pathname: `/${urlString}`,
                    state: {
                        back: "/"
                    }
                }}>
                    <Col xsWidth={this.props.width[3]} smWidth={this.props.width[2]} mdWidth={this.props.width[1]} lgWidth={this.props.width[0]}
                        xsHeight={this.props.height[3]} smHeight={this.props.height[2]} mdHeight={this.props.height[1]} lgHeight={this.props.height[0]}
                        style={blockStyles} className="projectBlock" >
                    </Col>
                </Link>
            );
        }
        else if (this.props.id === undefined) {
            return (
                <Col xsWidth={this.props.width[3]} smWidth={this.props.width[2]} mdWidth={this.props.width[1]} lgWidth={this.props.width[0]}
                    xsHeight={this.props.height[3]} smHeight={this.props.height[2]} mdHeight={this.props.height[1]} lgHeight={this.props.height[0]}
                    xsXOffset={this.props.x[3]} smXOffset={this.props.x[2]} mdXOffset={this.props.x[1]} lgXOffset={this.props.x[0]}
                    xsYOffset={this.props.y[3]} smYOffset={this.props.y[2]} mdYOffset={this.props.y[1]} lgYOffset={this.props.y[0]}
                    xsZ={this.props.z[3]} smZ={this.props.z[2]} mdZ={this.props.z[1]} lgZ={this.props.z[0]}
                    style={styles} className={this.props.className} >
                </Col>
            );
        }
        else {
            return (
                <Link to={{
                    pathname: `/${urlString}`,
                    state: {
                        back: "/"
                    }
                }}>
                    <Col xsWidth={this.props.width[3]} smWidth={this.props.width[2]} mdWidth={this.props.width[1]} lgWidth={this.props.width[0]}
                        xsHeight={this.props.height[3]} smHeight={this.props.height[2]} mdHeight={this.props.height[1]} lgHeight={this.props.height[0]}
                        xsXOffset={this.props.x[3]} smXOffset={this.props.x[2]} mdXOffset={this.props.x[1]} lgXOffset={this.props.x[0]}
                        xsYOffset={this.props.y[3]} smYOffset={this.props.y[2]} mdYOffset={this.props.y[1]} lgYOffset={this.props.y[0]}
                        xsZ={this.props.z[3]} smZ={this.props.z[2]} mdZ={this.props.z[1]} lgZ={this.props.z[0]}
                        style={styles} className={this.props.className} >
                    </Col>
                </Link>
            );
        }

    }
}

export default PhotoContainer;