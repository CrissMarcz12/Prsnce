
// Mobile nav toggle & year
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mobileNav');
  if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('hidden'));
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  const wcta = document.getElementById('whatsappCTA');
  if (wcta) wcta.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero info sobre las poleras PRESNCE')}`;
});
