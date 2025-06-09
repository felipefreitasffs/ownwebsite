---
title: "Construindo um 'Personal Trainer' com IA (No-Code): Estudo de Caso com Glide e OpenAI"
summary: "Um estudo de caso prático sobre como integrei a API da OpenAI com a plataforma no-code Glideapps para criar um aplicativo funcional."
---

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
