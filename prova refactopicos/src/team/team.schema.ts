import { Schema, model } from "mongoose";

const TeamSchema = new Schema({
    NomeTreinador: String,
    time: [{
        nome: String
    }]
})

export default model('Team', TeamSchema)
