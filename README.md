# 🍅## 🎥 Demo

<div align="center">

![Timer Pomodoro Demo](./src/assets/timerpomodorovideogif.gif)

_Timer Pomodoro em ação - Gerencie seu tempo com eficiência_

</div>

Um aplicativo de timer Pomodoro moderno e elegante, desenvolvido com React, TypeScript e Styled Components. Ideal para aumentar a produtividade usando a técnica Pomodoro de gerenciamento de tempo.

## 🎥 Demo

## ✨ Funcionalidades

- ⏱️ **Timer Personalizável**: Configure ciclos de trabalho de 5 a 60 minutos
- 📝 **Gerenciamento de Tarefas**: Defina nomes para suas tarefas e projetos
- 📊 **Histórico Completo**: Acompanhe todos os seus ciclos realizados
- 🎯 **Status dos Ciclos**: Visualize ciclos concluídos, interrompidos ou em andamento
- 💾 **Persistência Local**: Seus dados são salvos automaticamente no navegador
- 🎨 **Interface Moderna**: Design limpo e responsivo com tema escuro
- ⌨️ **Validação de Formulários**: Validação robusta com Zod e React Hook Form

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca principal para construção da interface
- **TypeScript** - Tipagem estática para maior segurança no código
- **Vite** - Build tool moderna e rápida
- **Styled Components** - Estilização com CSS-in-JS

### Gerenciamento de Estado

- **React Context API** - Gerenciamento de estado global
- **useReducer** - Gerenciamento de estado complexo
- **Immer** - Atualizações imutáveis do estado

### Formulários e Validação

- **React Hook Form** - Gerenciamento eficiente de formulários
- **Zod** - Validação de schema TypeScript-first
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### Utilitários

- **date-fns** - Manipulação de datas e formatação
- **React Router DOM** - Roteamento entre páginas
- **Phosphor Icons** - Ícones modernos e consistentes

### Qualidade de Código

- **ESLint** - Análise estática de código
- **@rocketseat/eslint-config** - Configuração de linting otimizada
- **TypeScript ESLint** - Regras específicas para TypeScript

## 🎯 Técnica Pomodoro

A Técnica Pomodoro é um método de gerenciamento de tempo que utiliza um cronômetro para dividir o trabalho em intervalos, tradicionalmente de 25 minutos, separados por pequenos intervalos. Este aplicativo permite personalizar esses intervalos conforme sua necessidade (5-60 minutos).

### Como Funciona:

1. ⚡ **Defina uma tarefa** para trabalhar
2. ⏰ **Configure o tempo** do ciclo (5-60 minutos)
3. 🎯 **Foque na tarefa** até o timer tocar
4. ✅ **Marque como concluído** ou interrompa se necessário
5. 📊 **Acompanhe seu progresso** na página de histórico

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/WagnerSousaLima/timerPomodoro.git

# Entre no diretório
cd timerPomodoro

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Produção
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção

# Qualidade de Código
npm run lint         # Executa o linter
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── Header/         # Cabeçalho com navegação
├── contexts/           # Contextos React
│   ├── CyclesContext.ts     # Definições do contexto
│   └── CyclesContext.tsx    # Provider do contexto
├── layouts/            # Layouts da aplicação
│   └── DefaultLayout/  # Layout padrão com header
├── pages/              # Páginas da aplicação
│   ├── Home/           # Página principal com timer
│   │   └── components/ # Componentes específicos da Home
│   │       ├── Countdown/    # Componente do cronômetro
│   │       └── NewCycleForm/ # Formulário de novo ciclo
│   └── History/        # Página de histórico
├── reducers/           # Reducers para gerenciamento de estado
│   └── cycles/         # Reducer dos ciclos
├── styles/             # Estilos globais e temas
│   ├── global.ts       # Estilos globais
│   └── themes/         # Temas da aplicação
├── @types/             # Definições de tipos TypeScript
└── assets/             # Recursos estáticos
```

## 🎨 Design System

### Cores

- **Fundo Principal**: `#121214` (gray-900)
- **Cards/Containers**: `#202024` (gray-800)
- **Textos**: `#E1E1E6` (gray-100)
- **Ação Principal**: `#00875F` (green-500)
- **Ação Secundária**: `#AB222E` (red-500)
- **Em Progresso**: `#FBA94C` (yellow-500)

### Tipografia

- **Principal**: Roboto
- **Monospace**: Roboto Mono (para o cronômetro)

## 🔧 Funcionalidades Técnicas

### Gerenciamento de Estado

- **Context API** para estado global dos ciclos
- **useReducer** para operações complexas de estado
- **LocalStorage** para persistência de dados

### Validação de Formulários

- **Zod** para validação de schema
- **React Hook Form** para performance otimizada
- Validação em tempo real com feedback visual

### Roteamento

- **React Router DOM** para navegação
- Layout compartilhado entre páginas
- Navegação intuitiva com ícones

## 📱 Responsividade

O aplicativo é totalmente responsivo e funciona perfeitamente em:

- 🖥️ **Desktop** (1024px+)
- 📱 **Tablet** (768px - 1023px)
- 📱 **Mobile** (até 767px)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Wagner Sousa Lima**

- GitHub: [@WagnerSousaLima](https://github.com/WagnerSousaLima)
- LinkedIn: [Wagner Sousa Lima](https://www.linkedin.com/in/wagnersl7)

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>🍅 Desenvolvido com foco na produtividade e bem-estar no trabalho</p>
</div>
