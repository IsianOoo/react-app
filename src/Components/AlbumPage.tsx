import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../features/loggedUserSlice"
import { AppDispatch } from "../App/Store"
import { useNavigate } from "react-router-dom"
import React, { useEffect } from "react";
import { selectAlbums } from "../features/albumSlice";
import NavBar from "./NavBar";
import AlbumComponent from "./AlbumComponent";


const AlbumPage =()=>{
    const user = useSelector(selectUser).loggedUser
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    })

    const albums = useSelector(selectAlbums)

    return(
        <div className="min-h-full">
            <NavBar/>

        <main>
            
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {albums.map((album) => (
                        <AlbumComponent key={album.id} album={album} />
                    ))}
                </div>
        </main>
        </div>
    )
}
export default AlbumPage