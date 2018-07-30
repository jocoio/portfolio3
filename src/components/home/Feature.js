import React from 'react';

// Routing
import { Link } from 'react-router-dom';
import { Row, Col } from '../grid';

// Components
import Category from '../common/Category';
import PhotoContainer from '../common/PhotoContainer';
import Description from '../common/Description';

// React Redux
import { connect } from 'react-redux';
import { curtainColor } from '../../redux/actions/curtain';
import PropTypes from 'prop-types';

class Feature extends React.Component {

    render() {
        var rowStyles = {
            position: "relative",
            maxHeight: "650px"
        }

        var colStyles = {
            position: "absolute"
        }

        var infoStyles = {
            maxWidth: "250px"
        }

        var content1 = this.props.data.feature1;
        var content2 = this.props.data.feature2;
        var content3 = this.props.data.feature3;

        var photo1 = require(`../../images/projects/${content1.url}`);
        var photo2 = require(`../../images/projects/${content2.url}`);
        var photo3 = require(`../../images/projects/${content3.url}`);

        var urlString = this.props.data.id;

        return (
            <Row style={rowStyles} className="featureRow">
                <Col lgWidth={4} mdWidth={3} smWidth={4} xsWidth={10}
                    lgXOffset={0} mdXOffset={0} smXOffset={1} xsXOffset={1}
                    xsYOffset={10}
                    style={colStyles}>

                    <h5 style={{ paddingTop: "15px" }}>Featured Project</h5>
                    <h1 style={{ paddingBottom: "10px" }}>{this.props.data.name}</h1>

                    <Col xsWidth={10} lgWidth={3}>
                        {this.props.data.category.map(function (listValue, idx) {
                            return <Category key={idx} category={listValue} />;
                        })}
                    </Col>

                    <Description style={infoStyles} info={this.props.data.info} width={[3, 3, 4, 12]} />
                    <Link className={"actionButton"}
                        to={{
                            pathname: `/${urlString}`,
                            state: {
                                back: "/"
                            }
                        }} onClick={() => this.props.curtainColor(["#00a4b7", "#00a4b7", "#00a4b7"])}>
                        See More
                    </Link>
                </Col>

                <PhotoContainer x={content1.x} y={content1.y} z={content1.z} width={content1.width} height={content1.height} img={photo1} size="100%" absolute />
                <PhotoContainer x={content2.x} y={content2.y} z={content2.z} width={content2.width} height={content2.height} img={photo2} size="100%" absolute />
                <PhotoContainer x={content3.x} y={content3.y} z={content3.z} width={content3.width} height={content3.height} img={photo3} size="100%" absolute />
            </Row>
        )
    }
}

Feature.propTypes = {
    curtainColor: PropTypes.func.isRequired
};

export default connect(null, { curtainColor })(Feature);