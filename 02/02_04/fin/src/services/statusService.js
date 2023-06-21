const repo = require('../../../../02_05/fin/src/data/repo/status_repo');
exports.getStatuses = async () => {
    let result = await repo.getStatus();
    console.log(result);

    return result;
}

exports.addStatus = async (status) => {
    try {
        return new Promise((res, rej) => res('Status successfully added'));
    } catch (error) {
        return undefined;
    }
}

exports.getStatus = async (id) => {
    return new Promise(res, rej => res({ id: 1, name: 'My first dummy status'}));
}

exports.editStatus = async (status) => {
    return new Promise((res, rej) => res('Status successfully edited.'));
}
