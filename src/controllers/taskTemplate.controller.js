const TaskTemplate = require('../models/taskTemplate');

const template = new TaskTemplate({
    id: 1,
    name: 'Write query mongoose'
})

template.save().then(() => {
    console.log(template)
}).catch((error) => {
    console.log('Error!', error)
})