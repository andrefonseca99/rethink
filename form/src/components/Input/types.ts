import { Control } from "react-hook-form";
import { IForm } from "../../pages/Form/types";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<IForm, any>   
    name: "nome" | "idade" | "profissao" | "email" | "telefone" | "dataDePreenchimento";
    errorMessage?: string;
}