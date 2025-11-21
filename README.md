
---

# ✅ **Final GitHub README for → Dynamic-User-Cards-UI**

```markdown
# 🧑‍🤝‍🧑 Dynamic User Cards UI  
A clean, modern, and fully dynamic User Card Interface built using **HTML, CSS/SCSS, and JavaScript**.  
The user data is stored in an array and rendered dynamically into beautiful glass-effect profile cards.

---



## 📌 Features
- 🔹 Dynamic user cards generated from JavaScript array  
- 🔹 Glassmorphism UI (blur + shadow effect)  
- 🔹 Fully responsive layout  
- 🔹 Realistic user profile images  
- 🔹 Clean SCSS structure with `.scss` + compiled `.css`  
- 🔹 Beginner-friendly DOM project  

---

## 📂 Project Structure
```

Dynamic-User-Cards-UI/
│── index.html
│── script.js
│── style.css
│── style.scss
│── style.css.map
└── README.md

```

---

## 🖼️ UI Preview  

```

<img width="1858" height="1036" alt="image" src="https://github.com/user-attachments/assets/a45080c1-a1b7-4921-a167-5b90dff9a02c" />


````

If you want, I can make a **custom UI banner** for your README.

---

## 🧠 How It Works  

### ✅ **1. User Data (Array of Objects)**
```js
const users = [
  {
    image: "https://images.pexels.com/photos/7698821/pexels-photo-7698821.jpeg",
    username: "Priya Mehta",
    profession: "UI/UX Designer",
    city: "Pune",
    description: "Creative designer focused on user-centered design."
  },
  ...
];
````

### ✅ **2. Cards Are Generated Dynamically**

```js
var sum = '';
users.forEach(function(elem){
    sum += `
      <div class="card">
        <img src="${elem.image}" />
        <h3>${elem.username}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
      </div>
    `;
});
document.querySelector('main').innerHTML = sum;
```

---

## 🎨 UI Styling (Glassmorphism)

```css
.card {
  width: 280px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(136, 132, 132, 0.6);
  backdrop-filter: blur(5px);
  text-align: center;
  background: transparent;
}
```

Each card includes:

* Round profile image
* Username
* Profession (highlighted color)
* Description

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3 + SCSS**
* **JavaScript (DOM Manipulation)**

---

## ▶️ How to Run

### Clone the repository

```bash
git clone https://github.com/vikaskumar098/Dynamic-User-Cards-UI.git
```

### Open the project folder

```bash
cd Dynamic-User-Cards-UI
```

### Run the project

Simply open **index.html** in your browser.
No server or installation required.

---

## 🤝 Contributing

Feel free to fork this project and improve it.

Ideas to upgrade:

* Add search bar
* Add filters (profession/city)
* Add animations
* Fetch data from API
* Add dark/light mode

---

## 👤 Author

**Vikas Kumar**

* GitHub: [https://github.com/vikaskumar098](https://github.com/vikaskumar098)
* LinkedIn: [https://www.linkedin.com/in/vikas0905](https://www.linkedin.com/in/vikas0905)

---



⭐ If you like this project, consider giving it a **GitHub star!**

```


