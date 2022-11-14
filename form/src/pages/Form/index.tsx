import { Control, useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { parse } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, FormContainer, Column, Spacing, Title, FieldTitle } from "./styles";
import { defaultValues, IForm } from "./types";


const schema = yup
  .object({
    nome: yup
      .string()
      .min(4, "Digite seu nome completo")
      .required("Campo obrigatório!"),
    idade: yup
      .number()
      .typeError("A idade deve ser um número")
      .integer("A idade deve ser um número inteiro")
      .moreThan(12, "Você deve ter mais de 12 anos de idade")
      .required("Campo obrigatório!"),
    profissao: yup
      .string()
      .min(4, "Deve ter no mínimo 4 caracteres")
      .required("Campo obrigatório!"),
    email: yup
      .string()
      .email("Deve ser um email válido")
      .required("Campo obrigatório!"),
    telefone: yup
      .string() //eslint-disable-next-line
      .matches(/^\([1-9]{2}\) [9]{1} [0-9]{4}\-[0-9]{4}$/gm,
         "O formato deve ser obrigatóriamente (99) 9 9999-9999")
      .required("Campo obrigatório!"),
    dataDePreenchimento: yup
      .date()
      .transform((value, originalValue, context) => {
        if (context.isType(value)) return value;
        return parse(originalValue, 'dd/MM/yyyy', new Date());
  })
      .typeError("Deve ser uma data válida no formato dd/MM/aaaa")
      .min("01/01/2022", "A data mínima é 01/01/2022")
      .max(new Date(), "Não pode ser uma data futura")
      .required("Campo obrigatório!"),
  })
      .required();

function handleSubmit(control: Control<IForm, any>){
    alert(`Enviado!
    Nome: ${control._fields.nome?._f.value}
    Idade: ${control._fields.idade?._f.value}
    Profissão: ${control._fields.profissao?._f.value}
    Email: ${control._fields.email?._f.value}
    Telefone: ${control._fields.telefone?._f.value}
    Data de Preenchimento: ${control._fields.dataDePreenchimento?._f.value}
    `);
}

const Form = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  return (
    <Container>
      <FormContainer>
        <Column>
          <Title>Form Page</Title>
          <Spacing />
          <FieldTitle>Nome</FieldTitle>
          <Input
            name="nome"
            placeholder="Exemplo: José da Silva"
            control={control}
            errorMessage={errors?.nome?.message}
          />
          <Spacing />
          <FieldTitle>Idade</FieldTitle>
          <Input
            name="idade"
            placeholder="Exemplo: 23"
            control={control}
            errorMessage={errors?.idade?.message}
          />
          <Spacing />
          <FieldTitle>Profissão</FieldTitle>
          <Input
            name="profissao"
            placeholder="Exemplo: Estudante"
            control={control}
            errorMessage={errors?.profissao?.message}
          />
          <Spacing />
          <FieldTitle>Email</FieldTitle>
          <Input
            name="email"
            placeholder="Exemplo: email@example.com"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <FieldTitle>Telefone</FieldTitle>
          <Input
            name="telefone"
            placeholder="Exemplo: (31) 993434201"
            control={control}
            errorMessage={errors?.telefone?.message}
          />
          <Spacing />
          <FieldTitle>Data de preenchimento</FieldTitle>
          <Input
            name="dataDePreenchimento"
            placeholder="Exemplo: 14/11/2022"
            control={control}
            errorMessage={errors?.dataDePreenchimento?.message}
          />
          <Spacing />
          <Button disabled={!isValid} title="Enviar" onClick={() => handleSubmit(control)} />
        </Column>
      </FormContainer>
    </Container>
  );
};

export default Form;
