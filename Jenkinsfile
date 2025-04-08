pipeline {
    agent any

    environment {
        REPORT_JSON = "mochawesome-report/mochawesome.json"
        REPORT_HTML = "mochawesome-report/mochawesome.html"
    }

    stages {
        stage('Checkout do Codigo') {
            steps {
                git url: 'https://github.com/viniciuscarneironascimento/cypress-e2e-alura-adopet.git', branch: 'main'
            }
        }

        stage('Instalar Dependencias') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Executar Testes Cypress com Mochawesome') {
            steps {
                bat 'npx cypress run --reporter mochawesome --no-color'
            }
        }

        stage('Exibir Erros (se houver)') {
            when {
                expression { currentBuild.currentResult == 'FAILURE' }
            }
            steps {
                script {
                    echo "(Opcional) Erros detalhados podem ser vistos no HTML do Mochawesome."
                    // O jq provavelmente não está disponível no Windows sem instalação
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizada. Arquivando artefatos...'
            archiveArtifacts artifacts: "cypress/videos/**/*.mp4", allowEmptyArchive: true
            archiveArtifacts artifacts: "cypress/screenshots/**/*.png", allowEmptyArchive: true
            archiveArtifacts artifacts: "${REPORT_JSON}", allowEmptyArchive: true
            archiveArtifacts artifacts: "${REPORT_HTML}", allowEmptyArchive: true
        }

        failure {
            echo 'A execução falhou. Veja os artefatos ou logs acima para detalhes.'
        }

        success {
            echo 'Todos os testes passaram com sucesso!'
        }
    }
}
