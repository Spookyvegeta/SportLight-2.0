# SportLight Setup Guide

## Authentication System Fixed! ✅

The authentication system has been updated to properly connect the frontend to the backend API.

## What Was Fixed:

1. **Login Form** - Now sends credentials to backend API and stores JWT token
2. **Signup Forms** - Both player and club signup now create accounts via backend API
3. **Token Storage** - JWT tokens are properly stored in localStorage
4. **API Integration** - All auth requests go to `http://localhost:5000/api/auth`

## Quick Start:

### Option 1: Use MongoDB Atlas (Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Update `backend/.env`:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/sportlight?retryWrites=true&w=majority
   ```

### Option 2: Use Local MongoDB

1. Install MongoDB locally
2. Start MongoDB service
3. The backend is already configured for: `mongodb://localhost:27017/sportlight`

### Option 3: Quick Test (No Database)

For testing the UI without database, you can temporarily modify the backend to skip database connection.

## Running the Application:

Both servers are already running:
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:9002

## Testing Authentication:

1. Go to http://localhost:9002
2. Select Player or Recruiter role
3. Click "Sign Up" tab
4. Fill in the form and create an account
5. Once created, you can sign in with those credentials

## API Endpoints:

- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login with credentials
- `GET /api/player` - Get player profile (requires auth token)
- `GET /api/club` - Get club profile (requires auth token)

## Environment Variables:

### Backend (.env)
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=sportlight_jwt_secret_key_2024_change_this_in_production
NODE_ENV=development
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Next Steps:

1. Set up your MongoDB connection
2. Test signup/login functionality
3. Explore the dashboard and profile features
