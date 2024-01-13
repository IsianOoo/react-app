import { useDispatch, useSelector } from 'react-redux'
import { deleteComment, fetchComments, selectComments } from '../features/CommentsSlice'
import { AppDispatch } from '../App/Store'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../features/loggedUserSlice'
import { addComment } from '../features/CommentsSlice'

interface CommentsProps {
	postId: number
}

const CommentsComponent: React.FC<CommentsProps> = ({ postId }) => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const user = useSelector(selectUser).loggedUser

	const [title, setTitle] = useState('')
	const [comment, setComment] = useState('')
	const [addCommentError, setAddCommentError] = useState(false)

	useEffect(() => {
		if (!user) {
			navigate('/')
		}
	})
	const handleAddComment = (event: React.FormEvent) => {
		event.preventDefault()
		if (title == '' || comment == '') {
			return
		}
		try {
			dispatch(addComment({ postId, title, email: user?.email, comment }))
		} catch (e) {
			setAddCommentError(true)
			setTimeout(() => {
				navigate('/')
			}, 5000)
		}
	}

	const handleDeleteComment = (id: number) => {
		dispatch(deleteComment(id))
	}

	const isLoggedUserAutor = (email: string) => {
		return email === user?.email
	}

	const comments = useSelector(selectComments).filter((comment) => comment.postId === postId)

	return (
		<div>
			<ul role='list' className='divide-y divide-gray-100'>
				{comments.map((comment) => (
					<li key={comment.email} className='flex justify-between gap-x-6 py-5'>
						<div className='flex min-w-0 gap-x-4'>
							<div className='min-w-0 flex-auto overflow-clip'>
								<p className='mt-1  text-xs leading-5 text-gray-500  text-center'>{comment.email}</p>
								<p className='mt-1 font-bold leading-6 text-gray-900 mb-2'>{comment.name}</p>
								<p className='text-sm text-gray-600'>{comment.body}</p>
							</div>
						</div>
						<button
				className='relative flex items-center gap-x-4 text-sm leading-6 font-semibold text-gray-400 hover:text-red-500'
				onClick={() => handleDeleteComment(comment.id)}>
				Delete
			</button>
					</li>
				))}
			</ul>
			
			<hr />
			<div className='text-center mt-3 uppercase font-semibold'>
				<h3>Add new comments</h3>
			</div>
			<form className='max-w-sm mx-auto mt-4' onSubmit={(event) => handleAddComment(event)}>
				<div className=''>
					<div className=' justify-center '>
						<input
							type='text'
							className='w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500  p-2 mb-1'
							placeholder='Title'
							onChange={(i) => setTitle(i.target.value)}
						/>

						<textarea
							id='message'
							rows={4}
							className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
							placeholder='Leave a comment...'
							onChange={(i) => setComment(i.target.value)}></textarea>
					</div>
					<div className='max-w-sm mx-auto items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white mt-3'>
						<button type='submit' className='w-full h-full'>
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default CommentsComponent
