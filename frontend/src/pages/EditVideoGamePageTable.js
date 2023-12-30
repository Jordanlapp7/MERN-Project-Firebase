import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditVideoGamePageTable = ({ videoGameToEdit }) => {
    console.log(videoGameToEdit)
    const [title, setTitle]       = useState(videoGameToEdit.title);
    const [release, setRelease]         = useState(videoGameToEdit.release);
    const [sold, setSold]         = useState(videoGameToEdit.sold);
    
    const redirect = useNavigate();

    const editVideoGame = async () => {
        const response = await fetch(`/videogames/${videoGameToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                release: release, 
                sold: sold
            }),
            headers: {'Content-Type': 'application/json',},
        });
        if (response.status === 200) {
            alert(`Successfully edited video game!`);
        } else {
            const errMessage = await response.json();
            alert(`Could not edit video game ${response.status}. ${errMessage.Error}`);
        }
        redirect("/videogames");
    }

    return (
        <>
        <article>
            <h2>Edit a video game</h2>
            <p>Use this form to correct an error made on an entry.</p>
            <table id="videogames">
                <caption>Complete the form below. (All fields are required)</caption>
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
                            value={release.slice(0,10)}
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
                            id="sold" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={editVideoGame}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditVideoGamePageTable;