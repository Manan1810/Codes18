// numbers=[1,6,4,3,9,8]
// numbers.sort()
// console.log(numbers);
// console.log(numbers.length);

// const obj={key:values}

const arr =[{name:"udit",age:18},{name:"manan",age:18}]

const arr1 =[{color:"red",price:180},{color:"red",price:100},{color:"green",price:100}]

const num= [1,2,3,4,5]

const arr2=num.slice(0,2);

const numadd =num.map((value,index)=>{
    return   value-1
})

const numfilter =arr1.filter((value,index)=>{
    return value.color === "red" && value.price > 100
console.log(numfilter);
})








