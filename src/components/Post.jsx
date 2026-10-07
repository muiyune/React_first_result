import Actions from "./Actions";

function Post({ Author, title, text, onDelete, id }) {
    return (
        <div >
            <article className="post">
                <div className="te">
                    <h2>{title}</h2>
                    <p className="post-text">{text}</p>
                    <p className="post-author">{Author}</p>
                    
                    <Actions />
                    
                    {onDelete && (
                        <button
                        className="delete-button"
                        onClick={() => onDelete(id)}>
                        X
                        </button>
                    )}
                </div>
            </article>
        </div>
    );
}

export default Post;