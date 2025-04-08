pipeline {
    agent any

    environment {
        REPORT_JSON = "cypress/results/mochawesome.json"
        REPORT_HTML = "cypress/results/mochawesome.html"
    }

    stages {
        //Faz o clone do seu repositório Cypress a partir do GitHub.
        stage('Checkout do Codigo') {
            steps {
                git url: 'https://github.com/viniciuscarneironascimento/cypress-e2e-alura-adopet.git', branch: 'main'
            }
        }
        //Instala os pacotes do package-lock.json, garantindo reprodutibilidade do ambiente.
        stage('Instalar Dependencias') {
            steps {
                bat 'npm ci'
            }
        }
        //Executa os testes automatizados e usa o Mochawesome como reporter
        stage('Executar Testes Cypress com Mochawesome') {
            steps {
                bat '''
                    set FORCE_COLOR=0
                    npx cypress run --reporter mochawesome > run.log 2>&1
                '''
            }
        }

        stage('Exibir Erros (se houver)') {
            when {
                expression { currentBuild.currentResult == 'FAILURE' }
            }
            steps {
                script {
                    echo "A execução falhou. Verifique os artefatos gerados como o relatório HTML do Mochawesome e o log de execução (run.log)."
                }
            }
        }
    }

    //Mesmo se a pipeline falhar, os seguintes arquivos são salvos e disponibilizados no Jenkins
    post {
        always {
            echo 'Pipeline finalizada. Arquivando artefatos...'
            archiveArtifacts artifacts: "cypress/videos/**/*.mp4", allowEmptyArchive: true
            archiveArtifacts artifacts: "cypress/screenshots/**/*.png", allowEmptyArchive: true
            archiveArtifacts artifacts: "${REPORT_JSON}", allowEmptyArchive: true
            archiveArtifacts artifacts: "${REPORT_HTML}", allowEmptyArchive: true
            archiveArtifacts artifacts: "run.log", allowEmptyArchive: true
        }

        failure {
            echo 'A execução falhou. Veja os artefatos ou logs acima para detalhes.'
        }

        success {
            echo 'Todos os testes passaram com sucesso!'
        }
    }
}