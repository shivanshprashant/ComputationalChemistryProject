# NUCLEUS | Computational Research Suite ⚛️

> **Course:** Introduction to Computational Chemistry (CHY1005)  
> **Semester:** Fall 2025  
> **Group:** G14

![Project Status](https://img.shields.io/badge/Status-Stable-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

## 📄 Abstract
**NUCLEUS** is a web-based computational research suite designed to bridge the gap between theoretical chemical principles and practical simulation. Developed as a companion tool for the **CHY1005** curriculum, this platform integrates a theoretical data archive with real-time interactive tools.

The application features a **Potential Energy Surface (PES) Simulator** based on the Lennard-Jones potential and a **Quantum Calculator** for determining eigenenergies of a particle in a 1-D box.

---

## 🚀 Features

### 1. Interactive Dashboard
A central hub tracking module progress and system status, designed with a professional "Research Lab" UI.

### 2. PES Simulator (Lennard-Jones)
* **Real-time Graphing:** Visualizes Van der Waals forces using `Chart.js`.
* **Dynamic Controls:** Adjust Well Depth ($\epsilon$) and Particle Radius ($\sigma$) to see immediate changes in the potential energy curve.
* **Core Model:** The simulator plots the Lennard-Jones Potential:
  
  $$V(r) = 4\epsilon \left[ \left(\frac{\sigma}{r}\right)^{12} - \left(\frac{\sigma}{r}\right)^{6} \right]$$

### 3. Quantum Calculator
* **Particle in a Box:** Calculates quantized energy levels for an electron in a 1D potential well.
* **Input Parameters:** Quantum Number ($n$) and Box Length ($L$).
* **Core Model:** Solves for the energy eigenvalue ($E_n$):

  $$E_n = \frac{n^2 h^2}{8mL^2}$$

### 4. Theoretical Archive
A comprehensive database covering the 5 core modules of the syllabus:
* Introduction & Computational Methods
* Quantum Mechanics & Schrödinger Equation
* Thermodynamics (Enthalpy, Entropy, Gibbs Energy)
* Potential Energy Surfaces (Force Fields)
* Molecular Dynamics (Verlet Algorithm, PBC)

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (CSS Variables, Flexbox/Grid)
* **Logic:** JavaScript (ES6+)
* **Visualization:** [Chart.js](https://www.chartjs.org/) (for plotting graphs)
* **Mathematics:** [MathJax](https://www.mathjax.org/) (for LaTeX formula rendering)
* **Font:** 'Inter' (Google Fonts)

---

## 👥 Research & Development Team

| Name | Reg. No | Role |
| :--- | :--- | :--- |
| **Shivansh Prashant** | **25BAI10384** | **Developer** |
| **Akanksha Sharma** | **25BAI10372** | **Developer** |
| **Rudra Sunil Solav** | **25BAI10373** | **Theory Analyst** |
| **Sarthak Jena** | **25BAI10247** | **Theory Analyst** |

---

## 💻 How to Run

Since this is a client-side web application, no installation is required.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/nucleus-comp-chem.git](https://github.com/your-username/nucleus-comp-chem.git)
    ```
2.  **Navigate to the folder:**
    ```bash
    cd nucleus-comp-chem
    ```
3.  **Launch:**
    Simply open `index.html` in any modern web browser (Chrome, Edge, Firefox).

---

