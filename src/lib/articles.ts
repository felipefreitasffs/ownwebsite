
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
const article3Content = `
A ascensão das plataformas No-Code e das APIs de IA generativa está democratizando a criação de software. Para explorar esse potencial, realizei um estudo de caso prático: construir um aplicativo de "Personal Trainer com IA" usando apenas a plataforma No-Code **Glide** e a API da **OpenAI (GPT)**.

**O Desafio:**
Criar um aplicativo onde um usuário pudesse inserir seus dados (idade, peso, altura, objetivo, dias disponíveis para treino) e receber um plano de treino personalizado e uma sugestão de dieta gerados por uma IA.

**As Ferramentas:**
1.  **Glide (Glideapps):** Uma plataforma No-Code que permite criar aplicativos poderosos a partir de uma planilha (Google Sheets).
2.  **Google Sheets:** Atuou como nosso "banco de dados".
3.  **Make (Integromat):** Uma plataforma de automação que conecta APIs, o cérebro da operação.
4.  **API da OpenAI:** O motor de IA que gera os planos.

**Como a Mágica Acontece (O Fluxo):**
1.  **Entrada de Dados (Glide):** O usuário preenche um formulário no aplicativo.
2.  **Gatilho de Automação (Make):** A plataforma Make monitora o Google Sheets e uma nova linha ativa a automação.
3.  **Construção do Prompt:** Make pega os dados e os formata em um prompt detalhado para a IA. Exemplo: *"Aja como um personal trainer... Crie um plano de treino de 4 dias para um homem de 30 anos, 85kg..."*
4.  **Chamada à API da OpenAI:** Make envia esse prompt para a API da OpenAI.
5.  **Geração da Resposta:** A IA processa o prompt e gera o texto com o plano de treino e a dieta.
6.  **Atualização do Banco de Dados:** Make recebe a resposta da OpenAI e a insere nas colunas correspondentes no Google Sheets.
7.  **Exibição no App (Glide):** O aplicativo exibe automaticamente os planos recém-gerados para o usuário.

**Conclusão:**
Este estudo de caso demonstra que é possível criar aplicações complexas e inteligentes com um mínimo de código. A combinação de No-Code, um banco de dados simples e a orquestração de APIs abre um universo de possibilidades para a prototipagem rápida e a criação de MVPs.
`.trim();


export type Article = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  coverImageHint: string;
};

const articlesData: Article[] = [
  {
    slug: 'separando-deploy-release',
    title: 'Separando o Deploy do Release: Como Entregar Valor com Mais Segurança e Agilidade',
    summary: 'Aprenda a diferença crucial entre deploy e release e como Feature Flags podem transformar seu processo de desenvolvimento.',
    content: article1Content,
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'abstract concept',
  },
  {
    slug: 'modernizando-monolitos',
    title: 'Modernizando Plataformas Monolíticas: Minha Jornada com o Pattern Strangler Fig',
    summary: 'Descubra como o padrão Strangler Fig permitiu a modernização de uma plataforma complexa na Diel Energia.',
    content: article2Content,
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'architecture software',
  },
  {
    slug: 'personal-trainer-ia',
    title: "Construindo um 'Personal Trainer' com IA (No-Code): Estudo de Caso com Glide e OpenAI",
    summary: 'Um estudo de caso prático sobre como integrei a API da OpenAI com a plataforma no-code Glideapps para criar um aplicativo funcional.',
    content: article3Content,
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'ai fitness',
  },
];

export async function getArticlesMetadata(): Promise<Omit<Article, 'content'>[]> {
  return articlesData.map(({ content, ...meta }) => meta);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return articlesData.find(article => article.slug === slug);
}

export async function getAllArticles(): Promise<Article[]> {
  return articlesData;
}
