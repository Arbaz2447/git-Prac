const heros = ["1x"];
const obj = {HI : 10000}

const mex = [
    {hi:1, hello:2},
    {hi:2},
    {hi:3},
]


//when something applied on whole array forEach and when some optimal calc for of is best
for(const item of mex){
    for(const key in item){
        console.log(key, item[key]);
    }
}
mex.forEach((item)=>{
    for(const key in item){
        console.log(key, item[key]);
    }
})


heros.forEach(function(a,b,c){ // value , index , Whole Array
    console.log(this) // direct call so default this 
})

heros.forEach(function(a,b,c){
    console.log(this.HI) // this is set to obj 
}, obj)

heros.forEach((a,b,c) =>{
    console.log(this) // {} entire main scope is set to module exports 
})

// for...in gives keys of objects (property-based, order not guaranteed),
for(const keys in obj)
    console.log(keys)

//  and for...of gives values of iterables (iterator-based, ordered by
//      definition of the iterable).
for(const vals of heros)
    console.log(vals)
