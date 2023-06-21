const repo = require('../data/repo/task_repo');
const status_repos = require('../data/repo/status_repo');


exports.getTasks = async () => {
    return  await repo.getTasks();
}

exports.getTask = async (id) => {
    return await repo.getTask(id);
}

exports.addTask = async (task) => {
    try {
        let openStatus = await status_repos.findStatus({ name : 'OPEN'});
        task.status_id = openStatus._id;
        let result = await  repo.addTask(task);
        return result;
    } catch (error) {
        console.log('Failed to add a new task.', error);
        return undefined;
    }
}

exports.editTask = async (task) => {
    try {
        let id = task.id;
        let entity = await repo.getTask(id);
        if (entity == null || entity === undefined) {
            return 'Invalid request';
        } else {      
            let result = await repo.editTask(entity, task);
            return result;
        }
    } catch (error) {
        console.log(`Failed to update the task wish id ${task.id}.`, error);
        return undefined;
    }
}

exports.deleteTask = async (task_id) => {
    let result = await repo.deleteTask(task_id);
    return result;
}

