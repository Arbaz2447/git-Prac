Array  vs  NodeList vs HTMLCollection
All three (Array, NodeList, HTMLCollection) hold REFERENCES to DOM elements.
Change the element → DOM changes everywhere.

Array
- Static snapshot
- Fully flexible: forEach, map, filter, etc.
- Not live
- Created manually (e.g. [...nodes])

NodeList
- Usually static (frozen view)
- Has forEach (no map/filter)
- Returned by querySelectorAll()
- Can include non-element nodes (text, comments)

HTMLCollection
- Live (auto-updates with DOM)
- No forEach / map
- Returned by getElementsBy*
- Elements only

childNodes  → NodeList (includes text/comments)
children    → HTMLCollection (elements only)




e.target vs e.currentTarget
e.target
- Element where the event ACTUALLY happened
- Can be a child element
- Changes depending on where you click

e.currentTarget
- Element that has the event listener
- Always the same
- Never a child

If listener is on parent and child is clicked:
e.target        → child
e.currentTarget → parent

If element has no children:
e.target === e.currentTarget



// e.preventDefault() vs (default button type) === (input type = submit)
- <button type="submit"> inside a form triggers form submission by default.
- Default submission = browser tries to send request + reload page.
- To prevent reload in JS:

btn.addEventListener('click', (e) => {
  e.preventDefault(); // stops default submit behavior
  // run your custom JS here
});

- Alternative: use <button type="button"> to never submit form.
- TL;DR: submit button → reload; preventDefault() stops it; type="button" avoids it entirely.
