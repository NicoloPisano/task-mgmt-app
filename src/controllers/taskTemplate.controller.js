const TaskTemplate = require('../models/taskTemplate');
const template = new TaskTemplate({
    name: 'Write query mongoose',
    description: 'test',
    defaultDuration: 60
})

template.save().then(() => {
    console.log(template)
}).catch((error) => {
    console.log('Error!', error)
})