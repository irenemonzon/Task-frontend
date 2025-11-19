# UpTask Frontend - Project Management Dashboard

🚀 **MERN Stack Project** - MongoDB | Express | React | Node.js

A modern, responsive project management dashboard built with **React**, **TypeScript**, **Vite**, and **TailwindCSS**, powered by **React Query** for efficient data management. This is the frontend application for a full-stack MERN project.

## 📋 Project Overview

This is the frontend application for UpTask, a comprehensive project management system that provides an intuitive interface for teams to collaborate on projects and manage tasks efficiently. The application offers a seamless user experience with:

- **Project Dashboard**: Visual overview of all projects
- **Task Management**: Drag-and-drop task organization
- **Team Collaboration**: Invite and manage team members
- **Real-time Updates**: Optimistic UI updates with React Query
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful interface built with TailwindCSS and HeadlessUI components

## 🎯 Objective

The main objective of this frontend application is to provide an intuitive and efficient user interface that enables teams to:

1. **Visualize Projects**: Get a clear overview of all active projects and their progress
2. **Manage Tasks Effectively**: Create, organize, and track tasks with an easy-to-use interface
3. **Collaborate Seamlessly**: Add team members to projects and work together in real-time
4. **Stay Organized**: Move tasks through different stages (pending, in progress, completed, etc.)
5. **Access Anywhere**: Responsive design ensures productivity on any device

## 🚀 Real Impact

This dashboard makes a real difference by:

- **Increasing Productivity**: Intuitive drag-and-drop interface reduces time spent on task management
- **Improving Communication**: Team members can easily see project status and task assignments
- **Reducing Confusion**: Clear visual organization helps teams stay aligned
- **Enabling Remote Work**: Cloud-based solution accessible from anywhere
- **Data Consistency**: React Query caching ensures fast loading and reduced server requests
- **Better User Experience**: Smooth animations and instant feedback improve user satisfaction

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with @tailwindcss/forms
- **State Management**: React Query (@tanstack/react-query)
- **Routing**: React Router DOM v6
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **HTTP Client**: Axios
- **UI Components**: 
  - HeadlessUI (Dialogs, Menus, Transitions)
  - Heroicons (Icons)
  - Chakra UI Pin Input
- **Drag & Drop**: @dnd-kit/core
- **Notifications**: React Toastify
- **Dev Tools**: React Query Devtools

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── layouts/         # Layout components (AppLayout, AuthLayout)
├── lib/             # Configuration files (axios, react-query)
├── locales/         # Internationalization (i18n)
├── services/        # API service functions
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── views/           # Page components
```

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running (see server_task_mongoDB README)

### Steps

1. **Clone the repository**

```bash
git clone git@github.com:irenemonzon/Task-frontend.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:4000/api
```

For production deployment on Vercel, use:

```env
VITE_API_URL=https://your-backend-api-url.com/api
```

4. **Start the development server**

```bash
npm run dev
```

The application will be running at `http://localhost:5173`

To connecting the backend go  `https://github.com/irenemonzon/server_task_mongoDB `


## ✨ Key Features

### 1. **Authentication**
- User registration with email verification
- Secure login system
- Password recovery flow
- Account confirmation with 6-digit codes

### 2. **Project Management**
- ✅ **Create Projects**: Add new projects with name, description, and client information
- ✅ **Edit Projects**: Update project details at any time
- ✅ **Delete Projects**: Remove projects with confirmation dialogs
- ✅ **View All Projects**: Dashboard with all projects you own or collaborate on

### 3. **Task Management**
- ✅ **Create Tasks**: Add tasks with name, description, and initial status
- ✅ **Edit Tasks**: Modify task details inline
- ✅ **Delete Tasks**: Remove tasks with confirmation
- ✅ **Move Tasks**: Drag and drop tasks between status columns:
  - 📋 Pending
  - ⏸️ On Hold
  - 🔄 In Progress
  - 👀 Under Review
  - ✅ Completed

### 4. **Team Collaboration**
- ✅ **Add Team Members**: Invite users to collaborate on projects
- ✅ **View Team**: See all members working on a project
- ✅ **Remove Members**: Manage team composition

### 5. **User Experience**
- Responsive design for all screen sizes
- Loading states and skeleton screens
- Toast notifications for actions
- Optimistic UI updates
- Error handling with friendly messages
- Smooth animations and transitions

## 🌐 Live Demo

- **Live URL**: https://task-frontend-seven-iota.vercel.app

### Test Account Credentials

You can test the application with the following demo account:

- **Email**: `irene@gmail.com`
- **Password**: `123456789`

### What You Can Test

1. **Login**: Use the credentials above to access the dashboard
2. **Create a Project**: Click "New Project" and fill in the details
3. **Add Tasks**: Within a project, create tasks with different priorities
4. **Move Tasks**: Drag and drop tasks between status columns (Pending → In Progress → Completed)
5. **Edit Tasks**: Click on any task to modify its details
6. **Delete Tasks**: Remove tasks you no longer need
7. **Manage Team**: Add team members by email or remove existing members
8. **Edit Project**: Update project information
9. **Delete Project**: Remove entire projects

## 🔌 API Integration

The frontend communicates with the backend API using Axios with:

- Automatic token attachment for authenticated requests
- Request/response interceptors for error handling
- Centralized API configuration
- React Query for data fetching, caching, and synchronization


## 📧 Email Integration

This project works with the backend email system that uses **Mailtrap Sandbox** for development:

- Account confirmation emails
- Password reset emails
- Team invitation notifications

**Note**: In development, emails are caught by Mailtrap and won't reach real inboxes. For production, configure a real SMTP service in the backend.


## 🔗 Related Projects

- **Backend API**: See `server_task_mongoDB` folder for the Node.js/Express backend

## 📝 Notes

- This is a full-stack project - both frontend and backend are required for full functionality
- The frontend is deployed on Vercel for optimal React app hosting
- TailwindCSS makes the UI consistent and maintainable
