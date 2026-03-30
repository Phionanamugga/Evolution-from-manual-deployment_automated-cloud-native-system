# Manual Infrastructure Provisioning Guide

## Overview
This document describes how infrastructure is manually provisioned before automation tools like Terraform are introduced.

---

## 1. Provision a Server (Example: Ubuntu)

- Create a VM (AWS EC2 / local VM)
- Choose Ubuntu 20.04
- Allocate:
  - CPU: 1 vCPU
  - RAM: 1 GB

---

## 2. Connect to Server

```bash
ssh user@your-server-ip