

import React from 'react';
import './Styles.scss';



class ProgressBar extends React.Component {
    render() {
        return (
<>
            <div class="progress">
                <span class="progress-bar" style={{width: "75%"}}></span>
            </div>
            <br/>
            <br/>
            <div>
               <a href="."> <i className="fas fa-arrow-left">Back</i></a>
            </div>
            
</>
        );
    }
}

export default ProgressBar;




