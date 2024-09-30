//************* Variáveis globais que devem ser inicializadas no início do jogo *************************************

//variável que irá guardar o personagem sorteado
let personagemPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0
//variável que irá guardar a consequência de cada número sorteado no desafio da caverna
const consequenciasCaverna = [
    'Você encontrou um zumbi! Você terá que lutar com ele.',
    'Você encontrou um zumbi de dificuldade média e deve enfrentá-lo.',
    'Você passou pela entrada da caverna sem nenhum problema!'    
]


//************************************* Funções que serão repetidas ao longo do jogo *************************************
function endgame(){
    
    alert('tente novamente!')
    return(iniciar())
 
    
}
  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    if (personagemPrincipal == "Ale"){
        sorteioDado++
    }
    return Math.floor(Math.random() * 20) + 1;

    
  }

  // Função para batalha de nível fácil
  function batalhaFacil(){

    var vidaPersonagem = ""
    if(personagemPrincipal == "Vini"){
        vidaPersonagem = 10
    }
    if(personagemPrincipal == "Ale"){
        vidaPersonagem = 10-2
    }
    if(personagemPrincipal == "Pietro"){
        vidaPersonagem = 12
    }
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! Nada acontece.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! O jogo acabou.")
        endgame()
        
    }
    else{
        alert("Você venceu! Agora a história continua")
        alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const kevinD1 = prompt(`hey ${personagemPrincipal}!, long time no see!(Sim,ele só fala ingles)
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            
            const kevinD3 = ""
            if(kevinD1 == 1){
                const kevinD2 = prompt(`nothing much,just exploring here, i did see a mineshaft around north of this cave if you wanna check it
                1-ir para a mineshaft(mina abandonada)
                2-sair da caverna`)
                if(kevinD2 == 1){
                    mineshaft()
                }
            }else(kevinD3 =alert('oh, okay, bye!'))
        
}

}
    // Função para batalha de nível médio
    function batalhaMedia(){

        var vidaPersonagem = ""
    if(personagemPrincipal == "Vini"){
        vidaPersonagem = 10
    }
    if(personagemPrincipal == "Ale"){
        vidaPersonagem = 10-2
    }
    if(personagemPrincipal == "Pietro"){
        vidaPersonagem = 12
    }
        let vidaInimigo = 8

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você perdeu! O jogo acabou.")
            endgame()
        
        }
        else{
            alert("Você venceu!")
            alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const kevinD1 = prompt(`hey ${personagemPrincipal}!, long time no see!(Sim,ele só fala ingles)
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            const kevinD3 = ""
            if(kevinD1 == 1){
                const kevinD2 = prompt(`nothing much,just exploring here, i did see a mineshaft around north of this cave if you wanna check it
                1-ir para a mineshaft(mina abandonada)
                2-sair da caverna`)
                if(kevinD2 == 1){
                    mineshaft()
                }
            }else(kevinD3 =alert('oh, okay, bye!'))}


}
 
//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar(){
    const personagem = prompt(`Seja bem-vindo a uma incrivel aventura inspirada no mundo de Minecraft! digite sua opção:: 
        1 - Sortear Personagem
        2 - Sair do Jogo`)

    switch(personagem){
        case "1":
            personagemPrincipal = sortearPersonagem()
            alert(`você jogará de ${personagemPrincipal}`)
            if(personagemPrincipal === "Vini")
                iniciarJornadaGuerreiro()
            else if(personagemPrincipal === "Ale")
                iniciarJornadaMago()
            else
                iniciarJornadaArqueiro()
        break
        case "2":
            alert("Sem um personagem não dá para jogar...")
        break
        default:
            alert('isso não é uma opção...eu acho')
    
}
}

//************************************* Função para sortear personagem *************************************
function sortearPersonagem() {
    const personagens = ["Vini", "Ale", "Pietro"];

    const sorteado = Math.floor(Math.random() * personagens.length);
    return personagens[sorteado];
  }


//************************************* Funções para jornada de cada personagem *************************************

