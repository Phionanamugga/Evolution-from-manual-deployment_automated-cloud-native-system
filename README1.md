# Evolution from manual deployment_automated cloud-native system
## 📌 Overview
This project demonstrates end to end evolution of application deployment systems  i.e; from manual server provisioning to a fully reproducible, automated, and scalable cloud infrastructure.

It is designed to showcase production-grade DevOps and system design skills,configuration management, including Infrastructure as Code (IaC), service orchestration, and system reliability thinking.

## 🎯 Objective

To simulate how real world systems evolve by answering:
How do we ensure consistency across environments?
How do we design systems that are reproducible, scalable, and fault-tolerant?
How do we move from manual deployments to automation?

## 🧠 Key Concepts Demonstrated
Infrastructure as Code (Terraform)
Configuration Management (Ansible)
Service Management (systemd)
Automated provisioning and deployment
Environment consistency (Dev/Prod parity)
Modular system design
Failure-aware system thinking

## 🏗️ Architecture
This system provisions infrastructure and deploys an application using a layered approach:
Terraform provisions cloud infrastructure
Ansible configures servers and installs dependencies
systemd manages application lifecycle
Node.js application runs as a managed service

## 📂 Project Structure
.
├── architecture/          # System design diagrams
├── terraform/             # Infrastructure provisioning
├── ansible/               # Configuration management
├── systemd/               # Service definitions
├── scripts/               # Automation scripts
├── docs/                  # Supporting documentation
├── app/                   # Application source code
├── README.md

## ⚙️ How It Works
Step 1: Infrastructure Provisioning

Terraform creates the required infrastructure (e.g., compute instances, networking).

cd terraform
terraform init
terraform plan
terraform applyterraform apply

## Step 2: Configuration Management
Ansible configures the provisioned servers:
Installs runtime dependencies
Deploys application code
Sets up services
cd ansible
ansible-playbook -i inventory playbook.yml

## Step 3: Service Orchestration
The application is managed using systemd:
Auto-start on boot
Restart on failure
Centralized logging

# Step 4: Application Deployment
A lightweight Node.js application is deployed and served.