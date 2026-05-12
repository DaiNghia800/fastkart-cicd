const http = require('http');

const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Chúc mừng Nghĩa! Capstone K8s + ArgoCD đã deploy thành công mỹ mãn! 🚀\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server đang chạy tại cổng ${port}/`);
});