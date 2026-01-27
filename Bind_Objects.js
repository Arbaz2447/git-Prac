// call -> Calls once some function's This to some func

function Star(greet){
    this.greet = greet;
}
Star.prototype.Greetings = function(){
    console.log(`Hello ${this.greet}`);
}

function Star2(greet , msg){
    this.msg = msg;
    Star.call(this, greet);
}
Star2.prototype.Greetings2 = function(){
    console.log(`Hello ${this.greet}, ${this.msg}`);
}
Object.setPrototypeOf(Star2.prototype, Star.prototype);
new Star("Hel;l").Greetings() 
 new Star2("Hell", "Welcome").Greetings2() 

//  -> Bind (Mostly used in callbacks)


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button> hello </button>
</body>
    <script>
        // .call Calls(Executes) specific function upon given This 
        // .bind returns Reference of newly created func whose this is permanent to given this 
        class Print{
            constructor(name){
                this.name = name;
                this.obj = {name : "Hey"}
                document.querySelector('button').addEventListener('click', this.printName.bind(this.obj));
            }
            printName(){
                console.log(`${this.name}`)
            }
        }
        const print = new Print("Object-1");
    </script>
</html>



Some Important Object Methods :
// Object Property descriptor and define property ! 
console.log(Object.getOwnPropertyDescriptor(Math, "PI"))

const obj = {
    price: 123,
    name: 'Arbaz'
}
Object.defineProperty(obj, 'price', {
    writable:false,
    enumerable:false
})
for(let i in obj){
    console.log(i, " " , obj[i]) // name is not shown and not overrided 
}


  // Getters and setters (old way ) 
class myP{
    constructor(email){
        this.email = email;
    }
    set email(data){
        this._email = data;
    }
    get email(){
        return this._email;
    }
}
const user = new myP("h@gmail.com"); // _email is unset ? constructor calls this.email(data) then _eamil is always set ! 
console.log(user._email);
user.email = "Hey";
console.log(user._email);

// new way 
class myP{
    #email;
    constructor(email){
        this.#email = email;
    }
    set email(data){
        this.#email = data;
    }
    get email(){
        return this.#email;
    }
}
const user = new myP("h@gmail.com");
console.log(user.email); // user.email -> calls email and #email is used ! 
user.email = "Hey";
console.log(user.email);
