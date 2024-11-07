# Expo Mobile Application
Mobile frontend with Clerk authentication integration.

## 🚀 Getting Started
1. Navigate to the Expo application directory:
```bash
cd expo-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory and add your configuration:
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
```

4. Start the Expo development server:
```bash
npx expo start
```

## 📱 Features
- User authentication (Sign up/Sign in)
- Protected API calls to Next.js backend
- Profile data display

## 📁 Project Structure
```
expo-app/
├── app/
│   ├── (auth)/
│   │   ├── sign-in.tsx
│   │   └── sign-up.tsx
│   └── (home)/
│       └── index.tsx
├── .env
└── package.json
```

## 🔌 API Integration
The app connects to the Next.js backend using fetch:
```typescript
const response = await fetch(`${API_URL}/api/me`, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
```
