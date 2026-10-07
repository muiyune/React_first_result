import Post from "./Post";
import {useState, usestate} from "react"
function ProfileCard() {
    // const [posts, setPosts] = useState([

    //     {
    //         id:1,
    //         author:"WWW",
    //         title:"Pit OF Malice",
    //         text: "155"
    //     },
    //     {
    //         id:2,
    //         author:"JJJ",
    //         title:"some",
    //         text: "back"
    //     },
    //     {
    //         id:3,
    //         author:"TTT",
    //         title:"Skywrath",
    //         text: "front"
    //     },
    // ])
    

    // const [title, setTitle] = useState('')
    // const [text, setText] = useState('')
    // function addPost(event){
    //     event.preventDefault();
    //     const newPost = {
    //         id: Date.now(),
    //         title: title,
    //         text: text,
    //         author: "Ilya"
    //     }
    //     setPosts([...posts, newPost]);
    //     setTitle("");
    //     setText("");
    // }
    // function deletePost(id){
    //     setPosts(
    //         posts.filter((post) => post.id !==id
    //     ))
    // }
    
    return (
        <section className="profile-card">
            <div className="profile">
                <img className="avatar" src = "src/assets/gas.jpg"/>
                <div className="profile-info">
                    <h2>muiyune</h2>
                    <p>@Lunexia</p>
                </div>
            </div>
            <p className="profile-description">
                Frontend developer on React
            </p>
            {/* <form className="post-form" onSubmit={addPost}>
                <div>

                    <input 
                    id = "post-input"
                    type = "text"
                    placeholder = "Заголовок"
                    value ={title}
                    onChange ={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="aquarium">

                    <textarea
                    id = "post-textarea"
                    placeholder="Текст для поста"
                    value ={text}
                    onChange ={(event) => setText(event.target.value)}/>

                    <button type = "submit">
                        Опубликовать
                    </button>

                </div>
            </form> */}

            {/* {posts.length > 0 ? 
                (posts.map((post) => (
                <Post 
                key={post.id}
                id = {post.id}
                author = {post.author} 
                title={post.title} 
                text = {post.text}
                onDelete={deletePost}/>
            ))
        ) : (<p className="empty-message">Создайте свой первый пост</p>)}
             */}
        </section>
    );
}
export default ProfileCard;