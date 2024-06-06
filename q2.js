// q1
let arr=[{name:"Hello",age:16},{name:"Hel",age:15},
{name:"Halo",age:13},{name:"Heo",age:16},
{name:"Hello",age:12},{name:"Hell",age:122},
{name:"ella",age:11},{name:"HI",age:20},
{name:"Heil",age:18},{name:"HeY",age:14},
{name:"Diem",age:10},{name:"Hallo",age:12}]

const uname=arr.filter((value,index)=>{

return value.name==="Hello" && value.age<18
})

console.log(uname);
// const neme=arr.map((value,index)=>{
//     return value.age-1
// })
// console.log(neme);
// q2
