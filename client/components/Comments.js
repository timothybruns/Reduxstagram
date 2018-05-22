import React from 'react';

class Comments extends React.Component {
    renderComments(comment, i) {
        console.log(comment);
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }
    render() {
        return (
            <div className='comments'>
               {this.props.postComments.map(this.renderComments)}
            </div>
        )
    }
}

export default Comments;