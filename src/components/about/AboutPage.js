import React from 'react';
import Description from '../common/Description.js';
import PhotoContainer from '../common/PhotoContainer.js';
import { Col, Row } from '../grid';
import { A } from '../style/index';

import me from '../../images/about/me.jpg';
import resume from '../../images/about/resume.pdf';
import instagram from '../../images/about/instagram.svg';
import github from '../../images/about/github.svg';

import withTransition from '../utils/withTransition'
import animate from '@jam3/gsap-promise'
import Expo from '@jam3/gsap-promise'

import { PageContainer } from '../style/index';

import { connect } from 'react-redux';
import { toggleCurtainVisibility } from '../../redux/actions/curtain';
import PropTypes from 'prop-types';

import './AboutPage.css';

class AboutPage extends React.Component {

    componentWillMount() {
        // Mainly for reseting the page, might be redundant
        this.props.toggleCurtainVisibility(true);
    }

    componentDidMount() {
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
        var styles = {
            position: "relative",
        }

        var intro = [
            "I'm Jon, a Boston-based designer and developer with a soft spot for beautiful logos, well-documented code, and golden retrievers.",
            "I'm a Texan at heart, but am currently braving the elements at Northeastern University, majoring in Computer Science and Design. I love exploring the intersection of creativity and technology, and using design thinking to solve challenging problems.",
            "When I'm not glued to a screen, you can find me eating my way through Boston or running around the city trying to offset the ridiculous amount of food I just ate."
        ]

        return (
            <div ref={e => (this.el = e)}>
                <PageContainer>
                    <Row style={styles} className="containerRow">
                        <Col xsWidth={10} smWidth={5} mdWidth={5} lgWidth={4}
                            lgXOffset={1} mdXOffset={0} smXOffset={0} xsXOffset={1}
                            lgYOffset={0} mdYOffset={0} smYOffset={0} xsYOffset={17}
                            className="content">
                            <h1>Hello!</h1>
                            <Description info={intro}
                                width={[4, 5, 5, 12]}
                            />
                            <h3>Email</h3>
                            <A href="mailto:hello@joco.io?Subject=Hi there!">hello@joco.io</A>
                            <h3>Resume</h3>
                            <A href={resume} target="_blank" rel="noopener noreferrer">View Resume</A>


                            <div className="socialMedia">
                                <a className="social" href="http://www.instagram.com/joco.io" target="_blank" rel="noopener noreferrer">
                                    <img id="insta" src={instagram} alt="instagram" />
                                </a>

                                <a className="social" href="http://www.github.com/jocoio" target="_blank" rel="noopener noreferrer">
                                    <img id="git" src={github} alt="github" />
                                </a>
                            </div>
                        </Col>

                        <PhotoContainer x={[7, 7, 6, 0]}
                            y={[0, 0, 0, 0]}
                            z={[0, 0, 0, 0]}
                            width={[4, 5, 5, 12]}
                            height={[10, 10, 10, 14]}
                            img={me}
                            size="100%"
                            className="aboutPhoto"
                            absolute
                        />
                    </Row >
                </PageContainer>
            </div>
        )
    }
}

AboutPage.propTypes = {
    toggleCurtainVisibility: PropTypes.func.isRequired
};

export default connect(null, { toggleCurtainVisibility })(withTransition(AboutPage));
// export default connect(null, {toggleCurtainVisibility})(WithCurtain(AboutPage));
