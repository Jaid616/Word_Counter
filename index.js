// const textarea = document.getElementsByTagName("textarea");


const textarea = document.querySelector("textarea");
const charactor = document.querySelector("#char");
const word = document.querySelector("#word");
textarea.addEventListener("input", updateValue);

function updateValue() {
  calchar();
  calword();
//   anticheat();
}

function calchar() {
  let text = document.querySelector("textarea").value;

  let newtext = text.split("");
   let filtertext = newtext.filter((element) => {
    return element != " " && element != "\n";
  });
  charactor.innerHTML = filtertext.length;

  
}

function calword() {
  let text = document.querySelector("textarea").value;

  let newtext1 = text.split(" ");
  let filtertext1 = newtext1.filter((element) => {
    return element != "";
  });
  word.innerHTML = filtertext1.length;

}
// text="";
// function anticheat(){
    



// window.onkeypress = function (e){
//     let verifytext = document.querySelector("#verify");
//    let value5 =document.querySelector("textarea").value;
//   text+=String.fromCharCode(e.charCode);
//   console.log("input",value5);
//    console.log(text); 
//     valuetextlength = value5.length;
//     textlength = text.length-1;
//     console.log("value",valuetextlength);
//     console.log("text",textlength);

//     if(valuetextlength!=textlength+1){
//         verifytext.innerHTML = "You Try to Copy Paste That not Allowed Here";
//     }

// }}