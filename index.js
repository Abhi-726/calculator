var input=document.querySelector(".cal-display"); // selecting the input box of our calculator using query selector
var display=input.value; // setting the value to a new variable display
var result=0;
var equation="";

// if result is zero setting the value of input field automatically
if(result!=0){
    input.value=result;
}

// clear button for reseting inout box
function clear_display(){
    input.value="0";
    equation="";
    result=0;
}

//adding functionality to the operand button
function get_num(btn){
    console.log(btn.innerHTML);
    if(input.value==="0"){
        input.value=btn.innerHTML;
    }
    else{
        display=input.value;
        display+=btn.innerHTML;
        input.value=display;
    }
}
//adding functionality to the operator button
function operator(btn){
    if(btn.innerHTML=="x"){
        display=input.value;
        display+="*";
        input.value=display;
    }
    else if(btn.innerHTML=="x<sup>2</sup>"){ // if user click squre button
        display=input.value;
        display="("+display+")"+"^2";
        input.value=display;
    }
    else{
        display=input.value;
        display+=btn.innerHTML;
        input.value=display;
    }
}
function convert_to_number(str){
    str=parseFloat(str);
    return str;
}
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        calculate();
    }
});

// if user click the equal btn then calculate function will be trigged and the equation in the input box will 
// be calculated by eval function and stored in result then replace the value of input by result
function calculate(){
    equation=input.value;
    if(equation.indexOf("^")!=-1){
        equation=equation.replace("^2","**2");
    }
    var result=eval(equation);  
    if(!result.isInteger){
        result.toFixed(3);
    }
    input.value=result;
}
