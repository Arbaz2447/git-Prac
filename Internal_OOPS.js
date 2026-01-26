// construuctor Func !
// same execution context vs new ! New classes are syntatic sugar of this Constructor Finc
function User(isLoggein, userName, userId){
    this.isLoggein = isLoggein;
    this.userName = userName;
    this.userId = userId;

    return this; // Execution context 
}

User.prototype.inc = function(){ // which ever instance calls inc Function  (Info is shared with every created instance ! )
    this.userId++;
}







// NEW
const user1 = User(true, "Arbaz", 123);
const user2 = User(false, "sam", 121);
console.log(user2); // there is only one Exec contest of func , which overirides always 

const user11 = new User(true, "Arbaz", 123);
const user12 = new User(false, "sam", 121); // new Exec context is created 
console.log(user11, user12);

// When we use 'new' keyword, first of all an empty object is created, which is called instance.
// constructor function is called due to new keyword, it packs your arguments and inject it to 'this'
// How Arryas, Strings, Function are actually from Objects Prototype [Understanding Prototpe ]

// Working of new KeyWord
// -> new KeyWord initilies empty object 
// -> has access of prototype of constructor proto (All The instances of COnstructer Func)
// -> constructor Function is called 
// -> The Constructor Func is Now called and Rest of all is assined 
// Even if no return value , Implicitly The Newly created object is returned ! 







// Prototype
let str1 = "Arbaz    ";
let str2 = "srb     ";
// Array.something() -> not accessable to Object.something() // which is obvious
// Object.something() -> is accessable to Array.something() // which is obvious
String.prototype.trueLength = function(){
    let n = this.trim();
    return `The Length of ${n} is ${n.length}`;
}

console.log(str1.trueLength()); // Defined Method ! 
console.log(str2.trueLength());




// prototypoal inheritence Old code bases ! 
const Teaching1 = {
        available1 : false
}
const Teaching = {
    available : false
}
const TeachingSupporyt = {
    isAvailable : true,
    __proto__: Teaching
}
const obj3  = {}
obj3.__proto__ = Teaching1;

// Modren Syntax 
Object.setPrototypeOf(obj3 , Teaching1); // All of Teaching1 to obj3 ! (bw specific objects )
