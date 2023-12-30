import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddVideoGamePageTable = () => {

    const [title, setTitle]       = useState('');
    const [release, setRelease]         = useState('');
    const [sold, setSold]         = useState('');
    
    const redirect = useNavigate();

    const addVideoGame = async () => {
        const newVideoGame = { title, release, sold };
        const response = await fetch('/videogames', {
            method: 'post',
            body: JSON.stringify(newVideoGame),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Added video game to the log!`);
        } else {
            alert(`Unable to add video game = ${response.status}`);
        }
        redirect("/videogames");
    };


    return (
        <>
        <article>
            <h2>Add a video game to the log</h2>
            <p>Complete this form when you finish playing a game.</p>
            
            <table id="videogames">
                <caption>Which video game are you adding? (All fields are required)</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Units Sold</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="title"></label>
                        <input
                            required
                            type="text"
                            placeholder="Name"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label for="release"></label>
                        <input
                            required
                            type="date"
                            value={release}
                            placeholder="Year of the video game"
                            onChange={e => setRelease(e.target.value)} 
                            id="release" />
                    </td>

                    <td><label for="sold"></label>
                        <input
                            required
                            type="number"
                            placeholder="Number"
                            value={sold}
                            onChange={e => setSold(e.target.value)} 
                            id="language" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addVideoGame}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddVideoGamePageTable;