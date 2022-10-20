const skills = [
    {id: 125223, skill: 'JavaScript', complete: true},
    {id: 127904, skill: 'HTML', complete: true},
    {id: 139608, skill: 'CSS', complete: true},
    {id: 139899, skill: 'Express', complete: true},
    {id: 140925, skill: 'Python', complete: false},
    {id: 142069, skill: 'C++', complete: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}