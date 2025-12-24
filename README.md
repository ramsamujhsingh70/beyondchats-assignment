🧠 Project Overview

1. The system performs the following:
2. Scrapes articles from the BeyondChats blogs section.
3. Stores scraped articles in a MySQL database.
4. Provides CRUD APIs using Laravel.
5. Processes articles asynchronously using queues and a Node.js LLM service.
6. Displays articles in a React frontend with pagination.
7. Maintains secure environment configuration using .env files (hidden from GitHub).

🛠 Tech Stack
 
 Backend: Laravel (PHP)
 
 Database: MySQL
 
 Queue: Laravel Queue (database driver)
 
 Scraper & LLM Service: Node.js, Axios, Cheerio, OpenAI API
 
 Frontend: React.js
 
 Version Control: Git & GitHub
  
beyondchats-assignment/
│
├── backend/        # Laravel API + Queue Jobs
├── llm-node/       # Node.js Scraper + LLM Service
├── frontend/       # React Frontend
└── README.md

🚀 Phase 1: Scraping & Backend APIs
 Description
   1. Scraped articles from BeyondChats blogs
   👉 https://beyondchats.com/blogs/
   2. Collected the oldest available articles (best effort due to dynamic content).
   3. Stored articles in a MySQL database.
   4. Created CRUD APIs using Laravel.
Implemented APIs
  1. GET /api/articles
  2. POST /api/articles
  3. PUT /api/articles/{id}
  4. DELETE /api/articles/{id}

📸 Phase 1 Screenshots
1. Source Website
   
  <img width="1889" height="837" alt="Screenshot 2025-12-24 222920" src="https://github.com/user-attachments/assets/db984b90-678d-4b38-b7f5-be0bd9fd5b10" />

2. Node Scraper Output
   
  <img width="983" height="420" alt="Screenshot 2025-12-24 223141" src="https://github.com/user-attachments/assets/dbb59ad2-c44c-4070-a365-20e9b371a40b" /> 

3. Database Articles

  <img width="1897" height="860" alt="Screenshot 2025-12-24 223318" src="https://github.com/user-attachments/assets/4def3cb4-2188-4fdf-8519-cfbdcf1037bd" />

4.Laravel API Response
  
  <img width="1754" height="948" alt="Screenshot 2025-12-24 223428" src="https://github.com/user-attachments/assets/3b82abfb-899e-40db-b98e-506ed79ffcb1" />

⚙️ Phase 2: Queue & LLM Processing
 Description
 1. Implemented Laravel queue jobs to process articles asynchronously.
 2. Node.js service performs:
 3. Article summarization
 4. Sentiment analysis
 5. OpenAI API integration with graceful fallback (handles quota limits safely).

Benefits
 Non-blocking API requests
 Scalable architecture
 Clear separation of concerns

📸 Phase 2 Screenshots
 1. Queue Job Dispatch
   
 <img width="1454" height="322" alt="Screenshot 2025-12-24 223810" src="https://github.com/user-attachments/assets/2936283e-1d4f-4e6e-baa1-b9d6f2957dda" />
  
2. Queue Worker Running

<img width="769" height="96" alt="Screenshot 2025-12-24 223903" src="https://github.com/user-attachments/assets/3e630efa-a493-4578-9519-8174cf59b508" />

3. Node LLM Processing

<img width="594" height="253" alt="Screenshot 2025-12-24 224020" src="https://github.com/user-attachments/assets/572727fe-6e0e-438a-be4a-907e7e0a1291" />
 
 🎨 Phase 3: Frontend (React)
  Description

  1. React frontend fetches articles from Laravel API.
  2. Displays:
    Title
    Summary
    Sentiment
    Source
  3. Pagination support.
  4. Loading and empty states handled.

📸Phase 3 Screenshots
1. Frontend UI
  
 <img width="1226" height="678" alt="Screenshot 2025-12-24 224125" src="https://github.com/user-attachments/assets/126a9919-7c29-4bcc-85f5-f4062e1896e5" />

2. Pagination
  
 <img width="407" height="108" alt="Screenshot 2025-12-24 224132" src="https://github.com/user-attachments/assets/3fa9e1f7-ad78-4020-8af2-d7af82859fa1" />

🔐 Environment Configuration & Security
 1. .env files are NOT committed to GitHub.
 2. .env.example files are provided for setup.
 3. Sensitive data (DB credentials, API keys) remain secure.

📸 Phase 4: GitHub Repository
 1.  Clean Repository Structure

<img width="920" height="605" alt="Screenshot 2025-12-24 224352" src="https://github.com/user-attachments/assets/bfeaf109-2622-41c6-875e-ff5347e3cefb" />


▶️ How to Run the Project (Local)

1.Backend

cd backend
 
composer install
        
php artisan migrate
        
php artisan serve
        
php artisan queue:work


2.Node LLM Service

cd llm-node

npm install

npm start


3.Frontend

cd frontend

npm install

npm start


📌 Notes & Limitations
  
  1.BeyondChats blog uses dynamic rendering; scraping is best-effort using static HTML.
  
  2.OpenAI API may hit quota limits; fallback logic ensures stability.

🏁 Conclusion

  
  This project demonstrates:
  
  Full-stack development skills
  
  Real-world scraping challenges
  
  Asynchronous system design
  
  Clean architecture and secure practices

🧩 Architecture & Data Flow


BeyondChats Blog
     
         ↓

Node.js Scraper (Cheerio)
   
         ↓

 MySQL Database
  
         ↓

Laravel REST APIs
   
         ↓

Queue Jobs
  
         ↓

Node LLM Service (Summary + Sentiment)
   
         ↓

React Frontend (Live)


<img width="353" height="612" alt="image" src="https://github.com/user-attachments/assets/75a6aab7-f9f6-40a6-a551-981914786c33" />



🌐 Live Frontend Demo

 The React frontend for this project has been deployed on Vercel:

 👉 https://beyondchats-assignment-l4xv.vercel.app/

This live demo displays:
 
 Original scraped articles from BeyondChats
 
 Updated summaries and sentiment analysis
 
 Pagination for browsing articles

Note: Backend (Laravel API) and Node LLM service are currently running locally.
