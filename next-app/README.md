# Next.js Backend Application
Backend API service with Clerk authentication integration.

## 🚀 Getting Started
1. Navigate to the Next.js application directory:
```bash
cd next-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory and add your Clerk credentials:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. Start the development server:
```bash
pnpm run dev
```

## 🛠 API Endpoints

### GET /api/me
Protected endpoint that returns authenticated user data.

**Request Headers:**
```
Authorization: Bearer <clerk-token>
```

**Response:**
```json
{
  "userId": "user_123",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "message": "Authenticated successfully"
}
```

## 📁 Project Structure
```
next-app/
├── app/
│   └── api/
│       └── me/
│           └── route.ts
├── middleware.ts
├── .env.local
└── package.json
```
