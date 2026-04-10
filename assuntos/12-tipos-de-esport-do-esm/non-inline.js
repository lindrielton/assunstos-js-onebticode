

function group(){
    console.log('non-inline')
}

// inportanto varias funçoes 

function a(){
    console.log('a')
}

function b(){
    console.log('b')
}


export { group , a, b }


// inportando uma export defaul sem ser na mesma linha

function exportDefault(){
    console.log('export defaul não inline')
}

export default exportDefault