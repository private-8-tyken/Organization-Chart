export const data = [
    {
        name: 'name1',
        id: 0,
        parent: null,
        child: 1,
        description: 'Tester 111 test', // optional
        subnoteA: "Alpha",
        subnoteB: "Year:\n2011 Fall",
        tooltip: 'name1', // optional
        color: '#db4073', // optional
        thumbnail: null // optional
    },
    {
        name: 'name2',
        id: 1,
        parent: 0,
        child: null,
        description: 'Nabby Nab', // optional
        subnoteB: "Year:\n2011 Fall",
        tooltip: 'name1', // optional
        color: 'blue', // optional
        thumbnail: null // optional
    },
    {
        name: 'name3',
        id: 2,
        parent: 0,
        child: 3,
        tooltip: 'name1', // optional
        color: '#db4073', // optional
        thumbnail: null // optional
    },
    {
        name: 'name4',
        id: 3,
        parent: 2,
        child: null,
        description: 'Tester 111 test', // optional
        tooltip: 'name1', // optional
        color: '#db4073', // optional
        thumbnail: null // optional
    }
];

console.log(data);
console.log(data[0]);