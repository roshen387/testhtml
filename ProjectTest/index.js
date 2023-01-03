a=5
console.log(a+"a")
function fn (){
    let a=6
    console.log(a+"a6")
    function myFn(){
        a=9
        console.log(a)
    }
myFn()
}
fn()
console.log(a)