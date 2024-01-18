// OPERATORS

let a = 10;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** 6); // üs alma
console.log(a % 2); // remainder (modules) kalanı bulma
console.log(364 % 60);

let result = 365 / 6;
console.log(result);
console.log(Math.trunc(result));
console.log(result.toFixed(3));
console.log(typeof result.toFixed(2));

// saat ve dakika bulma
let time = 375;

let hour = Math.trunc(time / 60);
console.log(hour);

let minute = 375 % 60;
console.log(`375 dakika=> ${hour}:${minute}`);
console.clear();
// INCREMENT / DECREMENT

// post ve pre olarak kullanılır

// Post increment

let x = 5;
console.log(x++);
console.log(x);
console.log(x--);
console.log(x);

// Pre increment

console.log(++x);
console.log(--x);
console.clear();

/* -------------------------------------------------------------------------- */
/*                            ASSIGNMENT OPERATORS                            */
/* -------------------------------------------------------------------------- */

let t = 10;
let y = 5;

console.log(t);
console.log(y);

console.log((t = t + y));
console.log((t += y));
console.log((t -= y));
console.log((t *= y));
console.log((t /= y));
console.log((t **= y));
console.log((t %= y));

console.clear();

/* -------------------------------------------------------------------------- */
/*                            COMPARİSON OPERATORS                            */
/* -------------------------------------------------------------------------- */

let c=2
let d="2"

console.log(typeof c);
console.log(typeof d);
console.log(c==d);
console.log(c===d);

console.log(c!=d);
console.log(c!==d);
console.log(3>=2);

console.clear();

/* -------------------------------------------------------------------------- */
/*                              LOGICAL OPERATORS                             */
/* -------------------------------------------------------------------------- */

//! AND - && (ve anlamında)
// mükemmeliyetçi - herşey true olmalı yoksa true return etmez

console.log(Boolean("Merhaba"));
console.log(Boolean(0));
console.log(Boolean(2));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));

console.log(0 && [] && 2);
console.log([] && "M" && 5);
console.log([] && 0 && 5);
console.clear();

//! OR - ||
// Herşey false olsa dahi true'yu birkez görmesi halinde bu değeri return eder
// True bulamazsa en son false değerini return eder

console.log(0 || null || 2 || undefined );

console.log(!null);

