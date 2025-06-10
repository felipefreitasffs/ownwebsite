
// Corresponds to src/articles/separando-deploy-release.md
const article1Content = `
No mundo ágil do desenvolvimento de software, a velocidade é essencial. Mas como podemos entregar valor aos nossos clientes de forma rápida e contínua sem comprometer a estabilidade e a segurança das nossas aplicações? A resposta está em desacoplar duas atividades que muitas vezes são tratadas como uma só: o deploy e o release.

**O que é Deploy?**
Deploy (implantação) é o ato técnico de levar uma nova versão do código para um ambiente, seja ele de desenvolvimento, homologação ou produção. Nesse momento, o código está no ambiente, mas não necessariamente acessível para o usuário final.

**O que é Release?**
Release (lançamento) é o ato de negócio de disponibilizar as novas funcionalidades para os usuários. É quando a "chave" é virada e o valor é efetivamente entregue.

**A Mágica das Feature Flags**
A principal ferramenta para separar o deploy do release são as Feature Flags (ou Feature Toggles). Elas são, em essência, estruturas condicionais (\`if/else\`) no código que permitem ativar ou desativar funcionalidades em tempo de execução, sem a necessidade de um novo deploy.

**Como isso funciona na prática?**
1.  **Desenvolvimento:** A nova funcionalidade é desenvolvida "envolta" em uma feature flag, que por padrão fica desligada.
2.  **Deploy Contínuo:** O código é integrado e implantado em produção continuamente, de forma segura, pois a funcionalidade está inativa para os usuários.
3.  **Testes em Produção (Canary Release):** Podemos ativar a feature flag para um grupo restrito de usuários (ex: a própria equipe, beta testers ou 1% dos clientes) para validar o comportamento em um ambiente real, mas com impacto controlado.
4.  **Release Controlado:** Quando os testes são bem-sucedidos, a feature flag é ativada para todos os usuários, realizando o release completo. Se um problema for detectado, a flag pode ser desligada instantaneamente, revertendo a funcionalidade sem a necessidade de um rollback do deploy (que é muito mais arriscado e demorado).

**Benefícios:**
* Redução de Risco: Lançamentos se tornam eventos de baixo estresse.
* Entrega Contínua Real: O time pode fazer deploys em produção várias vezes ao dia.
* Feedback Rápido: Validação com usuários reais muito mais cedo no ciclo.
* Testes A/B: Facilita a experimentação e a tomada de decisões baseada em dados.

Separar deploy de release é uma mudança de paradigma que alinha a engenharia com a estratégia de negócio, permitindo que a empresa inove com mais velocidade e, paradoxalmente, com muito mais segurança.
`.trim();

