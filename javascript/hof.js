function greet(name)
{
    console.log('hello',name)

}
function createGreeter(greeting)
{

    function greet(name)
    {
        console.log(greeting, name)
    }

    return greet
}

function getName()
{
    return document.getElementById('namebox').value

}

 
let g1 = createGreeter('good morning')
let g2 = createGreeter('good evening')
console.log(typeof g1)

console.log(g1('shivendra'))

console.log(g1('rahul'))

console.log(greet('shivendra'))

console.log(greet('uddhav'))