import React from 'react';
import QuestionIndex from '../Questions/QuestionIndex';

const Splash = (props) => {
    return (
        <div>
            <QuestionIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash;