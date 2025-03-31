# AI Preparation - Mock Interview Practice

Welcome to **AI Preparation**, a modern and interactive platform designed to help you prepare for technical mock interviews with the assistance of AI technologies. This platform utilizes AI-powered voice assistants, feedback systems, and personalized coaching to ensure you’re ready for any interview scenario.

---

## 🔋 Features

- **Authentication**: Sign Up and Sign In using email/password authentication, managed by Firebase.
- **Create Interviews**: Effortlessly generate job interview questions with the help of VAPI AI Voice Assistant and Google Gemini.
- **Get Feedback from AI**: Conduct the interview with the AI voice assistant and receive instant feedback based on your conversation.
- **Modern UI/UX**: A sleek, intuitive, and user-friendly interface to ensure a smooth experience throughout your interview process.
- **Interview Page**: Participate in AI-driven interviews with real-time feedback and a detailed interview transcript.
- **Dashboard**: Manage, track, and review all your interviews from one central location with easy navigation.
- **Responsiveness**: Fully responsive design that ensures a seamless experience across all devices, from desktop to mobile.
- **Code Architecture & Reusability**: Built with scalability in mind for future enhancements and ease of maintenance.

---

## 🛠️ Tech Stack

- **Next.js (Latest)**: A modern React framework for building fast and scalable web applications.
- **VAPI AI**: AI-powered voice assistant for interactive mock interviews.
- **ShadCN/UI**: A UI component library to provide a sleek and consistent design.
- **Google Gemini**: Advanced AI capabilities for intelligent feedback and coaching.
- **Zod**: Type-safe validation library for data integrity.
- **Firebase**: Provides user authentication and real-time database services.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly.

---

## ⚙️ Set Up Environment Variables

To get started with the project, you need to configure environment variables for Firebase, VAPI, and Google Gemini. Follow the steps below:

1. Create a new file named `.env.local` in the root directory of your project.

2. Add the following environment variables to the `.env.local` file:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=""
```

3. Replace the placeholder values with your actual Firebase and VAPI credentials.

---

## 🚀 Running the Project

1. Clone this repository to your local machine.
   
   ```bash
   git clone https://github.com/thedarkking01/AI-Interview-Prep.git
   cd interview
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the project.

---

## 📝 Snippets

Here are some important code snippets for reference:

### 1. **globals.css**
This file contains global styles for the project, ensuring consistent design across components.

```css
/* global styles for the app */
```

### 2. **lib/utils.ts**
Utility functions to handle various tasks across the application.

```typescript
// utility functions
```

### 3. **Generate Questions Prompt** (located in `/app/api/vapi/generate/route.tsx`)

```tsx
// API route for generating interview questions
```

### 4. **Generate Feedback Prompt** (located in `lib/actions/general.action.ts`)

```typescript
// Logic for generating interview feedback
```

### 5. **Display Feedback** (located in `app/(root)/interview/[id]/feedback/page.tsx`)

```tsx
// Component for displaying feedback after an interview
```

---

## 🧪 Dummy Interviews

You can try conducting dummy interviews with the AI voice assistant, simulating various technical interview scenarios. Explore different domains and get customized feedback for each session.

---

## 🤝 Contributing

Feel free to fork this repository and create a pull request to contribute improvements or fixes. All contributions are welcome!

---

## 📄 License

This project is licensed under the MIT License - see the [MIT LICENSE](https://github.com/thedarkking01/AI-Interview-Prep/blob/main/LICENSE) file for details.

---