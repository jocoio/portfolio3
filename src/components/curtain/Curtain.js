import React, { Fragment } from 'react';

// Transitions
import { CSSTransition } from 'react-transition-group';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Styling
import './Curtain.css';
import styled from 'styled-components';


const CurtainScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.color || "#32b67a"};
    position: fixed;
    z-index: 6;
`;

class Curtain extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            color: ["#32b67a", "#fa8072", "#fcd12A"],
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.visibility
            ,color: nextProps.color
        })
    }

    componentWillMount() {
        this.setState({
            show: this.props.visibility && true
        })
    }

    // Each nested transition will only acitivate when the previous one has entered
    render() {
        const { show, color } = this.state;
        return (
            <Fragment>
                <CSSTransition
                    in={show}
                    timeout={333}
                    unmountOnExit
                    classNames="curtain"
                >
                    {state => (
                        <Fragment>
                            <CurtainScreen color={color[0]} />
                            <CSSTransition
                                in={state === 'entered'}
                                timeout={333}
                                unmountOnExit
                                classNames="curtain"
                            >
                                {state => (
                                    <Fragment>
                                        <CurtainScreen color={color[1]} />
                                        <CSSTransition
                                            in={state === 'entered'}
                                            timeout={333}
                                            unmountOnExit
                                            classNames="curtain"
                                        >
                                            {state => (
                                                <CurtainScreen color={color[2]} />
                                            )}
                                        </CSSTransition>
                                    </Fragment>
                                )}
                            </CSSTransition>
                        </Fragment>
                    )}
                </CSSTransition>
            </Fragment>
        );
    }
}

Curtain.propTypes = {
    visibility: PropTypes.bool.isRequired,
    color: PropTypes.array.isRequired
};

// This is important, get the global state and assigns to a prop called visibility
const mapStateToProps = state => ({
    visibility: state.curtain.visibility,
    color: state.curtain.color
})

export default connect(mapStateToProps)(Curtain);