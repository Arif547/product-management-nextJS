# Next.js Product Dashboard

A simple product management dashboard built with **Next.js 14**, **Tailwind CSS**, and **NextAuth**.  
This project allows you to **add, view, and manage products** with authentication.

---

## 🚀 Features
- User authentication with NextAuth
- Add new products (name, description, price, image)
- View product details
- Protected routes (only logged-in users can access dashboard)
- Responsive design with Tailwind CSS
- API routes for product management

---

## 📂 Project Structure

```
app/
├── api/
│   └── products/   # Product API routes
├── dashboard/      # Admin dashboard pages
├── products/       # Product detail pages
├── components/     # Reusable UI components
└── layout.js       # Root layout
```


---

## 🛠️ Tech Stack
- **Next.js 14 (App Router)**
- **Tailwind CSS**
- **NextAuth.js**
- **Lucide Icons**
- **React Hot Toast**

---

## ⚡ Getting Started

### 1. Clone the Repository
bash
git clone https://github.com/Arif547/product-management-nextJS.git

cd your-repo-name


### 2. Install Dependencies

bash
npm install


### 3. Setup Environment Variables

Create a `.env.local` file in the root directory:

env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000


(Add DB connection or other keys if needed.)

### 4. Run the Development Server

bash
npm run dev


Now open [http://localhost:3000](http://localhost:3000) 🎉



---

## 🤝 Contributing

Feel free to fork this repo and submit pull requests. Any improvements are welcome!

---

## 📜 License

This project is licensed under the **MIT License**.



Would you like me to also add a **demo section with images (screenshots)** so it looks better on GitHub?

