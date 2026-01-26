// Call , 
function F2(id){
    this.id = id; 
    return this;
}

function F3(sid){
    this.sid = sid;
    return this;
}

function F1(username, pass, id, sid){
    this.username = username;
    this.pass = pass;
    F3.call(this, sid);
}
console.log(new F1("Username", 12, 11, 13));



// !important 
// Note : When Method is declared inside constructor , every instance has their own seperate method;
//         When did by COnstructor.prototype.func = ... then everyone has one Func (like static )
// Inside constructor Func:
this.method = function() {}
→ New function per object
→ Higher memory usage
→ u1.method !== u2.method

Prototype method:
Constructor.prototype.method = function() {}
→ One shared function
→ Memory efficient
→ u1.method === u2.method

Use prototype for most methods.
Use constructor methods only when instance-specific behavior is needed.



// Class Vs Constructor Func 
class F1{
    constructor(username100){
        this.username100 = username100;
    }
    someThing(){
        console.log(`SomeThing`);
    }
}

class F2 extends F1{
    constructor(username100, id){
        super(username100);
        this.id = id;
    }
}
console.log(new F1("Arbaz"));
console.log(new F2("Arbaz1", 12));





// Inheritence vs setting Prototype with Object.setPrototype( X , Y ); all of Y to X;
function F1(username100){
    this.username100 = username100;
}

F1.prototype.someThing = function(){
    console.log(`SomeThing`);
}

function F2(username, id){ 
    F1.call(this,username);  // for properties super in classes is syntatic sugar of thisthing here
    this.id = id;
}

Object.setPrototypeOf(F2.prototype, F1.prototype); // for Func 
F2.prototype.constructor = F2;

console.log(new F1("Arbaz"));
console.log(new F2("Arbaz1", 12));

// So basically, I am calling Inside of F2 I'm calling F1. And if I don't use call And if I don't use new keyword. Basically, the new keyword Basically, the new keyword was responsible and new keyword Takes the responsibility of this keyword and it is responsible for creating a new object. It is responsible for handling of this and returning of this. But what our ask is I am calling a constructor function inside a constructor function And what my aim is, I dont want to duplicate the task. Basically, I am duplicate. I am like, I want to demonstrate inheritance. So whatever the F1 function is doing, I want exactly the same thing upon the newly created object of F2. So I use dot com because I want that Whenever a newly created F2 object, dust this Of newly created object should be passed to F1 so that That this in F 1. Would refer to the newly created object




// Working of built in constructor Functions Vs Custom 
• String is a built-in constructor function in JavaScript.

• When called WITHOUT `new`:
  String(x) → converts x to a primitive string and returns it.
  Example: String(1) → "1" (type: string)

• When called WITH `new`:
  new String(x) → creates a String object wrapper.
  Example: new String(1) → String {"1"} (type: object)

• No overriding happens.
  Same function behaves differently based on whether `new` is used.

• Key difference:
  String(1)        → primitive string
  new String(1)    → object wrapper around the string

// Note : This is only implicity returned when there is new else we have to ! 
// with new new E.Context is made , Same Context is used and overriden (Worst ) 




