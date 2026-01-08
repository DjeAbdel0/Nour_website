const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "831ce49b-1429-4a5a-a7fd-e64a18809159");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
// script.js
import { privacyPolicy } from './script/privacy-policy.js';

// Choisis la page à afficher, par exemple la page d'accueil :
const pageData = privacyPolicy['/'];

// Affiche le titre et la description dans le HTML
document.getElementById('page-title').textContent = pageData.title;
document.getElementById('page-description').textContent = pageData.description;

// Tu peux aussi parcourir les autres éléments, par exemple les paragraphes :
const body = document.body;
pageData.p.forEach(text => {
  const p = document.createElement('p');
  p.textContent = text;
  body.appendChild(p);
});
