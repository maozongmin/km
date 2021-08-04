# Typescript

```Typescript
// 上面代码定义了类型x为bumber。这样在编辑器中使用x的时候，就会提示number的所有方法。给我们开发者更好的开发体验
interface Point{
    x: number
}
```

### 类型

-   基础类型
    -   Boolean
    -   Number
    -   String
    -   Void
    -   Null
    -   Undefined
    -   Symbol
    -   Array
    -   Enum
    -   Any
    -   unKnown
    -   Tuple
    -   object, Object 和 {} 类型
    -   Never

```Typescript
const a: number = 0;
// 存在多个类型

const a: number |  string = 0;
```

-   对象类型
    -   `{}, Class, function, []`

```Typescript
const teacher: {
    a: number,
    b: string
}
// 数组也是一种对象类型
const numbers: number[] = [1,2,3];
const numbers: (number | string)[] = [1,'2',3];
const numbers: {name: string}[] = [{
    name: 'zmm'
}];
// 类型别名
type User = {
    name: string,
    age: number
}

const zmmao: User[] = [
    {
        name: 'zmmmao',
        age: 1,
    }
]
// 类也是可以的
Class User2 = {
    name: string,
    age: number
}
const zmmao: User2[] = [
    {
        name: 'zmmmao',
        age: 1,
    }
]
// 元组 tuple,数组每一项的类型都是固定的
let a1: [string, string, number] = ['1', '3', 2];
// 二维度数组
let a2: [string, string, number][] = [['1', '3', 2]];
```

-   类

```Typescript
class Person {}
const zmmao: Person = new Person();
```

-   函数返回类型

```Typescript
const getTotal: () => number = () => {
    return 123;
}
```

### 类型注解 & 类型推断

```Typescript
// 当ts推断不出来具体的类型时，就需要写上类型注解
let count: number; // 类型注解：显式的写出类型
let a2 = 5; // 类型推断：这里也可能看到类型是number，这种推断出来
function getTotal(a:number, b:number): number{
    return a + b;
}
const num = getTotal(1,2);
```

### 函数相关类型

```typescript
// 2种写法：第1种
const fn1 = (a: number): string{
    return '';
}
// 2种写法：第2种
const fn1: (a: number) => string = (a) =>{
    return '';
}

// 不返回使用void
function hello(): void {
    console.log(123);
}
// 解构语法的类型注解
function hello2({ a, b }: { a: number; b: number }): void {
    console.log(123);
}

hello2({ a: 1, b: 2 });
```

```typescript
// interface 和 type 的区别，type可以直接表示基础类型。使用中能用interface的尽量用interface
interface Person {
    name: string;
}
type Person = {
    name: string;
};
type Person = string;
```
