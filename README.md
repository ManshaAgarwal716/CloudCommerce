# CloudCommerce

A cloud-native e-commerce application built to learn and demonstrate modern DevOps, Cloud, and Containerization practices.

This project focuses on building a production-style deployment pipeline using Docker, GitHub Actions, Kubernetes, Helm, Argo CD, Terraform, and Ansible.
Testing GitHub Actions
---

## Features

- Product Management (CRUD)
- FastAPI Backend
- Next.js Frontend
- PostgreSQL Database
- Docker & Docker Compose
- CI with GitHub Actions (In Progress)
- Kubernetes (Planned)
- GitOps with Argo CD (Planned)
- Monitoring with Prometheus & Grafana (Planned)

---

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Axios

### Backend

- FastAPI
- SQLAlchemy
- Pydantic
- PostgreSQL

### DevOps

- Docker
- Docker Compose
- GitHub Actions
- Kubernetes *(Planned)*
- Helm *(Planned)*
- Argo CD *(Planned)*
- Terraform *(Planned)*
- Ansible *(Planned)*

---

## Project Structure

```text
cloudcommerce/
│
├── apps/
│   ├── frontend/
│   └── product-service/
│
├── docker-compose.yml
│
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/ManshaAgarwal716/CloudCommerce.git

cd CloudCommerce
```

### Run with Docker

```bash
docker compose up --build
```

### Application URLs

| Service | URL |
|---------|------|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:8000 |
| API Documentation | http://localhost:8000/docs |

---

## Roadmap

- [x] Product CRUD
- [x] FastAPI Backend
- [x] Next.js Frontend
- [x] PostgreSQL
- [x] Docker
- [x] Docker Compose
- [ ] GitHub Actions CI
- [ ] Docker Image Registry
- [ ] Kubernetes
- [ ] Helm
- [ ] Argo CD
- [ ] Prometheus
- [ ] Grafana
- [ ] Terraform
- [ ] Ansible

---

## Learning Goals

This repository is being developed to gain practical experience with:

- Containerization
- CI/CD Pipelines
- Infrastructure as Code
- GitOps
- Kubernetes
- Cloud-native deployments
- Monitoring and Observability

---

## Future Enhancements

- User Authentication
- Order Management
- Redis Caching
- API Gateway
- Load Balancing
- Horizontal Scaling
- Security Scanning
- Production Deployment

---

## License

This project is intended for educational and portfolio purposes.
