# 🎓 Student Management System

A full-stack Student Management application built with **Next.js** and **JSON Server** (as a lightweight backend/ORM). It supports complete CRUD operations — Add, View, Update, and Delete student records.

## 🚀 Features

- ➕ Add new student (Name, Roll No, Class, Email, etc.)
- 📋 View list of all students
- ✏️ Update existing student details
- 🗑️ Delete student records
- 🔄 JSON Server auto-watches `db.json` for changes
- ⚡ Fast, modern UI with Next.js (Turbopack)

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16, React, Tailwind CSS |
| Backend / DB | JSON Server (REST API over `db.json`) |
| Language | JavaScript |

## 📂 Project Structure
A full-stack Student Management application built with **Next.js** and **JSON Server** (as a lightweight backend/ORM). It supports complete CRUD operations — Add, View, Update, and Delete student records.

## 🚀 Features

- ➕ Add new student (Name, Roll No, Class, Email, etc.)
- 📋 View list of all students
- ✏️ Update existing student details
- 🗑️ Delete student records
- 🔄 JSON Server auto-watches `db.json` for changes
- ⚡ Fast, modern UI with Next.js (Turbopack)

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16, React, Tailwind CSS |
| Backend / DB | JSON Server (REST API over `db.json`) |
| Language | JavaScript |

## 📂 Project Structure
Student-Management-System/
│
├── app/ # Next.js App Router pages
│ ├── page.js # Home / student list page
│ ├── add/ # Add student page
│ ├── edit/[id]/ # Edit student page
│ └── layout.js # Root layout
│
├── components/ # Reusable React components
│ └── StudentForm.js # Add/Edit form component
│
├── public/ # Static assets
│
├── db.json # JSON Server database file
├── package.json # Project dependencies & scripts
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── README.md

## ⚙️ Installation & Setup

### 1. Clone the repository
git clone https://github.com/Zaid2694/Student-Management-System.git
cd Student-Management-System


2.  Install dependencies
   npm install
3. Start JSON Server (backend)
   npx json-server --watch db.json --port 3005
or
   npx json-server --watch db.json --port 3001
4. Start Next.js (frontend)
   Open a second terminal:
npm run dev
🔌 API Endpoints (JSON Server)
Method	Endpoint	Description
GET	/students	Get all students
GET	/students/:id	Get single student
POST	/students	Add new student
PUT	/students/:id	Update student
DELETE	/students/:id	Delete student

Contributing
Contributions, issues, and feature requests are welcome!
📄 License
This project is open source and available under the MIT License.

👨‍💻 Author
Zaid2694

GitHub: @Zaid2694






