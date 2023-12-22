var q= document.getElementsByClassName("quantitè")

var p=document.getElementsByClassName("price")




var btnplus=document.getElementsByClassName("btnp")
var btnmoins = document.getElementsByClassName("btnm")
     for (let plus of btnplus) {
        plus.addEventListener("click",function () {
            plus.nextElementSibling.innerText++ ; 
            som()
        })} 

    for (let moins of btnmoins) {
        moins.addEventListener("click",function () {
            moins.previousElementSibling.innerText--;  
           som()
        })}

function som() {
    var somm =0
for (let i = 0; i < p.length; i++) {
somm+= p[i].innerText * q[i].innerText

document.getElementById("total").innerText = somm
}}

var supp = document.getElementsByClassName("supp")
console.log(supp);
lon=supp.length
for (let i = 0; i <lon; i++) {
    var suppr= supp[i]
    suppr.addEventListener("click",function (event) {
        let suppr = event.target
        suppr.parentElement.parentElement.remove();  
    })
    
}
 var like = document.getElementsByClassName("like")
 console.log(like);
 long = like.length
 console.log(long);
 for (let i=0; i <long ; i++) {
var lik= like [i]
    lik.addEventListener ("click",function (event) {
        let lik=event.target
        lik.style.color ="red"
    })
 }
 var like = document.getElementsByClassName("like")
 console.log(like);
 long = like.length
 console.log(long);
 for (let i=0; i <long ; i++) {
var lik= like [i]
    lik.addEventListener ( "dblclick",function (event) {
        let lik=event.target
        lik.style.color ="black"
    })
 }