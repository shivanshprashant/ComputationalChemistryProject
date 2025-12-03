const courseData = {
    1: {
        title: "Intro to Computational Chemistry",
        desc: "Computational chemistry is the branch of chemistry that uses computer simulation to assist in solving chemical problems. It utilizes methods of theoretical chemistry, incorporated into efficient computer programs, to calculate the structures and properties of molecules and solids.",
        formula: "$$ E = E_{electronic} + E_{vibrational} + E_{rotational} $$",
        concepts: [
            "The Science Triangle: A synergy between Theory, Experiment, and Computation.",
            "Ab Initio Methods: 'From the beginning'. Solves the Schrödinger equation without empirical parameters.",
            "Semi-Empirical: Uses approximations and experimental data (e.g., PM3, AM1) to treat larger molecules.",
            "Applications: Designing new drugs (docking), predicting spectra (IR/NMR), and material stress testing."
        ]
    },
    2: {
        title: "Quantum Chemistry",
        desc: "This module explores the wave-particle duality of matter. It establishes that microscopic particles like electrons cannot be described purely as particles but must be treated as waves using probability distributions.",
        formula: "$$ \\hat{H}\\Psi = E\\Psi $$",
        concepts: [
            "Heisenberg Uncertainty Principle: We cannot simultaneously know the exact position and momentum of a particle (𝛥𝑥𝛥𝑝≥ℏ/2).",
            "De Broglie Wavelength: Matter has a wavelength inversely proportional to momentum λ = h / mv.",
            "Born Interpretation: The wavefunction $$\\Psi$$ has no physical meaning, but its square  $$\\Psi|^{2})$$ represents electron density.",
            "Particle in a Box: Demonstrates energy quantization. Energy levels  $$\(E_{n}\)$$ increase with $$ \(n^{2}\) $$."
        ]
    },
    3: {
        title: "Thermodynamics",
        desc: "Thermodynamics deals with heat, work, and temperature, and their relation to energy and physical properties of matter. It dictates the direction of natural processes.",
        formula: "$$ \\Delta G = \\Delta H - T\\Delta S $$",
        concepts: [
            "First Law: Energy cannot be created or destroyed, only transformed $$(\\Delta U=q+w\)$$.",
            "Second Law: The entropy of the universe always increases in a spontaneous process.",
            "Gibbs Free Energy ($ G $): The single best criterion for spontaneity at constant T and P. If $$ \\Delta G $$ is negative, the reaction proceeds.",
            "Third Law: The entropy of a perfect crystal at absolute zero (0 K) is zero."
        ]
    },
    4: {
        title: "Potential Energy Surfaces (PES)",
        desc: "A PES is a mathematical function that gives the energy of a molecule as a function of its geometry. It is visualized as a landscape where valleys are stable structures and peaks are transition states.",
        formula: "$$ V(r) = 4\\epsilon \\left[ \\left(\\frac{\\sigma}{r}\\right)^{12} - \\left(\\frac{\\sigma}{r}\\right)^{6} \\right] $$",
        concepts: [
            "Bond Stretching: Modeled using Hooke's Law $$ (E = k(r-r_0)^{2}) $$.",
            "Lennard-Jones Potential: Describes Van der Waals forces. The $$ r^{-12} $$ term represents repulsion (Pauli exclusion), and $$ r^{-6} $$ represents attraction (dispersion).",
            "Minima: Local minima correspond to isomers; the global minimum is the most stable shape.",
            "Saddle Points: correspond to transition states in a chemical reaction."
        ]
    },
    5: {
        title: "Molecular Dynamics (MD)",
        desc: "MD is a computer simulation method for analyzing the physical movements of atoms and molecules. The atoms are allowed to interact for a fixed period of time, giving a view of the dynamic evolution of the system.",
        formula: "$$ F_i = m_i a_i = -\\nabla V $$",
        concepts: [
            "Newton's Laws: Used to calculate trajectories $$(r, v, a)$$ over time.",
            "Verlet Algorithm: A numerical method used to integrate Newton's equations of motion.",
            "Periodic Boundary Conditions (PBC): A trick to simulate bulk matter with a small number of atoms by replicating the simulation box infinitely.",
            "Ergodicity: The idea that a time average is equivalent to an ensemble average."
        ]
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.module-grid');
    
    for (const [key, value] of Object.entries(courseData)) {
        const card = document.createElement('div');
        card.className = 'data-card';
        card.onclick = () => openModule(key);
        
        card.innerHTML = `
            <div class="card-header">
                <span class="mod-tag">MODULE 0${key}</span>
                <h3>${value.title}</h3>
            </div>
            <p>${value.desc.substring(0, 80)}...</p>
        `;
        grid.appendChild(card);
    }
});

function switchTab(tabId) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
    
    if(tabId === 'simulation') setTimeout(updateChart, 100);
}

const modal = document.getElementById('detailModal');

function openModule(id) {
    const data = courseData[id];
    document.getElementById('mTitle').innerText = data.title;
    document.getElementById('mDesc').innerText = data.desc;
    document.getElementById('mFormula').innerHTML = data.formula;
    
    const list = document.getElementById('mConcepts');
    list.innerHTML = '';
    data.concepts.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        list.appendChild(li);
    });
    
    modal.classList.add('active');
    if (window.MathJax) MathJax.typesetPromise();
}

function forceClose() {
    modal.classList.remove('active');
}

function closeModal(e) {
    if (e.target === modal) forceClose();
}

let pesChart = null;

function updateChart() {
    const ctx = document.getElementById('pesChart').getContext('2d');
    const epsilon = parseFloat(document.getElementById('epsilon').value);
    const sigma = parseFloat(document.getElementById('sigma').value);
    
    document.getElementById('eps-val').innerText = epsilon.toFixed(1);
    document.getElementById('sig-val').innerText = sigma.toFixed(1) + " Å";
    
    const labels = [];
    const data = [];
    
    for (let r = 1.5; r <= 6; r += 0.1) {
        let v = 4 * epsilon * (Math.pow(sigma/r, 12) - Math.pow(sigma/r, 6));
        if (v > 10) v = 10; 
        if (v < -15) v = -15;
        labels.push(r.toFixed(1));
        data.push(v);
    }
    
    if (pesChart) pesChart.destroy();
    
    pesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Potential Energy (V)',
                data: data,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 2,
                fill: true,
                pointRadius: 0,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { title: { display: true, text: 'Energy' }, grid: { color: '#f3f4f6' } },
                x: { title: { display: true, text: 'Distance (r)' }, grid: { display: false } }
            }
        }
    });
}

function calculateEnergy() {
    const n = parseFloat(document.getElementById('q-n').value);
    const L = parseFloat(document.getElementById('q-L').value);
    
    if (n < 1 || L <= 0) {
        alert("Invalid parameters");
        return;
    }
    
    const E = (0.376 * Math.pow(n, 2)) / Math.pow(L, 2);
    document.getElementById('calc-output').innerText = E.toFixed(3) + " eV";
}