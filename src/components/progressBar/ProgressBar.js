// import React from 'react';

// import './Styles.scss';

// const ProgressBar = ({id, totalQuestions}) => {

//   return(
//     <div className="progressBar">
//       <div className="progressBar--fill" style={{ width : (id + 1) / (totalQuestions + 1) * 100 + "%"}} />
//       <div className="progressBar--background"></div>
//     </div>
//   )
// }

// export default ProgressBar;







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




