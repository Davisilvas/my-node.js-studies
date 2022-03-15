
// fs vem de file system

// fs.writeFile('teste.txt', 'hello world', (error) => {
//     if(error){throw error}
//     console.log("arquivo criado com sucesso")
// })

// fs.appendFile('teste.txt' , ' - olá mundo' , (error)=>{
//     if(error){throw error}
//     console.log("arquivo atualizado com sucesso")
// });

// fs.unlink('teste.txt', (error) => {
//     if (error) {throw error}
//     console.log('arquivo deletado com sucesso')
// })

// fs.rename('teste.txt' , 'novoNome.txt' , (error) => {
//     if (error){throw error}
//     console.log('nome do arquivo alterado com sucesso')
// })

// fs.readFile('novoNome.txt' , (error, data) => {
//     if(error){throw error}
//     console.log(data)
// })

// fs.readFile('novoNome.txt', 'UTF8' , (error, data) => {
//     if(error){throw error}
//     console.log(data)
// })


let fs = require('fs');
let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, 'UTF8', (error, data) => {
    if (error){throw error}

    fs.writeFile (fileName + "_Uppercase", data.toUpperCase(), (error)=>{
        if (error){throw error}
    })
    console.log("Arquivo gerado com sucesso")
})