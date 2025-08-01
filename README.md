# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 🎬 MoviePulse – End-to-End Deployment

**MoviePulse** is a React-based movie discovery app deployed on AWS using a complete DevOps pipeline. This project showcases a full workflow from infrastructure provisioning to frontend deployment.

### 🧱 Stack Breakdown

| Layer          | Tool             | Description                                   |
| -------------- | ---------------- | --------------------------------------------- |
| Infrastructure | **Terraform**    | Provisioned VPC, Subnet, Security Groups, EC2 |
| Configuration  | **Ansible**      | Automated app deployment and Nginx setup      |
| Web Server     | **Nginx**        | Served built static React files               |
| Frontend       | **React + Vite** | Built and deployed with `vite build`          |
| Cloud Provider | **AWS EC2**      | Hosted the production-ready application       |

---

## ⚙️ How I Built & Deployed It

### 🔧 Infrastructure (Terraform)
- Created a VPC with a public subnet
- Attached an Internet Gateway and route table
- Configured a Security Group allowing inbound ports `22`, `80`, and `8080`
- Launched an EC2 instance with Ubuntu and key pair

### 📦 Frontend Build (React + Vite)
npm install
npm run build

