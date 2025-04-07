pipeline {
    agent any

    environment {
        PROJECT_DIR = 'cypress-tests'
        REPORT_JSON = "${PROJECT_DIR}/mochawesome-report/mochawesome.json"
        REPORT_HTML = "${PROJECT_DIR}/mochawesome-report/mochawesome.html"
    }

    stages {
        stage('Checkout do Código') {
            steps {
                git url: 'https://github.com/viniciuscarneironascimento/cypress-e2e-alura-adopet.git', branch: 'main'
            }
        }

        stage('Instalar Dependências') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npm ci'
                }
            }
        }

        stage('Executar Testes Cypress') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npx cypress run --reporter mochawesome'
                }
            }
        }

        stage('Exibir Erros (se houver)') {
            when {
                expression { currentBuild.currentResult == 'FAILURE' }
            }
            steps {
                script {
                    def errorSummary = sh(
                        script: "jq '.results[]?.suites[]?.tests[]? | select(.fail == true) | \"\\(.title) - \\(.err.message)\"' ${REPORT_JSON}",
                        returnStdout: true
                    ).trim()
                    if (errorSummary) {
                        echo "🛑 *Resumo de Erros Encontrados:*"
                        echo errorSummary
                    } else {
                        echo "✅ Nenhum erro detalhado encontrado no JSON."
                    }
                }
            }
        }
    }

    post {
        always {
            echo '📦 Pipeline finalizada. Arquivando artefatos...'
            archiveArtifacts artifacts: "${PROJECT_DIR}/cypress/videos/**/*.mp4", allowEmptyArchive: true
            archiveArtifacts artifacts: "${PROJECT_DIR}/cypress/screenshots/**/*.png", allowEmptyArchive: true
            archiveArtifacts artifacts: "${REPORT_JSON}", allowEmptyArchive: true
            archiveArtifacts artifacts: "${REPORT_HTML}", allowEmptyArchive: true
        }

        failure {
            echo '⚠️ A execução falhou. Veja os artefatos ou logs acima para detalhes.'
        }

        success {
            echo '✅ Todos os testes passaram com sucesso!'
        }
    }
}

