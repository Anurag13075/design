import mongoose from "mongoose";


const designschema = new mongoose.Schema({
    projectId: {
        type: String,
        required: true
    },
    design: {    
        type: []
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'

    },


    prompt:{
        type:[]
    },





})


export default designschema;
