document.getElementById('img').addEventListener((e)=>{

}, false); // -----> Capturing (top down True) vs Bubbling (Bottom Up  False)
document.getElementById('imgs').addEventListener((e)=>{

        e.preventDefault(); // stops form submission and for anchor Tags stop Navigation !
        e.stopPropagation(); 

}, true);  // -----> Capturing (top down ) vs Bubbling (Bottom Up  )

// ------------------------------------------------ DOM related ------------------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS</title>
</head>
<body>
        <div>
            <p>1</p> <br/>
            <p>12</p><br/>
            <p>122</p><br/>
            <p>12222222</p><br/>
        </div>
</body>
<script>

    const body = document.querySelector('body');
    const elem = body.firstElementChild;

    elem.childNodes.forEach((elem)=>{
        elem.addEventListener('click', (e)=>{
            // e.target.remove();

             // which tag 
            if(e.target.tagName === 'P') e.target.remove()
        })
    })

</script>
</html>




Simple explanation (plain English)
These are properties of a JavaScript event object.
When something happens on a webpage (like a click or key press), the browser creates an event object that tells you what happened, where, and how.

Event basics
type → What kind of event happened  
👉 "click", "mousedown", "keyup", etc.

timestamp → Time (in milliseconds) since the page loaded when the event happened.

defaultPrevented  
true → preventDefault() was used  
false → browser did its normal behavior (like following a link)

Elements involved
target → The exact element that was clicked (the real source).
currentTarget → The element that the event listener is attached to  
👉 Very useful with event bubbling.
srcElement → Old version of target (used in old Internet Explorer).
toElement  
→ Element the mouse moved into  
❌ Deprecated (don’t use anymore).

Mouse position
clientX / clientY  
→ Mouse position inside the browser window (viewport).
screenX / screenY  
→ Mouse position on the entire screen (including taskbars, etc.).

Keyboard modifiers
altKey → true if Alt was pressed  
ctrlKey → true if Ctrl was pressed  
shiftKey → true if Shift was pressed

Keyboard keys
keyCode  
→ Number representing the key pressed  
❌ Deprecated — use event.key or event.code instead.

  
Other Events 
document.addEventListener("click", function (event) {
  console.log("Event type:", event.type);
  console.log("Time:", event.timeStamp);

  console.log("Default prevented?", event.defaultPrevented);

  console.log("Target element:", event.target);
  console.log("Listener attached to:", event.currentTarget);

  console.log("Mouse position (viewport):", event.clientX, event.clientY);
  console.log("Mouse position (screen):", event.screenX, event.screenY);

  console.log("Alt key:", event.altKey);
  console.log("Ctrl key:", event.ctrlKey);
  console.log("Shift key:", event.shiftKey);
});
