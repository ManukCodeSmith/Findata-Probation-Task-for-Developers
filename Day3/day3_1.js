let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let e = document.getElementById("e")


a.addEventListener("mouseenter", function() {
    document.body.style.backgroundColor = "red";
})
b.addEventListener("mouseenter", function() {
    document.body.style.backgroundColor = "blue";
})
c.addEventListener("mouseenter", function() {
    document.body.style.backgroundColor = "green";
})
d.addEventListener("mouseenter", function() {
    document.body.style.backgroundColor = "yellow";
})
e.addEventListener("mouseenter", function() {
    document.body.style.backgroundColor = "orange";
})



a.addEventListener("mouseleave", function() {
    document.body.style.backgroundColor = "white";
})
b.addEventListener("mouseleave", function() {
    document.body.style.backgroundColor = "green";
})
c.addEventListener("mouseleave", function() {
    document.body.style.backgroundColor = "white";
})
d.addEventListener("mouseleave", function() {
    document.body.style.backgroundColor = "white";
})
e.addEventListener("mouseleave", function() {
    document.body.style.backgroundColor = "white";
})
// document.addEventListener('mouseenter', function() {
//     const buttons = document.querySelectorAll('[data-color]');
//     buttons.forEach(button => {
//       button.addEventListener('click', function() {
//         const color = this.getAttribute('data-color');
//         document.body.style.backgroundColor = color;
//       });
//     });
//   });
  

