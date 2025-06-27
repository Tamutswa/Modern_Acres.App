# 🏡 Modern Acres

> **Prototype Release**

🚧 **Modern Acres is currently in its prototype phase.** This version includes core UI elements and essential screens, with more advanced functionality and integrations planned soon.

---

## 📱 Overview

**Modern Acres** is a modern, mobile-first real estate web application built with **Next.js**, **Tailwind CSS**, and **TypeScript**. It allows users to browse, view, and (in the future) manage property listings in a clean and interactive interface.

---

## ✨ Current Features

### 🔍 View Property Listings
- Users can view a curated list of real estate properties.
- Each listing includes title, price, location, images, and key specs.

### 🏘️ Property Detail Page
- A detailed page for each property at `/property/[id]`.
- Displays photos, descriptions, seller info, and features.
- Simulates a real estate detail experience with tabs for:
  - **Details**
  - **Features**
  - **Verification**

### ➕ Add New Listings (UI Only)
- `/add-listing` includes a form interface for submitting property details.
- No backend integration yet — submissions are not stored.

---

## 🗂️ Folder Structure

modern-acres/
├── app/ # Pages and routing (Next.js App Router)
│ ├── page.tsx # Home or main listing page
│ ├── add-listing/ # Form for adding properties
│ └── property/[id]/ # Property detail page
├── components/ # Reusable and UI components
│ └── ui/ # Component library (e.g., buttons, cards)
├── public/ # Static files
├── styles/ # Global and Tailwind styles
├── package.json # Project metadata and scripts
├── tailwind.config.ts # Tailwind setup
└── tsconfig.json # TypeScript config


---

## 🛠️ Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```
Visit http://localhost:3000 to view the app locally.

🚧 Upcoming Features & Improvements

-🔐 Authentication & user accounts
-🧠 Backend integration with database for listings
-📱 Improved mobile responsiveness
-📊 Admin dashboard for listing management
-🧾 Listing verification uploads
-🌐 Location-based search and filters
-📸 Image upload and media gallery

🤝 Contributing
Interested in helping improve Modern Acres?
Feel free to fork the repo, submit a pull request, or open an issue with suggestions or bugs.
