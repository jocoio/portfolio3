import React from 'react';
import { Col } from '../grid';
import { Link } from 'react-router-dom';

// React Redux
import { connect } from 'react-redux';
import { curtainColor } from '../../redux/actions/curtain';
import PropTypes from 'prop-types';

class ProjectBlock extends React.Component {

    idToHex(id) {
        switch (id) {
            case "hellola":
                return ["#c75f29", "#db91a3", "#8fafcd"];
            case "portfolio":
                return ["#32b67a", "#fa8072", "#fcd12A"];
            case "scoutsite":
                return ["#00A4B7", "#f8971d", "#cf2326"];
            case "scout":
                return ["#00A4B7", "#f8971d", "#cf2326"];
            case "unsize":
                return ["#40e4c4", "#e6006c", "#0B37F5"];
            case "thisgirlcodes":
                return ["#f44b48", "#5d9bcf", "#FDE568"];
            case "myhousing":
                return ["#32b67a", "#fa8072", "#fcd12A"];
            default:
                return ["#32b67a", "#fa8072", "#fcd12A"];
        }
    }

    render() {
        var content = this.props.data;
        var photo = require(`../../images/projects/${content.url}`);

        var blockStyles = {
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.35)",
            borderRadius: "2px",
            background: "url(" + photo + ") no-repeat center center",
            position: "relative",
            margin: "5px",
        }

        return (
            <Link onClick={() => this.props.curtainColor(this.idToHex(content.id))}
                to={{
                    pathname: `/${content.id}`,
                    state: {
                        back: "/"
                    }
                }}
            >
                <Col xsWidth={12} smWidth={6} mdWidth={6} lgWidth={4}
                    xsHeight={3} smHeight={5} mdHeight={4} lgHeight={5}
                    style={blockStyles} className="projectBlock" >
                    <h3 className="contentLabel">{content.label}</h3>
                </Col>
            </Link>
        );
    }
}

ProjectBlock.propTypes = {
    curtainColor: PropTypes.func.isRequired
};

export default connect(null, { curtainColor })(ProjectBlock);