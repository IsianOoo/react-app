import React, { useState } from 'react'
import { login } from '../features/loggedUserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../features/UsersSlice'
import '../css/index.css'
import { AppDispatch } from '../App/Store'

const Login = () => {
	const [email, setEmail] = useState('')
	const users = useSelector(selectUsers)

	const dispatch = useDispatch<AppDispatch>()
	const handleLogin = (event: React.FormEvent) => {
		event.preventDefault()
		let user = users.find((user) => user.email === email)
		if (user !== undefined) {
			dispatch(login(user))
			return
		}
		console.log('User not found')
	}
	return (
		<section className='bg-gray-300'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 '>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							Sign in to your account
						</h1>
						<form className='space-y-4 md:space-y-6' onSubmit={(event) => handleLogin(event)}>
                            <div>
							<input className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder={'Name'} value={email} onChange={(i) => setEmail(i.target.value)} />
                            </div>
                            <button type='submit' className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-500">Login</button>
						</form>
					</div>
				</div>

				
			</div>
		</section>
	)
}

//     <div className='Login'>
//   <div className="LoginBox">
//     <div className="LoginHeader">
//       Login
//     </div>
//     <div className="inputs">
//       <input type="text" className="email" placeholder='you@example.com'/>
//     </div>
//     <div className="loginButton">
//     <button className='btnLogin'>Login</button>
//     </div>

//   </div>

// 	</div>

export default Login
