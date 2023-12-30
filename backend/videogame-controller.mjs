// Controllers for the Video Game Collection

import 'dotenv/config';
import express from 'express';
import * as videoGames from './videogame-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/videogames', (req,res) => { 
    videoGames.createVideoGame(
        req.body.title, 
        req.body.release, 
        req.body.sold
        )
        .then(videoGame => {
            console.log(`"${videoGame.title}" was added to the collection.`);
            res.status(201).json(videoGame);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to process POST request: Client error.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/videogames', (req, res) => {
    videoGames.retrieveVideoGames()
        .then(videoGames => { 
            if (videoGames !== null) {
                console.log(`All video games were retrieved from the collection.`);
                res.json(videoGames);
            } else {
                res.status(404).json({ Error: 'Could not retrieve: No video games in database.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to process GET request: Client error.' });
        });
});


// RETRIEVE by ID controller
app.get('/videogames/:_id', (req, res) => {
    videoGames.retrieveVideoGameByID(req.params._id)
    .then(videoGame => { 
        if (videoGame !== null) {
            console.log(`"${videoGame.title}" was retrieved, based on its ID.`);
            res.json(videoGame);
        } else {
            res.status(404).json({ Error: 'Could not retrieve: Specified video game not in database.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to process GET request: Client error.' });
    });

});


// UPDATE controller ************************************
app.put('/videogames/:_id', (req, res) => {
    const { title, release, sold } = req.body;
    if (!title || !release || !sold) {
        return res.status(400).json({Error: "All fields are required."});
    }
    videoGames.updateVideoGame(
        req.params._id, 
        req.body.title, 
        req.body.release, 
        req.body.sold
    )
    .then(videoGame => {
        console.log(`"${videoGame.title}" was updated.`);
        res.json(videoGame);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to process PUT request: Client error.' });
    });
});


// DELETE Controller ******************************
app.delete('/videogames/:_id', (req, res) => {
    videoGames.deleteVideoGameById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} video game was deleted.`);
                res.status(200).send({ Success: 'Video game was removed from the database.' });
            } else {
                res.status(404).json({ Error: 'Could not delete: Specified video game not in database.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Unable to process DELETE request: Client error.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});