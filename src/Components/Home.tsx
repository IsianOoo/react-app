import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/loggedUserSlice'
import { AppDispatch } from '../App/Store'
import { fetchPosts, selectPosts } from '../features/postSlice'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { addPost } from '../features/postSlice'
import { Post } from '../model/Post'
import CommentsComponent from './CommentsComponent'

const Home = () => {
	const user = useSelector(selectUser).loggedUser
	const dispatch = useDispatch<AppDispatch>()
	const posts = useSelector(selectPosts)
	const navigate = useNavigate()
	const [title, setTitle] = useState("")
	const [text,setText] = useState("")
	
	const handleAddPost = (event: React.FormEvent) => {
        event.preventDefault()
        try { dispatch(addPost({ userId: user?.id, title, body: text })) }
        catch (e) {

        }
    }

	
	useEffect(() => {
        if (!user) {
            navigate("/")
        }
    })

	return (
		<div>
			<NavBar />
			<div className='text-center'>
				<h1 className='font-semibold uppercase mb-4 text-6xl font-sans '>Welcome</h1>
				<span className='uppercase'> {user?.name}</span>
			</div>
			<form className='max-w-sm mx-auto' onSubmit={event => handleAddPost(event)}>
				<p className='text-center m-10 uppercase font-semibold'>add new post</p>
				<input type="text" className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 p-2" placeholder="Title" onChange={(i) => setTitle(i.target.value)} />
				<textarea
					id='message'
					rows={4}
					className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='Leave a comment...'onChange={(i) => setText(i.target.value)} ></textarea>
				<div className='max-w-sm mx-auto items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white mt-3'>
					<button type='submit' className='w-full h-full'>
						Add
					</button>
				</div>
			</form>

			

			
			<div>
				{posts.map((post) => (
					<div
						className='p-6 max-w-2xl mx-auto bg-gray-100 drop-shadow-xl rounded-lg border-2 border-gray-400 m-5'
						key={post.id}>
						<div className='bg-white  rounded-lg border-2 p-3 uppercase text-center font-sans font-semibold'>
							<FontAwesomeIcon icon={icon({ name: 'user-secret' })} />
							<h3>{post.title}</h3>
						</div>
						<div className='italic  text-center p-5'>
							<p>{post.body}</p>
						</div>
						<hr />
						<CommentsComponent postId={post.id} />
					</div>
				))}
			</div>
		</div>
	)
}
export default Home
