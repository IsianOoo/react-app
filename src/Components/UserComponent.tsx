import { User } from '../model/User'

interface PortfolioProps {
    user: User
}

const UserComponent: React.FC<PortfolioProps> = ({ user }) => {
    return (
        <div className='relative flex items-center gap-x-4 justify-center'>
            <div className='text-sm leading-6'>
                <p className='font-semibold text-gray-600 italic'>
                    <a>
                        <span className='absolute inset-0' />
                        {user.name}
                    </a>
                </p>
            </div>
        </div>
    )
}

export default UserComponent