pipeline{
    agent any
    tools{
        nodejs "node"
    }
    
    stages{
        stage('Start'){
            steps{
                echo 'build has started'
            }
        }
        stage('clone repository from github'){
            steps{
                git url: 'https://github.com/gloriamutie/DevOpsWeek1.git', branch: 'master'
            }
        }
          stage('install dependencies'){
            steps{
               sh '''
               npm install
               '''            

            }
        }
        stage('run tests'){
            steps{
               sh 'npm test'
            }
        }
        stage('end  build'){
            steps{
                sh '''
                echo "end build"
                '''
            }
        }
    }
     post {

        success{
           slackSend channel: '#jenkins-channel',  color: '#c0c0c0', message: "Repo: ${env.JOB_NAME} - BuildNo: ${env.BUILD_NUMBER} - live site: ${env.Live_Site}"
        }
    

}

}