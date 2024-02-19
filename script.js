const convertBtn = document.getElementById("convert-btn");
const inputNum = document.getElementById("number");
const output = document.getElementById("output");


let romanList = [

    ["M",1000],
    ['CM',900],
    ['D',500],
    ['CD',400],
    ['C',100],
    ['XC',90],
    ['L',50],
    ['XL',40],
    ['X',10],
    ['IX',9],
    ['V',5],
    ['IV',4],
    ['I',1]



]

const coverter = (num) => {

    let romanNum = "";

    for (let i=0 ; i<romanList.length; i++)
    {
        while(num>=romanList[i][1])
        {
            romanNum += romanList[i][0];
            num -= romanList[i][1];

        }   
    }

    return romanNum;

}



const outputFunction=()=>{

    const number = parseInt(inputNum.value);

    if (!number)
    {

        output.value = "Please enter a valid number";
        return;

    }
    else if (number < 0)
    {
        output.value = "Please enter a number greater than or equal to 1";
        return ;
    }
    else if (number > 3999)
    {
        output.value = "Please enter a number less than or equal to 3999";
        return ;
    }
    else
    {
        output.value = coverter(number);


    }



    

    inputNum.value = "";

}

convertBtn.addEventListener("click" , ()=>
{
    outputFunction();


})


inputNum.addEventListener("keydown", (e)=> {


    if(e.key== "Enter")
    {

        outputFunction();
    }
})