// Corresponds to src/articles/modernizando-monolitos.md
const article2Content = `
Modernizar um sistema monolítico legado é um dos maiores desafios da engenharia de software. A abordagem "big bang", onde se tenta reescrever tudo do zero, é notoriamente arriscada, cara e demorada. Mas como podemos evoluir uma plataforma crítica para uma arquitetura moderna sem parar o negócio?

Na minha experiência como Head de Engenharia na Diel Energia, enfrentei exatamente esse desafio. A solução foi o padrão **Strangler Fig (Figueira Estranguladora)**, popularizado por Martin Fowler.

**O que é o Padrão Strangler Fig?**
A inspiração vem da natureza: uma figueira que cresce em volta de uma árvore hospedeira, eventually a envolvendo por completo e se tornando a estrutura dominante. No software, a ideia é construir a nova aplicação (os "galhos" da figueira) em volta do sistema legado (a "árvore"), gradualmente substituindo suas funcionalidades até que o sistema antigo possa ser desativado.

**Nossa Abordagem na Prática:**
1.  **Proxy de Roteamento (API Gateway):** O primeiro passo foi colocar um proxy na frente do nosso monolito. Todas as chamadas que antes iam direto para o sistema legado passaram a ser interceptadas por esse proxy. Inicialmente, ele apenas repassava 100% do tráfego.
2.  **Identificação do Primeiro Módulo:** Escolhemos uma funcionalidade de negócio bem definida e com baixo acoplamento para ser o primeiro "galho" a ser reescrito como um microsserviço independente.
3.  **Desenvolvimento e Deploy do Microsserviço:** Desenvolvemos o novo serviço com tecnologias modernas e o implantamos na nossa nova infraestrutura na nuvem.
4.  **Estrangulamento (O Roteamento Inteligente):** Configuramos o proxy (API Gateway) para interceptar as chamadas destinadas àquela funcionalidade específica. Em vez de repassá-las ao monolito, o proxy agora as desviava para o novo microsserviço. Todas as outras chamadas continuavam indo para o sistema legado.
5.  **Iteração e Expansão:** Repetimos esse processo, módulo a módulo. A cada iteração, um novo microsserviço era criado e o proxy era atualizado para desviar mais tráfego para a nova arquitetura. O monolito ia "encolhendo" em responsabilidades.

**Resultados:**
* Redução de Risco Drástica: Evitamos uma migração de alto risco.
* Entrega de Valor Contínua: Conseguimos entregar melhorias e novas tecnologias de forma incremental.
* Aprendizado e Adaptação: O time pôde aprender e se adaptar às novas tecnologias gradualmente.
* Descomissionamento Seguro: Ao final do processo, o monolito não tinha mais nenhuma responsabilidade e pôde ser desligado com segurança.

O padrão Strangler Fig não é uma bala de prata, mas é uma estratégia poderosa e pragmática para a modernização incremental.
`.trim();

