const mongoose = require('../config/mongoose');

const taskTemplate = mongoose.model('TaskTemplate', {
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    subTasks:{
        type: Array
    },
    beforeTasks:{
        type: Array
    },
    nextTasks:{
        type: Array
    },
    links:{
        type: Array
    },
    tips:{
        type: Array
    },
    defaultDuration: {
        type: Number
    },
    maintainer:{
        type: String
    }
})

module.exports = taskTemplate;