

import React from 'react';

const LoadComment = (props) => {
    
    const shared=props.comments;
    // console.log(props)
    return (
        shared.map((comment) => 
            <div key={comment.id} >
            <h5>{comment.author}</h5>
            <p>{comment.Comment}</p>
            {/* <Moment>{comment.date}</Moment> */}
            <p>{comment.date}</p>
           </div>
    
        )
        
    );
};

export default LoadComment;