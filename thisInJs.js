const obj2 = {
    x : 3,
    obj : {
        x : 2,
        show(){
            console.log(this.x); // 2
    
            const show2 = () => {
                console.log(this.x) // 2
            }
            show2()
            const show3 = function() {
                console.log(this) // default call show3() so global obj 
            }
            show3()
            
            this.nshow() 
        
        },
        nshow : () => {
            console.log(this) // every thing inside node is under wrapper func called by empty obj so {}
        },
        nshow2(){
            console.log(this.x) // 2
        }
    }

}

const nf = () => {
    console.log(this) // every thing inside node is under wrapper func called by empty obj so {}
}
nf();

obj2.obj.show()

obj2.obj.nshow2()

 


// test 
// const obj3 = {
//     x : 3,
//     f : obj2.obj.nshow
// }




// module.exports = {};
// Then Node wraps your file like this:

// js
// Copy code
// (function (exports, require, module, __filename, __dirname) {
//   // your code here
// })();
// And inside this wrapper:

// js
// Copy code
// this === module.exports
// Since module.exports was just created as {},
// 👉 this starts as {}.

// That’s what “initially” means.

// Why “initially” matters (key insight)
// Because module.exports can CHANGE as your file runs.

// Example
// js
// Copy code
// console.log(this); // {}

// this.a = 10;

// console.log(this); // { a: 10 }
// You didn’t change this — you mutated module.exports.

// Another example
// js
// Copy code
// module.exports.x = 5;

// console.log(this); // { x: 5 }
// Still the same object.

// But if you REASSIGN module.exports
// js
// Copy code
// module.exports = { y: 20 };

// console.log(this); // ❗ still {}
// Why?

// Because:

// this still points to the old object

// module.exports now points to a new object

// So now:

// js
// Copy code
// this !== module.exports
// That’s why people say “initially”.

// Short rule (memorize this 🧠)
// At file start, this === module.exports === {}.
// If you later reassign module.exports, this does NOT update.

// Why Node does this
// It allows both styles to work:

// js
// Copy code
// exports.foo = ...
// this.bar = ...
// But reassignment breaks the link.

// Final one-liner
// “Initially set to {}” means Node creates module.exports as an empty object before executing your code, and binds this to that object inside the wrapper.

// That’s it.
