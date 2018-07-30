import React from 'react'

import projects from '../../data/projects.json';
import './HomePage.css';
import Hero from './Hero';
import Feature from './Feature';
import ProjectList from './ProjectList';
import Footer from '../common/Footer';
import { PageContainer } from '../style';

// Transitions
import withTransition from '../utils/withTransition'
import animate from '@jam3/gsap-promise'
import Expo from '@jam3/gsap-promise'

// Redux
import { connect } from 'react-redux';
import { toggleCurtainVisibility } from '../../redux/actions/curtain';
import PropTypes from 'prop-types';


class HomePage extends React.Component {

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
        this.props.toggleCurtainVisibility(true);
        return animate.to(this.el, .5, {
            autoAlpha: 0,
            y: 0,
            ease: Expo.easeIn,
            delay: .3
        })
    }

    render() {
        return (
            <div ref={e => (this.el = e)}>
                <PageContainer>
                    <Hero />
                    <Feature data={projects.results[0]} />
                    <ProjectList />
                    <Footer />
                </PageContainer>
            </div>
        )
    }
}

HomePage.propTypes = {
    toggleCurtainVisibility: PropTypes.func.isRequired
};

export default connect(null, { toggleCurtainVisibility })(withTransition(HomePage));
// export default connect(null, { toggleCurtainVisibility })(withCurtain(HomePage));
