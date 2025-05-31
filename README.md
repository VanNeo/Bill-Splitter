# Bill Splitter

Bill Splitter is a mobile app built with Expo and React Native that helps users split bills. The app features camera integration for scanning receipts.

## Project Structure

```
bill-splitter/
  app/
    (tabs)/
      _layout.tsx      # Tab navigation layout
      index.tsx        # Home screen
      explore.tsx      # Explore screen
      scan.tsx         # Scan (camera) screen
    components/        # Reusable UI components
    constants/         # App-wide constants (e.g., Colors)
    hooks/             # Custom React hooks
  assets/              # Fonts and images
  package.json         # Project dependencies
  tsconfig.json        # TypeScript configuration
backend/
  app.js               # Express server
  prisma/              # Prisma schema
```

## Getting Started

### Prerequisites
- Node.js Version 22
- Python Version 3.10
- Expo CLI (`npm install -g expo-cli`)

### Running the App
1. Install dependencies:
   ```sh
   cd bill-splitter
   npm install
   ```
2. Start the Expo development server:
   ```sh
   npx expo start
   ```
3. Open the app on your device using the Expo Go app or an emulator.

### Backend (Optional)
1. Install backend dependencies:
   ```sh
   cd ../backend
   npm install
   ```
2. Add PORT and DATABASE_URL to .env.
3. Set up the database with Prisma:
   ```sh
   npx prisma init
   npx prisma db pull
   npx prisma generate
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

## Notes
- Camera permissions are required for the Scan feature.