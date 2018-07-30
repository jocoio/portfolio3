import React from 'react';
import { A } from '../style/index';

class Footer extends React.Component {
  
    render() {
        return (
            <div className="footer" style={{ transform: "translateY(50%)", top: "50%" }}>
                <p>Created and <A href="https://github.com/jocoio/portfolio3.0">coded</A> with <span role="img" aria-label="love">💚</span>in Boston, MA</p>
            </div>
        );
    }
}

export default Footer;