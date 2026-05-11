pipeline {
    // Run on any available Jenkins agent
    agent any

    stages {
        // Stage 1: Download code from GitHub
        stage('Checkout Source') {
            steps {
                git branch: 'main', url: 'https://github.com/DaiNghia800/fastkart-cicd.git'
                echo 'Source code downloaded successfully. ✅'
            }
        }
        
        // Stage 2: Install dependencies and run tests
        stage('Run Unit Tests') {
            steps {
                sh 'npm install'
                sh 'npm test'
                echo 'All unit tests passed for Fastkart! ✅'
            }
        }
    }
}
