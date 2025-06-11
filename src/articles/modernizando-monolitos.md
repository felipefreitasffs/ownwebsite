---
title: "Modernizando Plataformas Monolíticas: Minha Jornada com o Pattern Strangler Fig"
summary: "Descubra como o padrão Strangler Fig permitiu a modernização de uma plataforma complexa na Diel Energia."
---

Nos últimos meses, tenho trabalhado na modernização de uma plataforma que, com o passar dos anos, começou a enfrentar desafios de performance e manutenção. Com o passar do tempo, sistemas de software tendem a sofrer com algo conhecido como **entropia de software**. Isso acontece quando o código vai se tornando cada vez mais complicado e desorganizado à medida que novas funcionalidades são adicionadas, bugs são corrigidos e ajustes rápidos são feitos. A entropia vai se acumulando, e de repente, o sistema que antes funcionava bem vira um labirinto cheio de dependências que dificultam a manutenção e afetam a performance.

Esse aumento da entropia é comum em **sistemas monolíticos**. À medida que o sistema cresce, fica cada vez mais difícil adicionar ou mudar algo sem quebrar outras partes, e a performance acaba caindo.

Foi aí que comecei a aplicar o **Strangler Pattern,**em vez de tentar reescrever o monolito do zero, essa abordagem incremental vem me permitindo transformar o sistema sem derrubar tudo de uma vez.

---

## O que é a Entropia de Software?

A **entropia de software** é um fenômeno comum em sistemas que vão crescendo e evoluindo com o tempo, especialmente em **sistemas monolíticos**. No contexto da engenharia de software, o termo "entropia" é emprestado da física e refere-se à desordem ou ao aumento da complexidade em um sistema. Quanto mais tempo um sistema é mantido e mais mudanças são feitas nele, mais ele tende a se desorganizar e ficar difícil de entender e modificar. Isso acontece por uma série de razões:

- **Correções de bugs** e implementações rápidas acabam sendo feitas sem o devido planejamento, o que resulta em “remendos” no código.
- **Novas funcionalidades** são adicionadas, muitas vezes sobre partes já antigas e mal documentadas, aumentando a complexidade do código.
- **Dependências e interligações** começam a surgir em excesso, tornando o sistema mais frágil – qualquer pequena alteração pode ter um efeito cascata em outras partes do sistema.

Com o tempo, essas mudanças incrementais tornam o sistema menos eficiente e mais difícil de manter, e isso pode resultar em problemas graves de performance, bugs recorrentes e aumento dos custos de manutenção. Além disso, a entropia do software cria barreiras para que novos desenvolvedores entendam e trabalhem no sistema, desacelerando o ritmo de entrega e inovação.

