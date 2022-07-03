const mongoose = require('../config/mongoose');

const subTaskTemplate = mongoose.model('SubTaskTemplate', {
    id: {
        type: String
    },  
    description: {
        type: String
    },
    link:{
        type: String
    },
    linkedTask:{
        type: String
    },
    order:{
        type: Number
    },
    templateTaskId :{
        type: String
    }
})

module.exports = subTaskTemplate;