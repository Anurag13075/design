import mongoose from "mongoose";


const designschema = new mongoose.Schema({
    projectId: {
        type: String,
        required: true
    },
    design: {
        type: Array
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

})


export default designschema;
