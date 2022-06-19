const mongoose = require('../config/mongoose');

const TaskTemplate = mongoose.model('TaskTemplate', {
    name: {
        type: String
    },
    description: {
        type: Number
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

module.exports = TaskTemplate;