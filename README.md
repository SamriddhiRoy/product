# 🛍️ Product Catalog App

This is a modern, responsive product catalog web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It fetches products from the DummyJSON API and includes search and product detail views.

---

## 🔧 Features

- 🔍 **Live product search** from API
- 🖼️ Optimized product images using `next/image`
- 🛒 Add-to-cart (dynamic import)
- 📱 Fully responsive UI with Tailwind CSS
- 📦 Uses DummyJSON public API

---

## 🖼️ Demo

https://product-henna-five.vercel.app/

---

## 📁 Project Structure
product/
├── app/
│ ├── page.tsx # Home with search
│ └── products/[id]/page.tsx # Product detail page
├── components/ # Reusable components
├── public/ # Static files
├── styles/ # Global styles (optional)
├── .gitignore
├── README.md
└── next.config.js


---

## 🔗 API Used

- [DummyJSON Products API](https://dummyjson.com/docs/products)

---

## ✅ To Run Locally

1. Install dependencies  
   `npm install`

2. Run the development server  
   `npm run dev`

3. Open in browser  
   Visit `http://localhost:3000`

---

## ⚙️ Tech Stack

- **Next.js 14**
- **React 18**
- **TypeScript**
- **Tailwind CSS**

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).



