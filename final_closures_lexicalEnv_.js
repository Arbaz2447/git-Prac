<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="1">orange</button>
    <button id="2">green</button>
</body>
<script>

    function setColor(color){
        return function(){
            document.body.style.backgroundColor = color;
        }
    }
    /*
    If a parent function’s variables are captured by inner functions, the parent’s lexical environment stays in memory as long as at least ONE of those inner functions is still reachable.
    */ 
    document.getElementById('1').onclick = setColor("green");
    document.getElementById('2').onclick = function(){
        document.body.style.backgroundColor = "green";
    }
</script>
</html>



Arrays IMP 
Continuous array = no gaps → fast
Holey array = gaps → slower
JS still works, just slower
Avoid holes when possible

Missing ≠ undefined
[1,2,3] //fastest
[1, undefined, 3]  // NOT holey(faster)
[1, , 3]           // holey (slower)
