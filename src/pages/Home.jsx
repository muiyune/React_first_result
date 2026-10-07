import Post from "../components/Post";

function Home(){
    const posts= [
            {
                id:1,
                author:"WWW",
                title:"Pit OF Malice",
                text: "155"
            },
            {
                id:2,
                author:"JJJ",
                title:"some",
                text: "back"
            },
            {
                id:3,
                author:"TTT",
                title:"Skywrath",
                text: "front"
            },
        ]
    return (
        <section>
            <h1>Главная страница</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.map((post) => (
                    <Post 
                    key={post.id}
                    id = {post.id}
                    author = {post.author} 
                    title={post.title} 
                    text = {post.text}/>
            ))}
            </div>
        </section>
    )
        
}

export default Home;
