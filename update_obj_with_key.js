const obj = { name: "thurein", age: 23}


const dynamicKey = (obj, key, value) => {
    return {...obj, [key]: value}
}

console.log(dynamicKey(obj, "name", 'mama'))