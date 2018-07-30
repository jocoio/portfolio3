import React from "react";
import Description from "../common/Description.js";
import { Col, Row } from "../grid";
import Category from "../common/Category";
import projects from "../../data/projects.json";
import PhotoContainer from "../common/PhotoContainer";
import TextContainer from "../common/TextContainer";
import VideoContainer from "../common/VideoContainer";
import Footer from '../common/Footer';

// Style Components
import { A, PageContainer } from '../style/index.js';

// Transition Animations
import animate from '@jam3/gsap-promise'
import Expo from '@jam3/gsap-promise'
import withTransition from '../utils/withTransition';

// React Redux
import { connect } from 'react-redux';
import { toggleCurtainVisibility } from '../../redux/actions/curtain';
import PropTypes from 'prop-types';

import "./ProjectPage.css";

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      linkTitle: null,
      link: null,
      category: null,
      id: window.location.pathname.substring(1),
      project: null
    };
  }

  componentWillMount() {
    // Grab the project that matches the id
    this.setState({
      project: projects.results.find(item => item.id === this.state.id)
    });

    // Mainly for resfreshing the page, might be redundant
    this.props.toggleCurtainVisibility(true);
  }


  componentDidMount() {
    // If there is a project link
    if ((this.state.project !== undefined) && (this.state.project.link !== null)) {
      this.setState({
        linkTitle: <h3 className="linkTitle">Link</h3>,
        link: <A href={this.state.project.link} target="_blank" rel="noopener noreferrer">{this.state.project.name}</A>
      })
    }

    // Label change based on number of categories
    if (this.state.project !== undefined && this.state.project.category.length > 1) {
      this.setState({
        category: "Categories"
      });
    }
    else {
      this.setState({
        category: "Category"
      });
    }

    // Wait one second then remove the curtain
    setTimeout(() => { this.props.toggleCurtainVisibility(false) }, 1000);
  }

  componentWillUnmount() {
    // Throw the curtain up
    this.props.toggleCurtainVisibility(true);
  }

  animateIn() {
    return animate.fromTo(
      this.el,
      .5,
      {
        autoAlpha: 0,
        y: 50,
        delay: 1
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: Expo.easeIn,
        delay: 1
      },
    )
  }

  animateOut() {
    return animate.to(this.el, .5, {
      autoAlpha: 0,
      y: 0,
      ease: Expo.easeOut,
      delay: .3
    })
  }

  render() {
    if (this.state.project !== null) {
      return (
        <div style={{ minHeight: "100%" }} ref={e => (this.el = e)}>
          <PageContainer>
            <Row className="titleRow">
              <Col
                className="projectTitle"
                lgWidth={10}
                mdWidth={10}
                smWidth={10}
                xsWidth={10}
                lgXOffset={1}
                mdXOffset={1}
                smXOffset={1}
                xsXOffset={1}
              >
                <h1>{this.state.project.name}</h1>
              </Col>
            </Row>
            <Row style={{ height: "min-content" }}>
              <Col
                className="projectCategories"
                lgWidth={2}
                mdWidth={2}
                smWidth={2}
                xsWidth={5}
                lgXOffset={1}
                mdXOffset={1}
                smXOffset={1}
                xsXOffset={1}
                xsYOffset={0}
              >
                <h3>{this.state.category}</h3>

                {this.state.project.category.map(function (listValue, idx) {
                  return <Category key={idx} category={listValue} />;
                })}
              </Col>
              <Col
                className="projectDescription"
                lgWidth={4}
                mdWidth={4}
                smWidth={4}
                xsWidth={10}
                lgXOffset={2}
                mdXOffset={2}
                smXOffset={2}
                xsXOffset={1}
                xsYOffset={5}
              >
                <Description info={this.state.project.info} />
              </Col>
              <Col
                className="projectInfo"
                lgWidth={2}
                mdWidth={2}
                smWidth={2}
                xsWidth={5}
                lgXOffset={3}
                mdXOffset={3}
                smXOffset={3}
                xsXOffset={6}
                xsYOffset={0}
              >
                <h3>Date</h3>
                <p>{this.state.project.date}</p>
                {this.state.linkTitle}
                {this.state.link}
              </Col>
            </Row>
            <Row style={{ height: "min-content" }} className="projectContent">
              {this.state.project.rowContent.map(function (rowContent, idx) {
                return (
                  <Row style={{ height: "min-content" }} className="projectRow">
                    {rowContent.map(function (content, idx) {
                      if (content[0] === "Photo") {
                        return <PhotoContainer
                          img={require(`../../images/projects/${content[1]}`)}
                          width={[content[2][0], content[2][0], content[2][0], 12]}
                          height={[content[2][1], content[2][1], content[2][1], content[2][1]]}
                          x={[content[2][2], content[2][2], content[2][2], 0]}
                          y={[content[2][3], content[2][3], content[2][3], 1]}
                          z={[0, 0, 0, 0]}
                          absolute={content[3]}
                          className="projectImage" />;
                      }
                      else if (content[0] === "Text") {
                        return <TextContainer
                          text={content[1]}
                          width={[content[2][0], content[2][0], content[2][0], 3]}
                          x={[content[2][1], content[2][1], content[2][1], 1]}
                          y={[content[2][2], content[2][2], content[2][2], 1]}
                          center={content[3]}
                        />;
                      }
                      else if (content[0] === "TitleAndText") {
                        return <TextContainer
                          title={content[1]}
                          text={content[2]}
                          width={[content[3][0], content[3][0], content[3][0], 10]}
                          x={[content[3][1], content[3][1], content[3][1], 1]}
                          y={[content[3][2], content[3][2], content[3][2], 1]}
                          center={content[4]}
                        />;
                      }
                      else if (content[0] === "Video") {
                        return <VideoContainer
                          url={content[1]}
                          width={[content[2][0], content[2][0], content[2][0], 10]}
                          x={[content[2][1], content[2][1], content[2][1], 1]}
                          y={[content[2][2], content[2][2], content[2][2], 1]}
                        />;
                      }
                      else {
                        return <h1>Error</h1>
                      }
                    })}
                  </Row>
                )
              })}
            </Row>
            <Footer />
          </PageContainer>
        </div>
      );
    }
    else {
      return (<div />);
    }
  }
}

ProjectPage.propTypes = {
  toggleCurtainVisibility: PropTypes.func.isRequired
};

export default connect(null, { toggleCurtainVisibility })(withTransition(ProjectPage));

