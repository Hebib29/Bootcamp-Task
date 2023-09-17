let day=window.prompt("Enter the day of the week")
let b="";

switch(day){
    case "1":
        b="Monday";
        break;
    case "2":
        b="Tuesday";
        break;
    case "3":
        b="Wednesday";
        break;
    case "4":
        b = "Thursday";
        break;
    case "5":
        b="Friday";
        break;
    case "6":
        b="Saturday";
        break;
    case "7":
        b= "Sunday";
        default:
            b="Enter the day of week"
}
let c = document.createElement( "h1");
c.textContent=b;
document.body.appendChild(c);