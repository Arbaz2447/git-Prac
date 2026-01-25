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

