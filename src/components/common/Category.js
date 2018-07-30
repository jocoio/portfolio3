import React from 'react';

class Category extends React.Component {
    


    render() {
        return (
            <p className="category">{this.props.category}</p>
        );
    }
}

export default Category;