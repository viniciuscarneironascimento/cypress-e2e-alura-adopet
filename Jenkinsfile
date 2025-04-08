pipeline {
    agent any

    environment {
        REPORT_DIR = "cypress/results"
        REPORT_JSON = "${REPORT_DIR}/mochawesome.json"
        REPORT_HTML = "${REPORT_DIR}/mochawesome.html"
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
                bat '''
                    set FORCE_COLOR=0
                    npx cypress run > run.log 2>&1
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

    post {
        always {
            echo 'Pipeline finalizada. Arquivando artefatos...'
            archiveArtifacts artifacts: "cypress/videos/**/*.mp4", allowEmptyArchive: true
            archiveArtifacts artifacts: "cypress/screenshots/**/*.png", allowEmptyArchive: true
            archiveArtifacts artifacts: "${REPORT_DIR}/*.json", allowEmptyArchive: true
            archiveArtifacts artifacts: "${REPORT_DIR}/*.html", allowEmptyArchive: true
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