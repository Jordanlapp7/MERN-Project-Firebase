import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import VideoGameList from '../components/VideoGameList';

function VideoGamesPage({ setVideoGame }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [videoGames, setVideoGames] = useState([]);

    // RETRIEVE the entire list of video games
    const loadVideoGames = async () => {
        const response = await fetch('/videogames');
        const videoGames = await response.json();
        setVideoGames(videoGames);
    } 



    // UPDATE a single video game
    const onEditVideoGame = async videoGame => {
        setVideoGame(videoGame);
        redirect("/update");
    }


    // DELETE a single video game 
    const onDeleteVideoGame = async _id => {
        const response = await fetch(`/videogames/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/videogames');
            const videoGames = await getResponse.json();
            setVideoGames(videoGames);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the video games
    useEffect(() => {
        loadVideoGames();
    }, []);

    // DISPLAY the video games
    return (
        <>
            <h2>List of Video Games Completed</h2>
            <p>This is a running log of all games that have been completed. It uses MongoDB to track entries.</p>
            <VideoGameList 
                videoGames={videoGames} 
                onEdit={onEditVideoGame} 
                onDelete={onDeleteVideoGame} 
            />
        </>
    );
}

export default VideoGamesPage;