// Key Press ! 
console.log('Project 5'); 
const container = document.getElementById('insert');
document.addEventListener('keydown', (e) => {
  let newNode = document.createElement('div');
  newNode.innerHTML = `Key Pressed ${e.key}</div>`;
  container.appendChild(newNode);
});


// Manage Timeouts 
const start = document.getElementById('start');
const stop = document.getElementById('stop');
let Interval = null;

start.addEventListener('click', (e) => {
  const hex = '0123456789ABCDEF';
  if (!Interval) {
    Interval = setInterval(() => {
      let res = '';
      for (let i = 0; i < 6; i++) {
        let number = Math.floor(Math.random() * 16);
        // console.log(number);
        res += hex[number];
      }
      console.log(res);
      document.body.style.backgroundColor = `#${res}`;
    }, 1000);
  }
});
stop.addEventListener('click', (e) => {
  clearInterval(Interval);
  Interval = null;
});







// Create A promise , use resolve and reejct under some async activity 

const promiseOne = new Promise((resolve, reject) =>{

    setTimeout(() => {
        const req = !true;
        if(!req){
            reject({user:"The Value is False", phone:"6767"});
        }else{
            resolve({user:"The Value is True", phone:"1212"})
        }
    }, 2500);

});

promiseOne
.then((data) =>{
    console.log(data);
    return data.phone;
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

// create a promise , use to handle the promise and handle errors


const nPriomise = new Promise((resolve, reject)=>{
    // some Async act can be done !
    setTimeout(()=>{
        if(!true){
            resolve("Res");
        }else{
            reject("Rejected")
        }
    },1200)
})

const func = async () => { // Grace Fully we handeled error Gracefully ! 
    try{
        const res = await nPriomise
        console.log(res)
    }catch(err){
        console.log(err);
    }
}
func();

// ----------------------------------------------------
// internal working of Fetch is like 2 things happen symultaniously ! ->
1. in Memory data , onFulfill[], onReject[] are Created;

2. Web Browser /Node Env -> sends Network Request if it gets some response its under onFulfill 
    else onReject
Thus some errors like 404 , 200 are also under onFulfill so they Must be checked under .then 

Your Comp talks with another in network , so req in network i.e Network Request !
