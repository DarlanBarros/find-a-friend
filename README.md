#App

FindAFriend app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível cadastrar um pet;
- [] Deve ser possível listar todos os pets para adoção em uma determinada cidade;
- [] Deve ser possível filtrar os pets com base em suas características (idade, porte, etc);
- [] Deve ser possível vizualisar detalhes de um pet específico;
- [] Deve ser possível cadastrar uma ORG(Organização);
- [] Deve ser possível fazer login de uma ORG no sistema;

## RNs (Regras de negócio)

- [] A informação de cidade é obrigatória para listar os pets;
- [] Uma ORG deve, obrigatoriamente, ter um endereço e um número de WhatsApp;
- [] Todo pet cadastrado precisa estar vinculado a uma ORG;
- [] O contato do usuário interessado em adotar um pet será feito diretamente com a ORG via WhatsApp;
- [] Todos os filtros de características do pet, com exceção da cidade, são opcionais;
- [] Para que uma ORG tenha acesso administrativo à aplicação, ela deve estar logada;

## RNFs (Requisitos não-funcionais)

- [] A senha da org precisa estar criptografada;
- [] Os dados da org precisam estar persistidos em um banco PostGreSQL;
- [] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [] A org deve ser identificada por um JWT (JSON Web Token);