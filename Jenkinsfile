pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.60.0-noble'
      args '--ipc=host'
    }
  }

  options {
    timeout(time: 20, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '10'))
    timestamps()
  }

  environment {
    ENV = 'qa'
  }

  stages {
    stage('Preparar entorno') {
      steps {
        script {
          // Si .env.qa no viene en el repo, se toma desde la credencial "ENV_QA" (Secret file)
          if (!fileExists(".env.${env.ENV}")) {
            withCredentials([file(credentialsId: "ENV_${env.ENV.toUpperCase()}", variable: 'ENV_FILE')]) {
              sh 'cp "$ENV_FILE" ".env.$ENV"'
            }
          }
        }
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test:bdd'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'allure-results/**, reports/**, screenshot/**', allowEmptyArchive: true
      publishHTML(target: [
        reportDir: 'allure-report',
        reportFiles: 'index.html',
        reportName: 'Allure Report',
        keepAll: true,
        allowMissing: true,
        alwaysLinkToLastBuild: true
      ])
    }
  }
}