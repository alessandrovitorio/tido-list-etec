📝 TO-DO LIST — ETEC

Projeto prático para treinar DOM, eventos e manipulação de listas no JavaScript

Olá, pessoal!
Neste projeto vamos trabalhar algo que vocês usam todos os dias: listas de tarefas. A ideia aqui não é só “fazer funcionar”, mas entender a lógica por trás de cada clique, cada elemento que aparece na tela e cada comportamento que construímos via DOM.

Quero que vocês observem bem cada parte, porque tudo o que temos aqui é exatamente o que aparece em sistemas reais: criar elementos, validar dados, atualizar contadores, remover itens e alterar estilos dinamicamente.


---

🎯 Objetivo do Projeto

O objetivo desta prática é reforçar:

Manipulação da árvore DOM

Criação e remoção de elementos com createElement e appendChild

Eventos (click)

Estilização dinâmica via classList.toggle

Validação simples de formulário

Contador de tarefas em tempo real

Organização do código em funções


Nada de frameworks, nada de atalhos. Aqui vocês controlam tudo na mão, como deve ser aprendido na base.


---

🚀 Como funciona o projeto

✔ Adicionar Tarefa

O aluno digita uma tarefa e clica em Enviar.
O JavaScript cria dinamicamente:

um <li>

o texto da tarefa

um botão de fechar

adiciona tudo dentro da <ul>


Cada nova tarefa também atualiza automaticamente o contador.


---

✔ Riscar Tarefa

Ao clicar no item, aplicamos a classe .riscar para sinalizar visualmente que a tarefa já foi concluída.
Isso treina vocês a manipularem classes via DOM (que é fundamental).


---

✔ Excluir Tarefa

O botão da tarefa remove somente aquele item específico da lista.
Aqui aprendemos sobre:

remontar a árvore DOM

atualizar o contador corretamente

entender a diferença entre clicar no li e no button



---

✔ Limpar Tudo

Reseta tudo:

contador

lista

conteúdo visual


Ideal para testar o comportamento do código por completo.


---

🧠 Conceitos importantes que praticamos aqui

🌱 1. DOM na prática

Vocês viram como o navegador enxerga uma página como uma árvore.
Criar elementos, anexar, remover… tudo isso é mexer nessa árvore.

🎛 2. Eventos

Cada ação do usuário dispara uma função.
É a base de qualquer interação real em um site ou sistema.

🎨 3. Classes e estilos pelo JavaScript

Simples, mas poderoso. Foi assim que “riscamos” as tarefas.

🧩 4. Organização do código

Separar funções (enviarTarefa, limparTudo) deixa tudo mais limpo e mais fácil de manter.

🛡 5. Validação

Antes de criar o item, verificamos se o campo está vazio.
Isso evita erros e ajuda o aluno a entender como softwares reais se comportam.


---

🗂 Estrutura básica dos arquivos

index.html  
style.css  
script.js

O HTML contém a estrutura + Bootstrap.
O CSS tem apenas a classe .riscar, para reforçar a diferença entre estilo e comportamento.
O JavaScript controla toda a lógica da aplicação.


---

🧪 Resultado Final

Ao final, você terá um mini-sistema funcional que já dá para adaptar em vários outros projetos.
Mais importante do que o resultado visual é o entendimento da lógica por trás de cada ação.

Esse é exatamente o tipo de base que vocês precisam agora.
Vamos continuar firmes — cada projeto desses é um degrau rumo à programação profissional.

Aqui está a versão formatada para você colar direto no README, já no mesmo tom humano e professoral:


---

🌐 Link do Projeto Publicado

Para visualizar o projeto funcionando diretamente no navegador, acesse:

👉 https://alessandrovitorio.github.io/tido-list-etec/

Usem esse link para consultar o resultado final, comparar com o que vocês desenvolveram e entender como cada parte do código se conecta com o funcionamento real da aplicação.

