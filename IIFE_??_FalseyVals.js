// Notes for IIFE 
const a = 10 , b = 20
console.log(this)
const sum = (function(a, b){
    console.log(this) // default this ! 
    return 10; // resolves sum to 10;
})(a,b);


// use once with out polluting global scope and if needed can be resolved into a single value ! 
// default this / global exec this which is default to exports module !
//  (async function () {
//   const result = await fetchData();
//   console.log(result);
// })();
// (async () => {
//   const result = await fetchData();
//   console.log(result);
// })();


//falsy vals
false , 0 , 0n, -0 , "" , NaN, undefined , null

// ?? operator --->


/*
`||` vs `??` (JavaScript)

`||` returns the first truthy value.
It treats `false`, `0`, `""`, `NaN`, `null`, and `undefined` as invalid.

Examples:
0 || 10        // 10
"" || "hi"     // "hi"

`??` (nullish coalescing) returns the first value that is NOT `null` or `undefined`.
It allows valid falsy values like `false`, `0`, `""`, and `NaN`.

Examples:
0 ?? 10        // 0
"" ?? "hi"     // ""
false ?? true  // false
null ?? 5      // 5
undefined ?? 5 // 5

Why `??` exists:
`||` breaks valid falsy values such as:
- `0` (counts, lengths, prices)
- `""` (empty input)
- `false` (boolean flags)

Important rule:
`??` cannot be mixed with `||` or `&&` without parentheses.

a ?? b || c      // ❌ SyntaxError
(a ?? b) || c    // ✅

Summary:
`||` → truthy values  
`??` → nullish (`null` or `undefined`) only
*/
