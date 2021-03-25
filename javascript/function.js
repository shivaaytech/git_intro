console.log(alpha())

function alpha()
{
    return "A"
}
function beta(){
    return "B"
}

let gamma = function () {
    return "letgamma"
}
console.log(gamma())

function area(height,width ){
    if (typeof width =='undefined'){
        return Math.PI*height*height
    }
    return height*width
}

console.log('area 3,4',area(3,4))
console.log('area 5',area(5))

function hello()
{ 
    console.log('hello world '  + arguments[0] + arguments[1])
}
hello(2,5)
hello('shivendra' , 'singh')