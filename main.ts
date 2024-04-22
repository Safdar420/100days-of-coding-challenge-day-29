
//   Q no 85

function findCodePosition(str:string){
    return str.indexOf("code")
}
console.log(findCodePosition("learn to code with typescript"));

//  Q no 86
function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript"); 
}
console.log(hasJavaScript("I love coding in JavaScript!"));


//  Q no 87

function extractFirstTenCharacters(str:string):string{
    return str.substring(0,10)
}
console.log(extractFirstTenCharacters("Hello Typescript world"));
