# 📁 Projeto: cypress-e2e-alura-adopet (público)

🔗 Repositório: [viniciuscarneironascimento/cypress-e2e-alura-adopet](https://github.com/viniciuscarneironascimento/cypress-e2e-alura-adopet)

---

## 📝 Descrição

Repositório do curso da Alura sobre testes automatizados com Cypress, ministrado pela instrutora **Camila Pessoa**.  
O foco é a aplicação web **Adopet** ([link da aplicação](https://adopet-frontend-cypress.vercel.app)), onde configurei uma pipeline de **CI/CD com Jenkins** como parte do processo de aprendizado prático.

---

## 🚀 Resultados Alcançados

- Aprendizado do uso do **Jenkins** como ferramenta de integração e entrega contínuas (CI/CD) em um projeto de testes automatizados.
- Utilização do **ChatGPT** para apoio na instalação, configuração do Jenkins e criação do arquivo `Jenkinsfile` com uma pipeline declarativa.
- Jenkins executado localmente (`localhost`).
- Próximo passo: configurar o Jenkins para aceitar **webhooks do GitHub**, disparando a pipeline automaticamente após cada **commit/push**.
- Primeiros contatos com a **interface do Jenkins** para monitorar a execução e o status da pipeline, já que o GitHub, diferentemente do GitHub Actions, não exibe esses detalhes por padrão.

---

Iniciando o Jenkins local: acessar caminho “cd /c/Program\ Files/Jenkins” no terminal bash e iniciar o servidor local do Jenkins com o comando “java -jar jenkins.war”. A senha é exibida no terminal (copie e cole).

Criando um novo projeto de execução no Jenkins
Passo 1: Criar um Novo Job de Pipeline
1.	Acessar o Jenkins:
o	Acesse o Jenkins na URL: http://localhost:8080.
2.	Criar Novo Item (Job):
o	Na página inicial do Jenkins, clique em Novo Item.
o	Escolha Pipeline como o tipo de projeto e dê um nome ao seu job (por exemplo, "Cypress-Pipeline").
o	Clique em OK.
3.	Configurar o Pipeline:
o	Na configuração do job, vá até a seção Pipeline e selecione a opção Pipeline script from SCM (Script de Pipeline a partir do SCM), caso você esteja usando um repositório Git.
4.	Configurar o SCM (Controle de Versão):
o	Em SCM, selecione Git.
o	Adicione a URL do repositório Git onde seu projeto está hospedado (por exemplo, https://github.com/usuário/repositorio.git).
o	Defina a branch (geralmente é a main ou master).
o	Se necessário, adicione credenciais para acesso ao repositório Git.
5.	Definir o Script da Pipeline (Jenkinsfile):
o	O Jenkins buscará automaticamente o arquivo Jenkinsfile dentro do repositório. Se você tiver um arquivo Jenkinsfile na raiz do seu repositório, o Jenkins irá usá-lo.
Passo 2: Testar a Configuração da Pipeline
1.	Salvar o Job:
o	Depois de configurar a pipeline e o script, clique em Salvar.
2.	Executar o Job:
o	Na página do job que você criou, clique em Construir Agora.
o	O Jenkins iniciará a execução da pipeline e mostrará o progresso na página do job.
3. Verificando os Resultados da Pipeline
1.	Acessando os Logs:
o	Após a execução, clique no número da build na seção Histórico de Construção.
o	Isso abrirá os detalhes da execução da pipeline, incluindo os logs de cada estágio.
2.	Verificando Artefatos:
o	Se você tiver configurado o arquivamento de artefatos (como o relatório do Cypress, logs, vídeos, etc.), você verá essas informações na página de detalhes da execução.
o	Na seção Artefatos Arquivados, você poderá acessar os arquivos gerados.


