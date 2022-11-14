export interface IForm {
    nome: string;
    idade: string;
    profissao: string;
    email: string;
    telefone: string;
    dataDePreenchimento: string;
}

export const defaultValues: IForm = {
    nome: '',
    idade: '',
    profissao: '',
    email: '',
    telefone: '',
    dataDePreenchimento: '',
}