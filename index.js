function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function increment(n){
    return n += 1
}
function decrement(n){
    return n -= 1
}

function makeInt(n){
    if (n.toString()==n){
        return parseInt(n,10)
    }
    
    else if (n !== parseInt(n,10)){
        return parseInt(n,10)
    }

    else if (isNaN(n)){
        return parseInt(n,10)
    }

    else {
        return false
    }
}

function preserveDecimal(n){
    if (n.toString()==n){
        return parseFloat(n)
    }

    else if (isNaN(n)){
        return parseInt(n)
    }

    else {
        return false
    }
}