![Conteúdo do artigo](https://media.licdn.com/dms/image/v2/D4D12AQHqRNyNLxENNA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1727790689515?e=1755129600&v=beta&t=wkDz_HZgFrMf4ymeIcxCWdB8Ek9qrPxUQI__fspAcHE)

[https://blog.chatbotslife.com/software-entropy-explained-causes-effects-and-remedies-baada6ae083b](https://blog.chatbotslife.com/software-entropy-explained-causes-effects-and-remedies-baada6ae083b)

---

## Como o Strangler Pattern entra em cena?

O **Strangler Pattern** é uma estratégia de refatoração usada para modernizar sistemas monolíticos de maneira gradual. Em vez de tentar reescrever o sistema inteiro de uma só vez – o que pode ser arriscado e demorado – essa abordagem permite que você migre funcionalidades específicas para novas implementações de forma controlada e progressiva.

O nome "Strangler" é inspirado em uma planta parasita que cresce ao redor de uma árvore, eventualmente substituindo-a. No contexto de software, a ideia é "estrangular" o monolito antigo, migrando suas funcionalidades para componentes novos e mais eficientes. Com o tempo, o sistema monolítico é substituído de forma incremental por serviços modernos, sem a necessidade de reescrever tudo de uma vez.

### Como o Strangler Pattern funciona na prática?

1. **Identificação de funcionalidades**: O primeiro passo é identificar as funcionalidades ou módulos mais críticos ou problemáticos no sistema. Muitas vezes, essas são as partes que mais afetam a performance ou que são mais difíceis de manter.
2. **Desenvolvimento de novos serviços**: Após identificar as áreas chaves, começamos a desenvolver serviços independentes que substituem essas partes específicas. Importante: o sistema antigo continua rodando enquanto os novos serviços são testados e implementados.
3. **Decomposição contínua**: Ao longo do tempo, seguimos esse processo até que o sistema antigo seja completamente "estrangulado" e substituído pelos novos serviços.

### Por que usar o Strangler Pattern?

Essa abordagem tem várias vantagens, especialmente em ambientes onde uma reescrita completa do sistema não é viável:

- **Redução de riscos**: Ao invés de realizar uma reescrita completa, o Strangler Pattern permite que a transição ocorra de forma incremental e segura. Isso reduz drasticamente o risco de falhas catastróficas, uma vez que você pode testar cada nova parte à medida que a antiga vai sendo substituída.
- **Evolução contínua**: O sistema evolui de forma incremental, com novas funcionalidades sendo adicionadas aos novos serviços sem adicionar mais complexidade ao antigo sistema.
- **Escalabilidade**: Novos serviços podem ser escalados de forma independente, aumentando a eficiência e a resposta do sistema.
- **Manutenção facilitada**: Cada serviço novo é construído com uma arquitetura mais moderna e organizada, facilitando a manutenção e evolução contínua do sistema.

Na minha experiência, essa abordagem foi essencial para lidar com a entropia acumulada e, ao mesmo tempo, garantir que não houvesse interrupções drásticas no serviço. O **Strangler Pattern** tem permitido modernizar a plataforma gradualmente, começando pelas partes que mais impactavam a performance e causavam sobrecarga.

![Conteúdo do artigo](https://media.licdn.com/dms/image/v2/D4D12AQHFDS0BjeWaXA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1727790969709?e=1755129600&v=beta&t=RHdCIj0OH9QbMv5LMSDrZF5EX3BRSrPzljstBPKqH9k)

[https://microservices.io/patterns/refactoring/strangler-application.html](https://microservices.io/patterns/refactoring/strangler-application.html)

---

## Impacto na performance e manutenção

Desde que comecei a aplicar o Strangler Pattern, já percebi várias melhorias:

- **Performance**: A separação das partes críticas para novos serviços mais eficientes reduziu gargalos e melhorou o tempo de resposta do sistema.
- **Manutenção**: A modularização tornou o código mais organizado, facilitando a identificação e correção de problemas, além de reduzir o risco de criar novos bugs ao fazer alterações.
- **Novas Funcionalidades**: Implementar novos recursos ficou muito mais rápido e menos arriscado, já que agora o sistema é mais modular e estável.

---

## Um processo contínuo

Estou no meio dessa jornada de modernização, e o **Strangler Pattern** tem se mostrado uma abordagem muito eficaz. A transição está acontecendo de forma gradual, o que me permite focar nas partes mais problemáticas e resolver os problemas de forma eficiente, sem grandes interrupções.

Se você também está enfrentando o desafio da **entropia de software** e está procurando uma forma de modernizar seu sistema, o Strangler Pattern pode ser uma excelente escolha. Ele permite refatorar e melhorar gradualmente o sistema, sem riscos significativos de uma interrupção drástica, e ajuda a deixar o sistema mais escalável, eficiente e fácil de manter.

---

## Conclusão

Modernizar sistemas pode ser um desafio, mas com a abordagem certa, como o **Strangler Pattern**, é possível realizar essa transição de forma incremental e obter resultados significativos. No meu caso, essa abordagem foi a chave para transformar uma plataforma antiga em algo mais ágil, escalável e muito mais fácil de manter.

---

## Referências

[https://microservices.io/patterns/refactoring/strangler-application.html](https://microservices.io/patterns/refactoring/strangler-application.html)

[https://blog.chatbotslife.com/software-entropy-explained-causes-effects-and-remedies-baada6ae083b](https://blog.chatbotslife.com/software-entropy-explained-causes-effects-and-remedies-baada6ae083b)

[https://martinfowler.com/bliki/StranglerFigApplication.html](https://martinfowler.com/bliki/StranglerFigApplication.html)

---