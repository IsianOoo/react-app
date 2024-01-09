import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/loggedUserSlice'
import { AppDispatch } from '../App/Store'
import { fetchPosts, selectPosts } from '../features/postSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Home = () => {
	const user = useSelector(selectUser)
	const dispatch = useDispatch<AppDispatch>()
	const posts = useSelector(selectPosts)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	return (
		<div>
			<NavBar />
			<div className='text-center'>
			<h1 className='font-semibold uppercase mb-4 text-xl'>
				Welcome
			</h1>
			<span> {user.loggedUser?.name}</span>
			</div>
			
			<div>
				
				{posts.map((post) => (
					<div className='p-6 max-w-sm mx-auto bg-gray-100 shadow-sm rounded-lg border-2 border-gray-400 m-5' key={post.id}>
						<div className='bg-white  rounded-lg border-2 p-3 uppercase text-center font-sans font-semibold'>
							<h3>{post.title}</h3>
						</div>
						<div className='italic  text-center p-5'>
							<p>{post.body}</p>
						</div>
						
					</div>
				))}
			</div>
		</div>
	)
}
export default Home
