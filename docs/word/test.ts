const getTotal: () => number = () => {
    return 123;
};

class Person {}
const zmmao: Person = new Person();

function getTotal2(a: number, b: number): number {
    return a + b;
}
const num = getTotal2(1, 2);

function hello(): void {
    console.log(123);
}

function hello2({ a, b }: { a: number; b: number }): void {
    console.log(123);
}

hello2({ a: 1, b: 2 });

const fn1: (a: number) => string = (a) => {
    return '';
};

// Date的数据类型
let date = new Date();

var a = `{
    a: 1,
    b: '2'
}`;
interface aa {
    a: number;
    b: string;
}
var b: aa = JSON.parse(a);

var c: number | string = 12;
c = '1233';

var d: (number | string)[] = [1, '2', 3];

var e: { name: string }[] = [
    {
        name: 'a',
    },
];

//
type User = {
    name: string;
    age: number;
};
const zmmao2: User[] = [
    {
        name: 'zmmmao',
        age: 1,
    },
];

// 元组 tuple
let a1: [string, string, number] = ['', '', 2];
let a2: [string, string, number][] = [['', '', 2]];
