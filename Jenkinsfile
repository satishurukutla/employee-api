pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Repository cloned successfully!'
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('dockerdemo') {
                    sh 'docker build -t urukutlasatish123/dockerdemo:latest .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontends') {
                    sh 'docker build -t urukutlasatish123/frontend:latest .'
                }
            }
        }

    }
}