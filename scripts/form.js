const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces",    averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits",  averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener('DOMContentLoaded', () => {
  
  document.getElementById('year').textContent    = new Date().getFullYear();
  document.getElementById('lastMod').textContent = document.lastModified;

  
  const select = document.getElementById('productSelect');
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value       = p.id;     
    opt.textContent = p.name;   
    select.appendChild(opt);
  });

  const starsDiv = document.querySelector('.rating-group .stars');
  for (let i = 1; i <= 5; i++) {
    const radio = document.createElement('input');
    radio.type     = 'radio';
    radio.id       = `star${i}`;
    radio.name     = 'rating';
    radio.value    = i;
    radio.required = true;

    const label = document.createElement('label');
    label.setAttribute('for', `star${i}`);
    label.textContent = '★'.repeat(i);

    starsDiv.appendChild(radio);
    starsDiv.appendChild(label);
  }
});
