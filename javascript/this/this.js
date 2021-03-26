

function checkthis()
{

    console.log(this)
}

let obj ={
    a:10,
    b: 'asdd',
    c:true,
    d:function () {
        console.log(this)
    },
    e:{
        l:1234,
        m:'sdfrt',
        n:function(){
            console.log(this)
        }

    }
}