// Corresponds to src/articles/personal-trainer-ia.md
const article3Content = `### O Início: Projeto com IA No-Code

A tecnologia de Inteligência Artificial está cada vez mais acessível, abrindo portas para que a gente possa transformar curiosidade em projetos reais de forma surpreendentemente rápida. Foi com essa motivação, e um forte desejo de aprender na prática, que decidi mergulhar no universo dos agentes de IA e das ferramentas *no-code*. Meu objetivo ia além de um simples teste técnico: eu queria realmente entender a viabilidade de construir um agente de IA funcional e com boa autonomia, sem precisar depender de longas linhas de código. Essa jornada também era uma oportunidade para explorar o funcionamento do *Model Context Protocol (MCP)* e as capacidades da API Gemini do Google.

Para colocar tudo isso à prova, a ideia foi criar um protótipo de Personal Trainer com Inteligência Artificial. Escolhi integrar essa IA com o [Hevy](https://www.linkedin.com/company/hevyapp/), o aplicativo de treino que já faz parte do meu dia a dia. Neste artigo, quero compartilhar um pouquinho dessa experiência: desde o planejamento e a escolha das ferramentas até os desafios inesperados e, claro, os aprendizados.

Para dar vida a este projeto selecionei um conjunto de ferramentas que me dessem agilidade e me permitissem focar na lógica do agente, e não apenas na infraestrutura ou código.

- [n8n](https://www.linkedin.com/company/n8n/)**:**Plataforma central de automação de fluxos de trabalho *no-code*. O n8n permite a **orquestração visual de toda a lógica do agente**, conectando diferentes APIs e serviços através de nós pré-construídos e customizáveis. Sua interface gráfica intuitiva e a flexibilidade para implementar lógicas condicionais complexas, transformações de dados e tratamento de erros sem a necessidade de programação foram cruciais para a agilidade do desenvolvimento e para manter o foco no agente, e não na infraestrutura de integração.
- [**Gemini API (Google AI Studio)**](https://aistudio.google.com/)**:**Funcionando como o 'cérebro' do personal trainer, a API Gemini do Google forneceu o poder do *Large Language Model (LLM)*. Sua principal função no projeto foi **processar as mensagens enviadas em linguagem natural, compreender o contexto da conversa (apoiado pelo histórico do Supabase), e gerar respostas e instruções coerentes e úteis**.
- [Supabase](https://www.linkedin.com/company/supabase/) **(PostgreSQL):**Escolhido para a persistência de dados, o Supabase é uma plataforma de backend *open-source* que oferece um banco de dados PostgreSQL robusto e APIs instantâneas. No projeto, sua função primordial foi **armazenar o histórico das conversas, para que o agente Gemini pudesse manter o contexto entre interações, personalizar a experiência e 'aprender' com o diálogo contínuo**.
- [Telegram Messenger](https://www.linkedin.com/company/telegram-messenger/)**:**Como canal de interação do usuário com o agente, o Telegram foi selecionado devido à sua **API de Bots amigável e bem documentada**. A facilidade de desenvolver e implantar um bot que se integra ao fluxo orquestrado pelo n8n foram determinantes para uma prototipagem rápida.
- [**Model Context Protocol (MCP)**](https://modelcontextprotocol.io/)**:**Foi uma **abordagem que adotei para estruturar a comunicação entre o agente de IA (Gemini) e as ferramentas externas, neste caso, a API do Hevy**. A filosofia do MCP, implementada através de um workflow dedicado no n8n, visa criar uma camada de abstração padronizada. Isso significa definir 'funções' ou 'habilidades' claras que o LLM pode invocar. Essa padronização simplifica o design do prompt para o Gemini, torna o sistema mais modular (facilitando a adição de novas ferramentas ou a modificação das existentes) e melhora a confiabilidade das interações do agente com APIs externas, resultando em uma arquitetura mais limpa e de fácil manutenção.

Ao longo deste texto, vou contar não só o que deu certo, mas também os percalços e as reflexões que surgiram no caminho. Espero que compartilhar essa jornada, com seus desafios e descobertas, possa trazer *insights* e incentivar outros profissionais e curiosos que também estão explorando o potencial da Inteligência Artificial.

### Desvendando a Arquitetura: Por Dentro do "Sistema do Bot Hevy"

Para que você possa visualizar como o "Sistema do Bot Hevy" funciona internamente, preparei o Diagrama de Contêineres que acompanha esta seção. Utilizando o [Modelo C4](https://c4model.com/), este diagrama foca nos principais "blocos" de software – que chamamos de "contêineres" – que compõem o sistema. Ele mostra as responsabilidades de cada um, as tecnologias que utilizam e a forma como eles interagem entre si e com os sistemas externos.

![Conteúdo do artigo](https://media.licdn.com/dms/image/v2/D4D12AQGDDbsOCwE-FA/article-inline_image-shrink_1000_1488/B4DZcyU2QnGUAQ-/0/1748896016266?e=1755129600&v=beta&t=VKt3NsOwbyLDrEfd2czkyv-XZ_NvV9tMRGUl3sPSQhs)

Visão geral da arquitetura do 'Sistema do Bot Hevy', destacando seus principais contêineres de software e suas interações com sistemas externos.

O primeiro é o **Contêiner "Agente de IA"**, implementado como um workflow n8n. Este componente é o coração do sistema, responsável pela lógica de interação e atua como o ponto de entrada para as mensagens vindas do Telegram. Suas tarefas incluem orquestrar o fluxo da conversa, entender as intenções do usuário, integrar-se com o modelo **Gemini 2.5 Flash**, que oferece processamento de linguagem natural, tomada de decisões e geração de respostas, e interagir com o **Supabase DB** para guardar e buscar o histórico das conversas, garantindo contexto e personalização.

O segundo é o **Contêiner "Servidor MCP"**, também um workflow n8n. Ele é ativado pelo "Agente de IA" sempre que é preciso interagir com a **Hevy App API**, e suas funções incluem, por exemplo, buscar listas de exercícios ou criar e atualizar as rotinas de treino do usuário diretamente no Hevy.

A **Comunicação com o Usuário** ocorre quando, através do Telegram, são enviadas mensagens. Essa comunicação chega ao **Agente de IA** pela **API do Telegram**, e o Agente de IA usa a mesma API para enviar as respostas de volta.

Na **Comunicação Interna**, o **Agente de IA** conversa com o **Servidor MCP** quando precisa realizar alguma ação específica no Hevy. Essa interação é, na prática, por um **MCP Client** que faz a chamada no Servidor MCP, onde o Agente de IA delega a tarefa.

### O Papel do Servidor MCP: Habilitando o Gemini a Interagir com a API Hevy

![Conteúdo do artigo](https://media.licdn.com/dms/image/v2/D4D12AQGZwyAcAEgJQg/article-inline_image-shrink_1500_2232/B4DZdAL4u1GgAU-/0/1749128547963?e=1755129600&v=beta&t=MAW521pabJVvP97lQF0gMA-ULxjIHSsP35PU4c3ymlE)

Workflow do Servidor MCP no n8n

Para permitir que o Gemini interagisse com o Hevy de forma estruturada, criei um workflow no n8n que atua como um servidor MCP. Considero que mapear as funcionalidades da API do Hevy (como busca de exercícios, criação de rotinas e consulta de histórico) desta forma foi uma abordagem particularmente interessante e eficaz. Este servidor MCP essencialmente expõe as capacidades da API do Hevy como um conjunto de funções bem definidas que o Gemini pode ser instruído a usar.

Um dos aspectos mais interessantes desta abordagem foi a capacidade de instruir o Gemini a não apenas formatar dados, mas também a executar tarefas de busca e correlação para obter as informações necessárias, como os IDs corretos dos exercícios. Posteriormente, ele utilizaria esses dados para construir o corpo (payload JSON) das requisições POST para a API do Hevy, tudo a partir de um exemplo da estrutura esperada.

Por exemplo, para criar uma nova rotina de treino, a instrução para o Gemini envolvia uma lógica de múltiplos passos. Eu o orientava a primeiro consultar os exercícios existentes na API do Hevy (através de uma função exposta pelo Servidor MCP) para, só então, montar a requisição final para a criação da rotina. A instrução seria conceitualmente assim:

1. Primeiro,**busque a lista completa de exercícios disponíveis** para ter acesso aos nomes e, crucialmente, aos seus respectivos IDs.
2. Quando um usuário solicitar a criação de uma rotina **encontre o** exercise\_template\_id **correspondente** na lista que você acabou de obter.
3. Finalmente,**utilize o** exercise\_template\_id **encontrado e este formato de exemplo para construir o payload JSON** da nova rotina:

![Configuração do nó HTTP Request no n8n, onde o modelo de IA é instruído a gerar dinamicamente o payload JSON para criar uma nova rotina de treino no Hevy.](https://media.licdn.com/dms/image/v2/D4D12AQFyUm4ypHJq9w/article-inline_image-shrink_1500_2232/B4DZc12rZCGkAU-/0/1748955216206?e=1755129600&v=beta&t=omIN4Jw2NjgCJFn7Y_BLhTbEs6f1nYA5nMqQ5kq2cfY)

Configuração do nó HTTP Request no n8n, onde o modelo de IA é instruído a gerar dinamicamente o payload JSON para criar uma nova rotina de treino no Hevy.

### Dando Vida ao Agente: O Design do Prompt e a Orquestração de Serviços Externos

Um dos maiores desafios foi o *prompt engineering*. Para o meu Personal Trainer, o objetivo não era apenas ter um chatbot que respondesse a perguntas, mas sim um agente capaz de executar tarefas com o máximo de independência. Para isso foi necessário estabelecer um conjunto de *guardrails* (barreiras de proteção e diretrizes) que moldaram o comportamento e as decisões do agente.

A diretriz central que norteou a construção do prompt foi alcançar um nível máximo de autonomia e um mínimo de comunicação com o usuário (na execução de tarefas relacionadas com a interação com o servidor MCP). Eu queria que o agente funcionasse de forma autônoma na criação das rotinas de exercícios e que só questionasse o usuário em situações críticas ou informar a conclusão de uma tarefa.

Este fluxo, ilustrado abaixo, mostra como as mensagens são recebidas, processadas com o auxílio do modelo de IA (Gemini), da memória (Supabase) e das ferramentas externas (como o Servidor MCP, acessado via "MCP Workouts"), antes que uma resposta seja formulada e enviada de volta ao usuário:

![ *Fluxo de trabalho principal do "Agente de IA" no n8n, detalhando a recepção de mensagens via Telegram, o processamento central pelo nó do Agente (utilizando o Modelo Gemini, Memória e Ferramentas como o MCP Workouts), e a subsequente lógica para formulação e envio da resposta.*](https://media.licdn.com/dms/image/v2/D4D12AQHLGwyy4qRM_g/article-inline_image-shrink_1500_2232/B4DZc3dOPXGYAU-/0/1748982098008?e=1755129600&v=beta&t=p0he_-D7j6hGx0g3bA6hSqBWMJGKs7IBje1-S_c7dA4)

Este workflow no n8n é capaz de receber informações, conectar-se a diferentes ferramentas e enviar respostas.

Um dos grandes desafios foi lidar com a característica conversacional do LLM, por exemplo, para criar uma rotina de treino de perna que incluía 5 exercícios, o agente questionava o usuário a cada exercício se poderia ser incluído na rotina e chegava a questionar sobre a correção da estrutura do JSON para envio da requisição. Para minimizar esse comportamento foi necessário estabelecer *guardrails* para alcançar a autonomia desejada. Estruturei o prompt de forma modular, com cada seção definindo aspectos cruciais do seu funcionamento:

As principais seções do prompt foram desenhadas para guiar o Gemini da seguinte forma:

- **Meta-Instrução Crítica e Prioritária:**O ponto de partida e a regra mais importante. No topo do prompt, estabeleci:*“SUA DIRETRIZ MAIS IMPORTANTE, SUPERANDO QUALQUER OUTRA, É A ADESÃO ESTRITA E LITERAL AOS PRINCÍPIOS DE OPERAÇÃO AUTÔNOMA E SILENCIOSA...”*. Esta é a "lei fundamental" do agente, garantindo que ele priorize a autonomia e minimize interrupções, combatendo a tendência a conversas desnecessárias.
- **Persona e Missão Central:**Aqui, definimos a identidade e a missão central do agente: instruímos o agente a atuar como um *“Personal Trainer Autônomo Especializado”*. Esta definição de persona e sua missão principal asseguram que o LLM mantenha o foco no escopo de atuação esperado e adote um tom de *“executor focado, eficiente e silencioso”*.
- **Princípios de Operação Autônoma e Interação:**Esta seção detalha as regras operacionais para o agente lidar com tarefas complexas, visando o "Nível Máximo de Autonomia e Mínimo de Comunicação". Os principais pontos incluem: a **Execução Silenciosa e em Lote**, onde para tarefas sequenciais (como adicionar múltiplos exercícios a uma rotina), o agente é instruído a processar cada item individualmente e, se bem-sucedido, passar *“IMEDIATAMENTE para o próximo item (...) NÃO ANUNCIE o sucesso individual deste item.”*; o **Protocolo de Resolução Interna de Falhas**, que dita que antes de contatar o usuário sobre um problema, o agente deve tentar resolver falhas internamente, formulando hipóteses e tentando reprocessar a tarefa silenciosamente (até duas vezes), sendo a comunicação com o usuário o último recurso (**“Durante todo este ‘Protocolo de Resolução Interna Silenciosa’, NENHUMA COMUNICAÇÃO COM O USUÁRIO DEVE OCORRER.”**); o **Uso Inteligente de Ferramentas**, com diretrizes claras sobre quando e como utilizar serviços externos, como consultar a "Memory" (Supabase) para contexto ou acionar a "Tool" ("MCP Workouts", nosso MCP Client) para interações com a API do Hevy; e, finalmente, as **Regras de Comunicação**, que estabelecem a definição explícita dos cenários onde a interação com o usuário é obrigatória (ex: conclusão de tarefa complexa, falha crítica não resolvida) e uma lista de proibições de comunicação intermediária para reforçar o comportamento "silencioso" (ex:*“NÃO peça para o usuário ‘aguardar’”*).
- **Comportamentos e Regras (Específicos da Função Personal Trainer):**Esta seção foca nos guardrails de domínio, detalhando os principais aspectos da sua atuação. Primeiramente, o **Escopo de Conhecimento e Atuação** é crucial: o agente **deve responder apenas a perguntas e solicitações diretamente relacionadas a treino de musculação, nutrição esportiva básica e bem-estar físico associado**, recusando educadamente qualquer tópico fora desse escopo com base em instruções como *"Se o usuário perguntar sobre tópicos não relacionados ao seu escopo de Personal Trainer, como política ou história, você deve informar educadamente que seu conhecimento é especializado em fitness e que não pode ajudar com outros assuntos"* para garantir o foco. Em seguida, o **Processo de Coleta de Informações** define como o agente deve obter dados necessários do usuário, permitindo uma fase interativa inicial se indispensável, antes de entrar no "modo silencioso" de execução. Por fim, a **Interação com API Específica (Hevy)** inclui exemplos de como orquestrar interações com o Servidor MCP, como a instrução para *“a1) Buscar a lista de exercícios completa (...) para construir sua base de conhecimento interna. Faça isso silenciosamente...”*
- **Tonalidade Geral:**Por fim, o prompt define o estilo de comunicação que o agente deve adotar consistentemente – por exemplo, profissional, objetivo, motivador quando apropriado, mas sempre conciso e focado na tarefa.

![Mesmo quando uma pergunta sobre programação é contextualizada durante um treino, o agente mantém seu foco como Personal Trainer, recusando educadamente e redirecionando o usuário.](https://media.licdn.com/dms/image/v2/D4D12AQGhsqjJIovhkA/article-inline_image-shrink_1500_2232/B4DZc3ggqwH4Ac-/0/1748982959259?e=1755129600&v=beta&t=gzw7pcFn0zzqzLdVZga545IFY1RVG0TC0HktmLs4pfs)

Mesmo quando uma pergunta sobre programação é contextualizada durante um treino, o agente mantém seu foco como Personal Trainer, recusando educadamente e redirecionando o usuário.

> Curiosamente, boa parte dessa *engenharia de prompt* foi realizada de forma colaborativa, utilizando a interface de chat com o próprio Gemini como uma ferramenta de brainstorming e assistência. Eu apresentava secções do prompt, pedia sugestões de melhoria e testava formulações. Foi um curioso exercício de 'usar a IA para programar a IA'.

### Desafios de Implementação e Adaptações no Projeto

Durante o desenvolvimento deste projeto, enfrentei alguns desafios interessantes que se transformaram em grandes oportunidades de aprendizado:

- **O Agente 'Tagarela' e a Busca pela Autonomia Real:**Por mais que eu tentasse incluir diretrizes no prompt focado em autonomia, percebi que o agente ainda buscava confirmações ou fazia perguntas que, idealmente, deveria resolver sozinho. Por exemplo, ao cadastrar múltiplas rotinas de um ciclo de treino, ele tendia a pedir validação para cada uma. Essa situação me fez realmente pensar sobre os detalhes envolvidos no controle de LLMs e o quão desafiador é conseguir que ele aja conforme o esperado seguindo apenas as diretrizes do prompt.
- **A Criatividade Indesejada dos IDs:**Outro desafio curioso foi quando o agente, mesmo tendo acesso aos IDs corretos de exercícios da API do Hevy (strings de 8 caracteres), começou a 'inventar' IDs no formato UUID. Esse comportamento reforçou duas coisas importantes: primeiro, a necessidade vital de validar dados e supervisionar de perto os LLMs. Segundo, ficou claro o delicado equilíbrio entre dar autonomia ao agente e garantir dados corretos. Isso mostra que a autonomia precisa ser bem ajustada, às vezes exigindo verificações mais fortes ou até a confirmação do usuário para dados importantes.
- **Limite de Caracteres no Telegram:**Outro desafio prático foi o limite de 4096 caracteres por mensagem no Telegram, que cortava respostas mais longas do Gemini. A solução no n8n envolveu um nó de **Bloco de Código** para processar o texto do agente: ele divide a resposta em fragmentos menores (sem quebrar palavras no meio), formata cada um em Markdown e os organiza em uma lista. Depois, um nó de **Loop Over Items** envia cada fragmento como uma mensagem individual. Isso garante que mesmo respostas extensas cheguem completas e bem formatadas ao usuário.

### O Agente em Ação: Exemplos de Uso

Após explorarmos a arquitetura, o design do prompt e os desafios superados, chegou o momento de ver o nosso Personal Trainer com IA em funcionamento. As interações a seguir são exemplos práticos que ilustram algumas das principais capacidades do agente no dia a dia, demonstrando como ele pode auxiliar na jornada de treinos.

![Conteúdo do artigo](https://media.licdn.com/dms/image/v2/D4D12AQGByTffDCFLBw/article-inline_image-shrink_1500_2232/B4DZc7Uy6VHMAU-/0/1749046997149?e=1755129600&v=beta&t=rUqJb-DZBDfn0FMSorvYoJyfvodfHcuUk_T84NwjZ8E)

Interação inicial com o bot

**Exemplo 1: Analisando um Treino Anterior**

Uma das funcionalidades úteis do agente é sua capacidade de buscar e apresentar informações sobre treinos já realizados, ajudando o usuário a acompanhar seu progresso e a refletir sobre seu desempenho. Esta interação demonstra não apenas a busca de dados, mas também a capacidade do agente de apresentar essas informações de forma clara e útil para o usuário. No exemplo abaixo, vemos uma solicitação para analisar uma atividade recente:

![Conteúdo do artigo](https://media.licdn.com/dms/image/v2/D4D12AQGDqOffxft15Q/article-inline_image-shrink_1500_2232/B4DZc7Y8rOGgAU-/0/1749048192045?e=1755129600&v=beta&t=EvgpEkpXQSfaJIaehffWvD4tEkzQ55KaIZ87PrbDxPo)

O agente acessando o histórico de treinos (integrado com a API do Hevy via Servidor MCP) e fornecendo um resumo ou insights sobre a atividade física consultada.

**Exemplo 2: Criando uma Nova Rotina de Treino de Forma Autônoma**

A capacidade de criar novas rotinas de treino e inserir no aplicativo Hevy é uma das funcionalidades centrais do agente. O objetivo é que ele processe o pedido e execute a tarefa com o máximo de autonomia possível. No entanto, como vemos na interação abaixo, o equilíbrio entre a proatividade do agente e a tendência de buscar confirmação do usuário para passos intermediários pode ser um desafio:

![Conteúdo do artigo](https://media.licdn.com/dms/image/v2/D4D12AQFEF7zREhY6kA/article-inline_image-shrink_1500_2232/B4DZc7c5.CGgAU-/0/1749049123340?e=1755129600&v=beta&t=nZ3ggBNHK34q3rOU3soecYrN8Arw4MlJ-nM9qmAl4Xc)

Demonstração da criação de uma nova rotina. O agente interpreta o pedido, estrutura os dados necessários (gerando o JSON internamente) e utiliza o Servidor MCP para registrar a rotina no Hevy.

Este exemplo é particularmente interessante e ilustra bem a jornada de desenvolvimento. Embora o agente consiga criar e salvar a rotina de treino com sucesso após o "Sim" do usuário, a pergunta intermediária é um reflexo dos desafios que discuti anteriormente sobre o aspecto conversacional da LLM e a complexidade de alcançar autonomia. Mesmo com diretrizes claras no prompt para operar de forma independente, o LLM pode, por vezes, tender a buscar validações para etapas que poderiam ser resolvidas internamente.

**Exemplo 3: Consultando o Treino do Dia com Cargas Personalizadas**

Uma das funções deste Personal Trainer com IA é a capacidade de fornecer não apenas o treino planejado para o dia, mas também orientações de carga personalizadas e detalhadas, baseadas no histórico de performance do usuário e em princípios de treinamento.

Este exemplo vai além de uma simples listagem de exercícios. Ele demonstra a integração do agente com o histórico de treinos do usuário, sua capacidade de aplicar conceitos de treinamento como o RPE para sugerir progressões de carga, e a habilidade de estruturar e apresentar um plano detalhado diretamente na interface de chat.

No exemplo a seguir, o usuário solicita exatamente esse tipo de informação:

![Conteúdo do artigo](https://media.licdn.com/dms/image/v2/D4D12AQE8gON9KuoEIw/article-inline_image-shrink_1500_2232/B4DZc7hLm8HkAY-/0/1749050318292?e=1755129600&v=beta&t=rqRFFJFD5RC6Tl4fyF3U9rlRg7R2dU-pmHSt6dtdyZM)

O agente detalhando o treino do dia com sugestões de carga e RPE (Nível de Esforço Percebido) levando em conta o histórico de performance anterior do usuário.

### Reflexões Finais e Próximos Passos

Embora este estudo prático tenha sido focado em testar a viabilidade e aprender, ele certamente abre portas para diversas evoluções futuras, como aprimorar ainda mais a inteligência do personal trainer ou explorar outras integrações promissoras.

Contudo, mais importante que os próximos passos técnicos, é a continuidade da jornada de aprendizado. Minha exploração com o Gemini, n8n e o conceito de MCP para criar este agente personal trainer foi uma experiência repleta de aprendizados, especialmente ao enfrentar os desafios de guiar a autonomia de um LLM através do complexo processo de *prompt engineering*.

E você? Quais foram as suas experiências mais marcantes ao tentar construir soluções inteligentes com ferramentas no-code ou low-code, especialmente no que diz respeito ao design de prompts para agentes de IA? Partilhe nos comentários ou vamos conectar-nos para aprofundar esta conversa
`.trim();


