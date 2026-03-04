hello();

function hello(){

    console.log("HEllO\n");
    
}

function person(name){

    console.log("hi good afernoon " +name);
}

person("Ram");

function add(a,b){
return a-b;
}
var result =add(3,5);
console.log(result);

function myfunction(){

    let myname="fast";
    let text ="Inside: "+ typeof myname + " "+myname;
    console.log(text);
}
myfunction();

function mydemo(x,y=10){

    return x+y;

}
console.log("show default values"+mydemo);



