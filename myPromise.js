class MyPromise{
    constructor(func){
        func(this.proxyResolve.bind(this), this.proxyReject.bind(this))
    }
    // this func is used to bind this particular promise object with the resolve func
    proxyResolve(value){
        if(this.resolve){
            this.resolve(value)
        }
    }
    // this func is used to bind this particular promise object with the reject func
    proxyReject(error){
        if(this.reject){
            this.reject(error)
        }
    }

    thenThis(resolve){
        this.resolve = resolve
        return this;
    }

    catchThis(reject){
        this.reject = reject
        return this
    }
}

let err = true;

function setTimeoutPromisified(ms){
    console.log('Inside executor func, wait for response')
    let p = new MyPromise((resolve, reject) => {
        if(err){
            setTimeout(reject, ms);
        }
        else {
            setTimeout(resolve, ms);
        }
    })

    return p;
}

function doThis(){
    console.log('No error, Status : successfull');
    
}

function displayErrorMsg(){
    console.log('Error occured, status : failed');
}

setTimeoutPromisified(3000).thenThis(doThis).catchThis(displayErrorMsg);