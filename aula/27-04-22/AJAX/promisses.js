/*
// EXEMPLO COM CALLBACK. Alternativa às funções de callback

const POSTS = [
    {titulo: 'Post Um', cont: 'Conteúdo post um'},
    {titulo: 'Post Dois', cont: 'Conteúdo post dois'}];

function criaPost(post, callback){
    POSTS.push(post);
    callback();
}

function getPosts(){
    let saida = '';
    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`;
    });

    document.body.innerHTML = saida;
}

criaPost({titulo: 'Post Três', cont: 'Conteúdo post três'}, getPosts);
criaPost({titulo: 'Post Quatro', cont: 'Conteúdo post quatro'}, getPosts);

*/

/* EXEMPLO COM PROMISES

function criaPost(post){
    return new Promise(function(resolve, rejeita){
        POSTS.push(post);
        resolve();
    });
}

function getPosts(){
    
    let saida = '';
    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`;
    });

    document.body.innerHTML = saida;
}

criaPost({titulo: 'Post Três', cont: 'Conteúdo post Três'}).then(getPosts);

function criaPost(post){
    return new Promise(function(resolve, rejeita){
        const ERRO = true;
        if(!ERRO){
            POSTS.push(post);
            resolve();
        }else{
            rejeita('ERRO, não funcionou como esperado.');
        }
       
    });
}

function getPosts(){
    
    let saida = '';
    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`;
    });

    document.body.innerHTML = saida;
}

criaPost({titulo: 'Post Três', cont: 'Conteúdo post Três'}).then(getPosts).catch(function(erro){
    console.log(erro);
});
*/

//p/ entender como funciona.