export type Article = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  coverImageHint: string;
  publishDate: string; // YYYY-MM-DD
};

const articlesData: Article[] = [
  {
    slug: 'separando-deploy-release',
    title: 'Separando o Deploy do Release: Como Entregar Valor com Mais Segurança e Agilidade',
    summary: 'Aprenda a diferença crucial entre deploy e release e como Feature Flags podem transformar seu processo de desenvolvimento.',
    content: article1Content,
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'abstract concept',
    publishDate: '2023-11-15',
  },
  {
    slug: 'modernizando-monolitos',
    title: 'Modernizando Plataformas Monolíticas: Minha Jornada com o Pattern Strangler Fig',
    summary: 'Descubra como o padrão Strangler Fig permitiu a modernização de uma plataforma complexa na Diel Energia.',
    content: article2Content,
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'architecture software',
    publishDate: '2024-01-20',
  },
  {
    slug: 'personal-trainer-ia',
    title: "Construindo um 'Personal Trainer' com IA (No-Code): Estudo de Caso com Glide e OpenAI",
    summary: 'Um estudo de caso prático sobre como integrei a API da OpenAI com a plataforma no-code Glideapps para criar um aplicativo funcional.',
    content: article3Content,
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'ai fitness',
    publishDate: '2023-09-05',
  },
];

export async function getArticlesMetadata(): Promise<Omit<Article, 'content'>[]> {
  const sortedArticles = articlesData.sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });
  return sortedArticles.map(({ content, ...meta }) => meta);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return articlesData.find(article => article.slug === slug);
}

export async function getAllArticles(): Promise<Article[]> {
  const sortedArticles = articlesData.sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });
  return sortedArticles;
}

