origArray = [1,2,3];

document.addEventListener("DOMContentLoaded", function (event)
{
    document.getElementById("answer1").value = origArray[0];
    document.getElementById("answer2").value = origArray[1];
    document.getElementById("answer3").value = origArray[2];

    document.getElementById("button2").addEventListener("click", function ()
    {
        newArray = origArray.map(cubeIt);
        document.getElementById("answer1").value = newArray[0];
        document.getElementById("answer2").value = newArray[1];
        document.getElementById("answer3").value = newArray[2];
    });
    
    document.getElementById("button3").addEventListener("click", RaiseToForth);
});

function square()
{
    newArray = origArray.map(squareIt);
    document.getElementById("answer1").value = newArray[0];
    document.getElementById("answer2").value = newArray[1];
    document.getElementById("answer3").value = newArray[2];
}
 function squareIt(oneElement)
 {
     return oneElement * oneElement;
 }

 function cubeIt(oneElement)
 {
     return oneElement * oneElement * oneElement
 }

 function RaiseToForth()
 {
     newArray = origArray.map(toTheForth);
     document.getElementById("answer1").value = newArray[0];
     document.getElementById("answer2").value = newArray[1];
     document.getElementById("answer3").value = newArray[2];
 }

 function toTheForth(oneElement)
 {
    return oneElement * oneElement * oneElement * oneElement;
 }