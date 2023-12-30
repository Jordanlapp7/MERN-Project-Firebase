// Models for the Video Game Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Could not connect to mongoDB server.' });
    } else  {
        console.log('Success: Connected to mongoDB server.');
    }
});

// SCHEMA: Define the collection's schema.
const videoGameSchema = mongoose.Schema({
	title:    { type: String, required: true },
	release:     { type: Date, required: true },
	sold: { type: Number, required: true }
});

// Compile the model from the schema 
// by defining the collection name "videoGames".
const videoGames = mongoose.model('VideoGames', videoGameSchema);


// CREATE model *****************************************
const createVideoGame = async (title, release, sold) => {
    const videoGame = new videoGames({ 
        title: title, 
        release: release, 
        sold: sold
    });
    return videoGame.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveVideoGames = async () => {
    const query = videoGames.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveVideoGameByID = async (_id) => {
    const query = videoGames.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteVideoGameById = async (_id) => {
    const result = await videoGames.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateVideoGame = async (_id, title, release, sold) => {
    const result = await videoGames.replaceOne({_id: _id }, {
        title: title,
        release: release,
        sold: sold
    });
    return { 
        _id: _id, 
        title: title,
        release: release,
        sold: sold
    }
}

// EXPORT the variables for use in the controller file.
export { createVideoGame, retrieveVideoGames, retrieveVideoGameByID, updateVideoGame, deleteVideoGameById }