# Clerk Cross Platform Template
A full-stack application template for authentication and API integration using Next.js and Expo with Clerk authentication.

## 📁 Project Structure
```
root/
├── next-app/        # Next.js backend application
├── expo-app/        # Expo frontend application
└── README.md        # This file
```

## 🚀 Quick Start
1. Clone the repository
```bash
git clone https://github.com/xleron/clerk-cross-platform-template
cd clerk-cross-platform-template
```

2. Set up both applications by following their respective README files:
- [Next.js Backend Setup](./next-app/README.md)
- [Expo Frontend Setup](./expo-app/README.md)

## 🔑 Authentication Flow
1. Users can sign up/sign in through the Expo mobile app using Clerk authentication
2. The Expo app makes authenticated API calls to the Next.js backend
3. The Next.js backend validates the authentication token and returns protected data

## 🛠 Technology Stack
- **Frontend**: React Native with Expo
- **Backend**: Next.js API Routes
- **Authentication**: Clerk
- **Language**: TypeScript

## 📝 Prerequisites
- Node.js 20.x
- pnpm
- Expo CLI
- Clerk account and API keys

## 🔧 Environment Setup
1. Create a Clerk account at https://clerk.dev
2. Set up a new Clerk application
3. Configure environment variables in both applications
