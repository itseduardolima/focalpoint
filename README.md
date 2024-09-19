# FocalPoint - Gerenciamento de Tarefas

FocalPoint é uma aplicação web simples para gerenciamento de tarefas (To-Do List). Ela permite que os usuários criem, completem e deletem tarefas, oferecendo uma interface amigável e intuitiva. O objetivo principal da aplicação é ajudar os usuários a organizarem suas atividades diárias de forma eficiente.

A aplicação foi construída com Next.js e utiliza o Local Storage para persistência de dados, permitindo que as tarefas do usuário sejam salvas mesmo após a atualização ou fechamento da página.

## Funcionalidades

### Adicionar Tarefas

Os usuários podem adicionar novas tarefas através de um modal. Cada tarefa tem um título.

### Marcar como Concluída

Tarefas podem ser marcadas como concluídas clicando na caixa de seleção (checkbox). Tarefas concluídas são movidas para a seção "Tarefas Finalizadas".

### Deletar Tarefas

Usuários podem deletar tarefas selecionadas clicando no ícone de lixeira.

### Persistência de Tarefas

As tarefas são salvas no Local Storage, garantindo que as atividades permaneçam após recarregamentos da página.

## Tecnologias Utilizadas

- **Next.js:** Framework React para construção da interface.
- **TypeScript:** Linguagem para tipagem estática do JavaScript, garantindo maior robustez no desenvolvimento.
- **Sass Css:** Utilizado para modularização de estilos, garantindo escopo local para os componentes.
- **Local Storage:** Utilizado para salvar as tarefas no navegador, proporcionando persistência de dados entre sessões.

## Estrutura da Aplicação

- **TaskList:** Componente que exibe a lista de tarefas, permitindo a interação com as tarefas (adicionar, completar, deletar).
- **Modal:** Componente reutilizável de modal, usado para adicionar tarefas ou exibir a confirmação de exclusão.
- **Button:** Componente reutilizável para botões, com variantes de estilo (primary, cancel, delete).
- **Local Storage:** Utilizado para salvar as tarefas no navegador, proporcionando persistência de dados entre sessões.

## Instalação e Configuração

### Requisitos

- Node.js

### Instale as dependências:

1. Clone esse repositório

```bash
git clone https://github.com/itseduardolima/focalpoint.git
```

2. Abra a pasta do projeto

```bash
cd focalpoint
```

3. Instale a dependências

```bash
npm install
```

## 🌐 Link do Deploy

Acesse o projeto ao vivo através do link: [Deploy do Projeto](https://focalpoint-tasks.vercel.app/)
