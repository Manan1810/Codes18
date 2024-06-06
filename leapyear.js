function leapyear(year)
{
    if(0==year%4)
        {
            console.log(year+" is a leap year");
        }
        else
        {
            console.log(year+" is a normal year");
           }
}
console.log(leapyear(2025));
