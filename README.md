# 🚀 DevOps CI/CD Project with GitHub Actions, Docker & EC2 Deployment

This project demonstrates a complete DevOps pipeline using **GitHub Actions** for continuous integration and deployment. It includes:

- Source code checkout from GitHub
- Docker login & setup
- Docker Buildx configuration
- Image build & push to Docker Hub
- EC2 connection & conditional Docker installation
- Pulling & running the Docker container on EC2

---

## 🛠️ Tech Stack

- GitHub Actions
- Docker & DockerHub
- Docker Buildx
- AWS EC2 (Amazon Linux 2 / Ubuntu)
- Ansible (optional)
- Bash scripting (for conditional installs)

---

## 🔁 CI/CD Workflow Overview

1. **Trigger**: On push to `main` or pull request
2. **CI Phase**:
   - Checkout code from GitHub
   - Login to DockerHub
   - Set up Docker Buildx
   - Build Docker image
   - Push image to DockerHub
3. **CD Phase**:
   - SSH into AWS EC2 instance
   - Check if Docker is installed
   - If not installed, install Docker
   - Pull the image from DockerHub
   - Run the container

---

## 🧱 Project Structure

```bash
.
├── .github
│   └── workflows
│       └── main.yml         # GitHub Actions workflow file
├── .dockerignore                
├── .gitignore           
├── Dockerfile 
├── index.js                 # Your application code
├── package.json
└── README.md          
