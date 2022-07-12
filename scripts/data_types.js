// DATA_TYPES;

// Int
let number = 4;
console.log( 4 / 0 ); // infinity;
console.log( 'string' * 9 ); // NaN - not a number;


// String
const PERSON = 'Alex';
console.log( PERSON );


// Boolean
const BOOL = true; // false

// null - ничего нет
console.log( 'something' ); // something is not defined;

// undefined - пустое значение

let a;
console.log( a );


// Symbol
// BigInt

// OBJECTS

const OBJ = {
    name: 'John',
    age: 25,
    isMarried: false,
};

console.log( OBJ.name );
console.log( OBJ['name'] ); // альтернативный метод вызова объекта;

// ARRAYS
let arr = [
  'plum.png',
  'orange.jpg',
  'apple.bmp',
  4,
    {

    },
    []
];
  console.log( arr[1] );

  // adding in object;

  const OBJ2 = {
    a: 1,
    b: 2,
    c: 3
  }

console.log( OBJ2 );

OBJ2.d = 4; // добавили новый ключ с новым значением;

console.log( OBJ2 );
console.log( OBJ2['d'] );
console.log( OBJ2.d );

