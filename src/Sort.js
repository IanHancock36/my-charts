let students = [
    {
        firstName: 'Johnny',
        lastName: 'Lee',
        age: 20,
    },

    {
        firstName: 'Anna',
        lastName: 'Zax',
        age: 19,

    },

    {
        firstName: 'Zion',
        lastName: 'Sanches',
        age: 22,

    }
];
const SortStudents = students.sort((a,b)=> {
 return  b.age - a.age
})

students.map((student) =>{
    console.log(` ${student.age}`);
})