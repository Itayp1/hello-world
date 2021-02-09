pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh "git clone https://github.com/Itayp1/hello-world.git"
                sh "cd hello-world &&  npm i"


            }
        }
        stage('Test') { 
            steps {
                echo "Test 223"
            }
        }
        stage('Deploy') { 
            steps {
                sh "node hello-world/index.js"
            }
        }
    }
}