// Função para iniciar a jornada do arqueiro
function iniciarJornadaArqueiro(){
    const opcao1 = prompt(`enquanto explorava, você acaba achando uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou pra outro lado`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) 
            alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const kevinD1 = prompt(`hey ${personagemPrincipal}!, long time no see!(Sim,ele só fala ingles)
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            
            const kevinD3 = ""
            if(kevinD1 == 1){
                const kevinD2 = prompt(`nothing much,just exploring here, i did see a mineshaft around north of this cave if you wanna check it
                1-ir para a mineshaft(mina abandonada)
                2-sair da caverna`)
                if(kevinD2 == 1){
                    mineshaft()
                }
            }else(kevinD3 =alert('oh, okay, bye!'))}
            
        }
        else{
            alert(`talvez seja melhor tentar depois mesmo`)
            return
        }
    }
    else{
        alert(`voltando para sua base...`)
        return
    }
}

// Função para iniciar a jornada do guerreiro
function iniciarJornadaGuerreiro(){
    const opcao1 = prompt(`enquanto explorava, você acaba achando uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou pra outro lado`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
            alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const kevinD1 = prompt(`hey ${personagemPrincipal}!, long time no see!(Sim,ele só fala ingles)
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            
            const kevinD3 = ""
            if(kevinD1 == 1){
                const kevinD2 = prompt(`nothing much,just exploring here, i did see a mineshaft around north of this cave if you wanna check it
                1-ir para a mineshaft(mina abandonada)
                2-sair da caverna`)
                if(kevinD2 == 1){
                    mineshaft()
                }
            }else(kevinD3 =alert('oh, okay, bye!'))
        }
        else{
            alert(`Melhor se equipar melhor, não acha?`)
            return
        }
    }
    else{
        alert(`voltando para sua base...`)
        return
    }
}

