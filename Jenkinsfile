pipeline {
    agent any
    tools { nodejs 'NodeJs' }

    stages {
        stage('Build') {
            steps {
                sh 'rm -rf hello-world'
                sh 'git clone https://github.com/Itayp1/hello-world.git'

                sh 'cd hello-world && sudo docker build -t helloworld .'


                script {
                    try {
                        sh 'sudo docker rm --force  helloworld'
                                 } finally {
                        sh 'sudo docker run -p 3000:3000 --name helloworld  helloworld'
                    }

                }

            }
        }
        stage('Test') {
            steps {
                echo 'Test 2231'
            }
        }
        stage('Deploy') {
            steps {
                echo 'done'

            }
        }
    }
}
