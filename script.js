// let args = process.argv.slice(2)

// let n1 = Number(args[0]);
// let n2 = Number(args[1]);
// let mf = media(n1, n2);

// function media(x, y){
//     return (x + y)/2;
// }

// console.log(mf);

// console.log(process.argv);

let args = process.argv.slice(2)

let a = Number(args[1]);
let b = Number(args[2]);
let c = " ";

if (args[0] == 's'){
    c = soma(a,b);
}else if(args[0] =='m'){
    c = mult(a,b);
}else{
    c = "houve um erro"
};

function soma(x, y){
    return x + y;
};

function mult(x,y){
    return x * y;
};

console.log(c);