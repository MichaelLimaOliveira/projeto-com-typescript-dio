// Como podemos melhorar o esse código usando TS? 

enum Trabalho {
    Atriz = 'Atriz',
    Padeiro ='Padeiro'
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

const pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

const pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
}

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}