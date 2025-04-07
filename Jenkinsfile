pipeline {
    agent any

    environment {
        // Opcional: define o diretório onde será executado
        PROJECT_DIR = 'cypress-tests'
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
                    sh 'npm install'
                }
            }
        }

        stage('Executar Testes Cypress') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npx cypress run'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizada.'
            archiveArtifacts artifacts: "${PROJECT_DIR}/cypress/videos/**/*.mp4", allowEmptyArchive: true
            archiveArtifacts artifacts: "${PROJECT_DIR}/cypress/screenshots/**/*.png", allowEmptyArchive: true
        }

        failure {
            echo '⚠️ A execução falhou. Verifique os testes com erro.'
        }

        success {
            echo '✅ Todos os testes passaram com sucesso!'
        }
    }
}
