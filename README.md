# SCIC-12 Assignment 9 – Job Task

## Project Description
This project is a **Next.js 15/16 application** that supports both public and protected pages.  
- **Public pages:** Landing page, products list, products details  
- **Protected pages:** Only logged-in users can add new products  

**Authentication:**  
- Google login or credentials-based login using **NextAuth.js**  
- Sessions and cookies are used to protect routes  

**Item Data:**  
- Fetched from an **Express.js API** or JSON file  
- Each item displays name, description, price, and image  

---

## Features Implemented

1. **Landing Page (Home Page)**  
   - Includes 7 main sections  
   - Navbar and Footer included  
   - Publicly accessible (no login required)  

2. **Authentication (Login System)**  
   - NextAuth.js for Google login or credential login  
   - Session and cookies used  
   - Protected pages redirect unauthorized users  

3. **products List Page**  
   - Publicly accessible  
   - Fetches items from Express.js API / JSON  
   - Each item card shows name, description, price, and image  

4. **products Details Page**  
   - Publicly accessible  
   - Shows full details of a single item  


---

## Technologies Used

- **Next.js 15/16 (App Router)**  
- **NextAuth.js** – authentication  
- **Express.js API / JSON** – item data management  
- **Tailwind CSS** – styling  
- **React.js** – UI development  

---

## Setup & Installation

1. Clone the project:
```bash
git clone https://github.com/chinaakther05/nextjs-job-task

