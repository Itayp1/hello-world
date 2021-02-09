pipeline {
    agent any
      tools {nodejs 'NodeJs' }

    stages {
        stage('Build') {
            steps {
                sh 'rm -rf hello-world'
                sh 'git clone https://github.com/Itayp1/hello-world.git'
                sh 'cd hello-world &&  npm i'
            }
        }
        stage('Test') {
            steps {
                echo 'Test 223'
            }
        }
        stage('Deploy') {
            steps {
                  sh 'cd hello-world && ls'
                  sh 'ls'

                sh 'cd hello-world && forever start hello-world.js'
            }
        }
    }
}