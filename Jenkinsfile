// this file needed when you using Jenkins in your development process for CI/CD


pipeline{
    agent any
     tools {
        nodejs "node-"
        git "git-"
        }
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }
        // stage("Test"){
        //     steps{
        //         sh 'npm install'
        //         sh 'npm test'
        //     }
        // }
        stage("install dependencies"){
            steps{
                sh 'npm install'
            }
        }
        stage("Build"){
            steps{
                sh 'npm run build'
            }
        }
        stage("Build Image"){
            steps{
                sh 'docker build -t digital-archiving-frontend:${BUILD_NUMBER} .'
            }
        }
        stage("Docker Push to Nexus"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'nexus', passwordVariable: 'PSW', usernameVariable: 'USER')]){
                    sh 'echo ${PSW} | docker login -u ${USER} --password-stdin 100.102.123.78:8085'
                    sh 'docker push digital-archiving-frontend:${BUILD_NUMBER}'
                    sh 'docker logout'
                }
            }
        }
        stage("Docker Pull & Run Image"){
            steps{
                script {
                    sshagent(['ssh-staging']) {
                            sh "ssh ubuntu@100.102.123.78"
                            sh "docker pull digital-archiving-frontend:${BUILD_NUMBER}"
                            sh "docker run -d --name digital-archiving -p 5000:3000 --restart=always digital-archiving-frontend:${BUILD_NUMBER}"
                    }
            }
            }
        }
    }
}
