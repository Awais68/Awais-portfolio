# 🚀 Quick Start Guide

## Step 1: Environment Setup (5 minutes)

### 1.1 Gmail App Password

```bash
1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification (if not already)
3. Generate app password for "Mail"
4. Copy the 16-character password
```

### 1.2 MongoDB Atlas (Free)

```bash
1. Sign up at: https://www.mongodb.com/cloud/atlas
2. Create a free M0 cluster
3. Create database user (username + password)
4. Whitelist all IPs: 0.0.0.0/0
5. Get connection string: mongodb+srv://...
```

### 1.3 Clerk Authentication (Free)

```bash
1. Sign up at: https://dashboard.clerk.com/
2. Create new application
3. Copy publishable key (starts with pk_)
4. Copy secret key (starts with sk_)
```

## Step 2: Configure .env.local (2 minutes)

Create `.env.local` in project root:

```env
# Email (Gmail)
EMAIL_USER=awaisniaz768@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx

# MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx

# Clerk Routes (keep as is)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/admin
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/admin
```

## Step 3: Install & Seed (3 minutes)

```bash
# Install dependencies
npm install

# Seed initial projects (optional)
npm run seed

# Start development server
npm run dev
```

## Step 4: Access Your Portfolio

```bash
🌐 Portfolio: http://localhost:3000
🔐 Sign Up:   http://localhost:3000/sign-in
⚙️  Admin:     http://localhost:3000/admin
```

## Step 5: Add Your Projects

1. Go to `/sign-in` and create your admin account
2. Navigate to `/admin`
3. Fill out the project form:
   - Title, Description, Tech Stack
   - Image URL (Unsplash or local /images/)
   - Live Demo & GitHub links
   - Choose color gradient

## Common Issues

### ❌ Email not working

```bash
✅ Use App Password, not regular password
✅ Enable 2-Step Verification first
✅ Check EMAIL_USER format: email@gmail.com
```

### ❌ MongoDB connection failed

```bash
✅ Whitelist 0.0.0.0/0 in Network Access
✅ Check username/password in connection string
✅ Ensure database name exists
```

### ❌ Clerk errors

```bash
✅ Verify all CLERK_ env variables are set
✅ Check keys start with pk_ and sk_
✅ Restart dev server after .env changes
```

### ❌ Projects not showing

```bash
✅ Run `npm run seed` to add initial projects
✅ Check MongoDB connection
✅ Open browser console for errors
```

## Deploy to Vercel

```bash
1. Push code to GitHub
2. Import repo in Vercel
3. Add all environment variables
4. Deploy!
```

---

**Need Help?**

- 📖 Full docs: [SETUP.md](./SETUP.md)
- 📧 Email: awaisniaz768@gmail.com
