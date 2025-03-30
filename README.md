# 🎯 String Calculator UI (React)

This is the **frontend** for the **String Calculator API**, built using **React**.  
It allows users to enter numbers, send them to the backend API, and display the calculated sum.

---

## 🌟 Features
✅ User-friendly UI  
✅ Sends numbers to the **Sinatra API** (`/calculate`)  
✅ Handles **errors** (invalid input, negative numbers)  
✅ Styled with **pure CSS** (no Tailwind)  
✅ **Deployed on Vercel** for easy access  

---

## 🚀 Setup Instructions (Local Development)

### **1️⃣ Prerequisites**
Ensure you have:
- **Node.js** (>= 16)
- **npm** or **Yarn** installed

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/lareb/string-calculator-ui.git
cd string-calculator-ui
```

### **3️⃣ Install Dependencies**
```
npm install
```
### **4️⃣ Run the Development Server**
```
npm run dev
```
Your app will be available at:
➡️ http://localhost:5173

### **5️⃣ Run Test Case**
```
npm run test
```

## 📡 API Integration
The app communicates with the Sinatra backend hosted on Render.
If running locally, update API_URL in src/App.jsx:
```
const API_URL = "http://localhost:4567/calculate"; // Local Backend
```
For production, use:
```
const API_URL = "https://string-calculator-m3iv.onrender.com/calculate"; // Deployed Backend
```
## 🖥️ Deployment (Vercel)
The app is deployed on Vercel.

Deploying on Vercel
#### **Install Vercel CLI:**
```
npm install -g vercel
```
#### **Deploy:**
```
vercel
```
#### Follow the instructions and get your Live URL (e.g., https://string-calculator-ui-sigma.vercel.app).

## 📜 Project Structure
```
/string-calculator-ui
│── src/
│   ├── App.jsx         # Main component
│   ├── App.css         # Styles
│   ├── index.jsx       # Entry point
│── public/             # Static assets
│── package.json        # Dependencies
│── README.md           # Documentation
```

## 🤝 Contributing
Feel free to submit pull requests or report issues.

## 📝 License
This project is licensed under the MIT License.
