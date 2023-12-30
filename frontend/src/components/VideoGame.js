import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { IoSettings, IoRemoveCircle } from "react-icons/io5";


function VideoGame({ videoGame, onEdit, onDelete }) {
    return (
        <tr>
            <td></td>
            <td>{videoGame.title}</td>
            <td>{videoGame.release.slice(0, 10)}</td>
            <td>{videoGame.sold}</td>

            {/* Update these icons to something that matches your style. */}
            <td><IoSettings onClick={() => onEdit(videoGame)} /></td>
            <td><IoRemoveCircle onClick={() => onDelete(videoGame._id)} /></td>
        </tr>
    );
}

export default VideoGame;