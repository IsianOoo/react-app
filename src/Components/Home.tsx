import { useDispatch,useSelector } from "react-redux"
import { selectUser } from "../features/loggedUserSlice";
import { AppDispatch } from "../App/Store";
import { fetchPosts, selectPosts } from "../features/postSlice";
import { useEffect } from "react";




const Home =() =>{
    const user = useSelector(selectUser)
    const dispatch = useDispatch<AppDispatch>()
    const posts = useSelector(selectPosts)

    useEffect(() =>{
        dispatch(fetchPosts())
    }, [dispatch])

    
    return(
        
        <div>
            <h1>Welcome<span> {user.loggedUser?.name}</span></h1>
            <div>
                <span>posts</span>
                {posts.map((post) => (
                    <div className="flex bg-slate-600 max-w-sm mx-auto" key={post.id}>
                        <div>
                            <h3>{post.title}</h3>
                        </div>
                        
                        <p>{post.body}</p>
                        </div>
                        ))}
            </div>
            
        </div>
    )
}
export default Home