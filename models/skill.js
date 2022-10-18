const skills = [
    {id: 125223, todo: 'JavaScript', complete: true},
    {id: 127904, todo: 'HTML', complete: true},
    {id: 139608, todo: 'CSS', complete: true},
    {id: 140925, todo: 'Python', complete: false},
    {id: 142069, todo: 'C++', complete: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}