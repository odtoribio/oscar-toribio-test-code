# User Intelligence Platform
User posts platform, this app allows fetch jsonplaceholder users, add users to favorites in local storage and see their posts and comments

If you wanto to see the the app live [visit this url](https://oscar-toribio-test-code-bm0acutbk-oscar-toribios-projects.vercel.app/)
## Tech Stack
- **Frontend:** React 19+
- **Styles:** Flexbox
- **Charts:** MUI x Charts
- **Language:** Typescript
- **Routing:** React Router v7
- **Package manager:** pnpm

## Setup
After downloading the code follow these steps.
1. Prerequisites
   - Node.js 20.19+
  
2. Install pnpm (if it is not installed) in your environment: [visit pnpm site](https://pnpm.io/installation)

### Installation:
```bash
pnpm install
```

### For runing the project:
```bash
pnpm vite
```
## Architecture
- **Routing:** Centralized route configuration in order to avoid mistakes when using rotes path.
- **Persistence:** LocalStorage was integrated to achieve the goal of persist User favorites.
- **Components design:** Modular components were integrated in order to isolate and reuse code in order to be more organized and scalable in the future.
- **Literal Typing:** Was implemented typescript to make the the data flow and props more secure and props suggestion, also provides props suggestions and types error in develop time.

### Project structure
```text
src/
 ├── hooks/                       # Hooks folder
 │    └── network/                # Folder to group hooks with the same proposes
 │         └── useGetPosts.ts     # Custom hook
 ├── routes/                      # Grouped routes folder
 │    └── app-routes.ts           # Centralized routes path
 │    └── AppRouterProvider.tsx   # Routes provider
 │    └── Router.tsx              # All routes
 │    └── Layout.tsx              # App main layout
 ├── pages/                       # Application pages
 │    └── home/                   # Grouped page folder
 │         └── HomePage.tsx       # Page component
 │         └── Home.css           # Page styles
 │         └── index.ts           # Gateway file
 └── components/                  # Reusable UI (ex.: UserItem, PostItem)
      └── user-item/              # Folder to group component
           └── UserItem.tsx       # Componet file
           └── User.css           # Component styles
           └── index.ts           # Gateway file
```
## Future improvements

- Add Unit Tests.
- Migrate storage to a Backend API


