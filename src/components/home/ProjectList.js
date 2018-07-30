import ProjectBlock from './ProjectBlock';
import React from 'react';
import { Row, Col } from '../grid';
import projects from '../../data/projects.json';

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectList: [],
            activeCategories: []
        };

        this.filterProjects = this.filterProjects.bind(this);
    }

    componentWillMount() {
        var fullList = projects.results;
        this.setState({ projectList: fullList });
    }

    // Filters projcets based on active filter array
    // Adds/Removes filter & updates array of projects that match
    filterProjects(filter, e) {

        e.preventDefault();

        // Array to hold the active category filters selected
        var activeCat = this.state.activeCategories;

        // If the category is already selected
        if (activeCat.includes(filter)) {

            // Remove the category from active cats
            var index = activeCat.indexOf(filter);
            activeCat.splice(index, 1);

            // Remove the active class from the element
            var el = document.getElementById(filter);
            if (el) {
                el.classList.remove("active");
            }
        }
        // If the category is not yet selected
        else {

            // Add the category to the active categories
            activeCat.push(filter);

            // Grab the category element and add the active class
            var ell = document.getElementById(filter);
            if (ell) {
                ell.className += ell.className ? ' active ' : 'active';
            }
        }

        // Array to hold projects that match filter criteria
        var filteredList = [];

        // Make the results list 
        filteredList = projects.results.filter(function (i) {
            // Returns true if every element of activeCat is in i.category
            return activeCat.every(function (k) {
                //Returns true if the element k has an index in i.category
                return i.category.indexOf(k) > -1;
            })
        });

        // Update the state to store 
        this.setState({
            projectList: filteredList,
            activeCategories: activeCat
        });
    }

    render() {

        return (
            <div>
                <Row style={{ height: "auto" }}>
                    <Col xsWidth={10} smWidth={12} mdWidth={12} lgWidth={12}
                        xsXOffset={1} smXOffset={1} mdXOffset={0} lgXOffset={0}
                        style={{ position: "relative" }}>
                        <h1>All projects</h1>
                        <br/>
                    </Col>
                </Row>
                <Row className="projectList">
                    {this.state.projectList.map(function (data, idx) {
                        if (data.name !== "Scout") {
                            return <ProjectBlock key={idx} data={data} />;
                        }
                        else {
                            return <div key={idx} />
                        }
                    })}
                </Row>
            </div>
        );
    }
}