// Função para iniciar a jornada do mago
function iniciarJornadaMago(){
    const opcao1 = prompt(`enquanto explorava, você acaba achando uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Decido não entrar`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
            alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const kevinD1 = prompt(`hey ${personagemPrincipal}!, long time no see!(Sim,ele só fala ingles)
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            const kevinD3 = ""
            if(kevinD1 == 1){
                const kevinD2 = prompt(`nothing much,just exploring here, i did see a mineshaft around north of this cave if you wanna check it
                1-ir para a mineshaft(mina abandonada)
                2-sair da caverna`)
                if(kevinD2 == 1){
                    mineshaft()
                }
            }else(kevinD3 =alert('oh, okay, bye!'))
        }
        else{
            alert(`tudo bem, depois você joga!`)
            return
        }
    }
    else{
        alert(`Melhor se equipar, não acha?`)
        return
    }
}

function mineshaft(){
   
alert('i see youre really into exploring! good luck!')

const spider = prompt(`continuando para dentro da caverna, você se depara com um spawner de aranhas! Deseja enfrentar?
    1-ir em frente a batalha
    2- tentar outro caminho mais seguro`)
    if(spider == 1){
        alert('hora da ação!')
        spiderBTL()
    }
    if(spider == 2){
        sorteioDado = rolarDado()
        if (sorteioDado >= 15){
            alert('voce consegue passar por um caminho onde elas nao te acham, continuando sua jornada!')
            portal()
        }else{
            alert('Parece que voce não foi cuidadoso, uma aranha te ataca!')
            spiderBTL()
        }

    }
    else{
        alert('talvez essa caverna nao seja tudo isso..')
        endgame()
    }

}
function spiderBTL(){

    var vidaPersonagem = ""
if(personagemPrincipal == "Vini"){
    vidaPersonagem = 10
}
if(personagemPrincipal == "Ale"){
    vidaPersonagem = 10-2
}
if(personagemPrincipal == "Pietro"){
    vidaPersonagem = 12
}
    let vidaInimigo = 5

    alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da aranha!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou a aranha!! Agora é vida dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A aranha tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! Nada acontece.")
            alert('a aranha curou 1 de vida!')
            vidaInimigo++
        }
    }
    if(vidaPersonagem <= 0){
        alert(`${personagemPrincipal} Morreu envenenado por uma aranha das cavernas`)
    }
    else{
        alert("Você venceu!")
        rolarDado()
     sorteioDado = rolarDado()
     if(sorteioDado >= 10){
     alert('parece que essas aranhas estao bem bravas! outra vem e te ataca por tras!')
     }spiderBTL2()

}
}

function spiderBTL2(){

    var vidaPersonagem = ""
if(personagemPrincipal == "Vini"){
    vidaPersonagem = 10
}
if(personagemPrincipal == "Ale"){
    vidaPersonagem = 10-2
}
if(personagemPrincipal == "Pietro"){
    vidaPersonagem = 12
}
    let vidaInimigo = 3

    alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da aranha!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou a aranha!! Agora é vida dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A aranha tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! Nada acontece.")
            alert('a aranha curou 1 de vida!')
            vidaInimigo++
        }
    }
    if(vidaPersonagem <= 0){
        alert(`${personagemPrincipal} Morreu envenenado por uma aranha das cavernas`)
    }
    else{
        alert("Você venceu!")
        nether()
    
    }
}

function portal(){
    alert('após seu confronto com as chatas aranhas, você segue em frente a caverna, e se depara com algo que não esperava...')
    alert('um portal do nether abandonado!')
    const decisãonether = prompt(`convenientemente, você tem um ferro e um sílex em seu inventario, Deseja fazer um ísqueiro para acende o portal?
    1-Sim
    2-Não`)
    if(decisãonether == 1){
       const portal = prompt(`Seu isqueiro com feito com sucesso, Deseja acender o portal?
       1-sim
       2- ir embora`)
        if(portal == 1){
            nether()
        }
    }else{
        alert('melhor não arriscar né')
        endgame()
    }
}
function nether(){    
    alert('entrando no portal, você se depara com um lugar de dar medo com uma paisagem vermelha coberta de lava, mas felizmente, você entrou perto de uma fortaleza')
const fortaleza = prompt(`deseja explorar a fortaleza para pegar blaze Rods?
1-sim
2-não`)
if( fortaleza == '1'){
alert('ta na hora de matar esses blazes!')
blaze()
}else{
    alert(' o nether nem é tudo isso mesmo')
    endgame()
}
}

function blaze(){
    var vidaPersonagem = ""
    if(personagemPrincipal == "Vini"){
        vidaPersonagem = 10
    }
    if(personagemPrincipal == "Ale"){
        vidaPersonagem = 10-2
    }
    if(personagemPrincipal == "Pietro"){
        vidaPersonagem = 12
    }
        let vidaInimigo = 6
    
        
    
        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do blaze!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o blaze!! Agora é vida dela é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`o blaze tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
                alert('o blaze curou 1 de vida!')
                vidaInimigo++
            }
        }
        if(vidaPersonagem <= 0){
            alert(`${personagemPrincipal} Morreu queimado por blazes`)
            endgame()
        }
        else{
            alert("Você venceu!")
            ender()
           
    }
}
function end(){
alert('agora que você tem tudo a seu dispor, você está pronto para a batalha final!')
alert('depois de muito tempo se aventurando, você chega no portal para a dimensão do END')
const portalEND = alert(`Deseja entrar?
1-Sim
2-Não`)
if(portalEND == 1){
alert('você sente toda sua experiencia e determinação de sua jornada se acumular em seu coração...')
alert(`${personagemPrincipal} ganhou `)
enderDragon()
}
}
function enderDragon(){
    var vidaPersonagem = ""
    if(personagemPrincipal == "Vini"){
        vidaPersonagem = 15
    }
    if(personagemPrincipal == "Ale"){
        vidaPersonagem = 15-2
    }
    if(personagemPrincipal == "Pietro"){
        vidaPersonagem = 17
    }
        let vidaInimigo = 13
    
        
    
        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora o Dragão atacará`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o Dragão! Agora é vida dela é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`o Dragão tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
                alert('o Dragão se enfraquece!')
                vidaInimigo--
            }
        }
        if(vidaPersonagem <= 0){
            alert(`${personagemPrincipal} Morreu Pela furia do Ender Dragon`)
        }
        else{
            alert("Você venceu!")
            final()
}
}
function final(){
alert('com o Dragão derrotado, sua jornada chega a o fim...')
alert('Obrigado por jogar.')
endgame()
}