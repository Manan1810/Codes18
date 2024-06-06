    let num=120
    let z=num
    var rev=0
    var rem
    while(num>0){
    rem=num%10
    rev=rev*10+rem
    num=parseInt(num/10)
    }
console.log(rev)
    if(z==rev)
        {
            console.log("Palindrome");
        }
        else
        {
            console.log("Not palindrome");
        }
        
