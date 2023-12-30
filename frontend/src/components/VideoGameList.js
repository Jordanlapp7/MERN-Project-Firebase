import React from 'react';
import VideoGame from './VideoGame';
import { useNavigate } from 'react-router-dom';
import { IoAddCircle } from "react-icons/io5";

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function VideoGameList({ videoGames, onDelete, onEdit }) {
    
    const redirect = useNavigate()
    
    return (
        <table id="videogames">
            <caption>Add with the plus button, or edit/delete an entry with the buttons to the right.</caption>
            <thead>
                <tr>
                    <th id="add"><IoAddCircle onClick={() => redirect("/create")}/></th>
                    <th>Title</th>
                    <th>Release Date</th>
                    <th>Units Sold</th>
                    <th id="edit">Edit</th>
                    <th id="delete">Delete</th>
                </tr>
            </thead>
            <tbody>
                {videoGames.map((videoGame, i) => 
                    <VideoGame 
                        videoGame={videoGame} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default VideoGameList;
