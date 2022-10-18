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
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}