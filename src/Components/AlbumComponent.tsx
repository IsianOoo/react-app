import { useSelector } from "react-redux";
import { Album } from "../model/Album"
import { selectPhotos } from "../features/PhotosSlice"
import { selectUsers } from "../features/UsersSlice"
import UserComponent from "./UserComponent";


interface AlbumProps{
    album: Album
}


const AlbumComponent: React.FC<AlbumProps> = ({album}) =>{

    const photos = useSelector(selectPhotos).filter((photo) => photo.albumId === album.id)
    const user = useSelector(selectUsers)

    return(
        
        <article key={album.id} className="p-6 max-w-8xl mx-auto bg-gray-100 drop-shadow-xl rounded-lg border-2 border-gray-400 m-5">
            <div className='bg-white  rounded-lg border-2 p-3 uppercase text-center font-sans font-semibold'>{album.title}</div>
            
            <UserComponent user={user.find((user) => user.id === album.userId)!} />
            <div className="flex flex-wrap justify-center ">
                {photos.map((photo) => (
                    <img className="h-auto max-w-full rounded-lg m-2 drop-shadow-md border-2 border-gray-700 " src={photo.thumbnailUrl} alt={photo.title} />
                ))}
            </div>
        </article>
    )
}

export default AlbumComponent;