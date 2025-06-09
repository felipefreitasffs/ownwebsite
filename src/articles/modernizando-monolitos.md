---
title: "Modernizando Plataformas Monolíticas: Minha Jornada com o Pattern Strangler Fig"
summary: "Descubra como o padrão Strangler Fig permitiu a modernização de uma plataforma complexa na Diel Energia."
---

Modernizar um sistema monolítico legado é um dos maiores desafios da engenharia de software. A abordagem "big bang", onde se tenta reescrever tudo do zero, é notoriamente arriscada, cara e demorada. Mas como podemos evoluir uma plataforma crítica para uma arquitetura moderna sem parar o negócio?

Na minha experiência como Head de Engenharia na Diel Energia, enfrentei exatamente esse desafio. A solução foi o padrão **Strangler Fig (Figueira Estranguladora)**, popularizado por Martin Fowler.

**O que é o Padrão Strangler Fig?**
A inspiração vem da natureza: uma figueira que cresce em volta de uma árvore hospedeira, eventualmente a envolvendo por completo e se tornando a estrutura dominante. No software, a ideia é construir a nova aplicação (os "galhos" da figueira) em volta do sistema legado (a "árvore"), gradualmente substituindo suas funcionalidades até que o sistema antigo possa ser desativado.

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
