pipeline {
    agent any

    // Nhớ giữ nguyên đoạn gọi Node.js này nhé
    tools {
        nodejs 'Node20'
    }

    stages {
        stage('Checkout Source') {
            steps {
                git branch: 'main', url: 'https://github.com/DaiNghia800/fastkart-cicd.git'
            }
        }
        
        // Tách bước cài thư viện ra riêng cho sạch sẽ
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // --- BẮT ĐẦU TÁCH LUỒNG CHẠY SONG SONG ---
        stage('Parallel Quality Checks') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'npm test'
                        echo 'Unit tests passed! ✅'
                    }
                }
                
                stage('Security Scan (Giả lập)') {
                    steps {
                        echo 'Đang quét lỗ hổng bảo mật...'
                        sh 'sleep 3' // Bắt máy ngủ 3 giây để giả lập thời gian quét
                        echo 'Không phát hiện mã độc! ✅'
                    }
                }
            }
        }
    }

    // --- KHỐI HẬU KỲ: BÁO CÁO KẾT QUẢ ---
    post {
        always {
            echo "Đang dọn dẹp không gian làm việc..."
        }
        success {
            echo "🎉 CHÚC MỪNG! Lần Build số ${env.BUILD_NUMBER} thành công rực rỡ! Nghĩa quá đỉnh!"
        }
        failure {
            echo "❌ TOANG RỒI NGHĨA ƠI! Lần Build số ${env.BUILD_NUMBER} thất bại. Vào fix gấp!"
        }
    }
}
