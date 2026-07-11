
pipeline {
    agent any

    environment {
        DOCKER_USERNAME = "urukutlasatish123"
        BACKEND_IMAGE = "urukutlasatish123/dockerdemo:latest"
        FRONTEND_IMAGE = "urukutlasatish123/frontend:latest"
    }

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Repository cloned successfully!'
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('dockerdemo') {
                    sh 'docker build -t $BACKEND_IMAGE .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontends') {
                    sh 'docker build -t $FRONTEND_IMAGE .'
                }
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {
                    sh '''
                    echo $PASSWORD | docker login -u $USERNAME --password-stdin
                    '''
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                sh 'docker push $BACKEND_IMAGE'
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh 'docker push $FRONTEND_IMAGE'
            }
        }
        stage('Deploy') {
    steps {
        bat 'scripts\\deploy.bat'
    }
}
}

    }

    post {
        success {
            echo 'Pipeline Completed Successfully'
        }

        failure {
            echo 'Pipeline Failed'
        }
    }
}