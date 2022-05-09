import * as mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: String,
    position: {
        x: Number,
        y: Number,
        z: Number,
    },
    positionX: Number,
    positionY: Number,
});

export const Player = mongoose.model('Player', playerSchema);
