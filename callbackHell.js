/*
1. print 'hi' after 1 sec
2. print 'hello' after 3 sec of step 1
3. print 'hello there' after 4 sec of step 2

*/

// using callbacks
setTimeout(() => {
    console.log('hi')
    setTimeout(() => {
        console.log('hello')
        setTimeout(() => {
            console.log('hello there')
        }, 4000)
    }, 3000)
}, 1000)

// using promises chaining
function setTimeoutPromisified(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
}

setTimeoutPromisified(1000)
.then( () => {
    console.log('hi');
    return setTimeoutPromisified(3000)
})
.then(() => {
    console.log('hello')
    return setTimeoutPromisified(4000)
})
.then(() => {
    console.log("hello there")
})