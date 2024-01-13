import React from 'react'
import { Fragment } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import path from 'path'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/loggedUserSlice'
import { AppDispatch } from '../App/Store'

const NavBar = () => {
	const user = useSelector(selectUser).loggedUser
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const location = useLocation()

	const handleLogout = () => {
		dispatch(logout())
		navigate('/')
	}

  const navigation = [
    { name: 'Posts', path: '/posts', active: "/posts" == location.pathname },
    { name: 'Albums', path: '/albums', active: "/albums" == location.pathname },
    { name: 'Todo', path: '/todos', active: "/todos" == location.pathname },
  ]
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
	return (
		<nav className='flex items-center justify-between flex-wrap bg-gray-700 p-6 rounded-b-lg'>
			<div className='flex items-center flex-shrink-0 text-teal-200 mr-6'>
				<span className='font-semibold text-xl tracking-tight'>Projekt</span>
			</div>

			<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div className='text-sm lg:flex-grow'>
        {navigation.map((item) => (
                            <a
                                key={item.name}
                                className={classNames(
                                    item.active ? 'bg-gray-600 text-white' : 'text-white hover:bg-gray-600',
                                    'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.active ? 'page' : undefined}
                                onClick={() => navigate(item.path)}>
                                {item.name}
                            </a>
                        ))}
					{/* <a href='/posts' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4'>
						Posts
					</a>
					<a
						href='#responsive-header'
						className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4'>
						Albums
					</a>
					<a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400'>
						ToDo
					</a> */}
				</div>
				<div>
					<a
						href='#'
						onClick={() => navigate('/')}
						className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
						Logout
					</a>
				</div>
			</div>
		</nav>
	)
}
export default NavBar
