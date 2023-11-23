
const displayData = (data) => {
    result.value += data
}

const displayClear = () => {
    result.value = ""
}

const displayResult = () => {
    if(result.value != ""){
        try{ result.value = eval(result.value)}
    catch{ result.value = "ERROR!!!"}
    }
}

const displayRemoveLast = () => {
    result.value = result.value.slice(0,-1)
}