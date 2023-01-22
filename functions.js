const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav2");
const supportBtn = document.querySelector(".supportBtn");
const supportTooltip = document.createElement("div");
const shade = document.getElementById("shade");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

supportBtn.addEventListener("mouseover", () => {
  supportTooltip.innerHTML = `<div class="contact">
  <h2>CONTACT</h2>
  <p>Contacteaza-ne folosind optiunile de mai jos:</p>
  <div class="contactOptions">
    <button>SCRIE-NE UN MESAJ</button>
    <p>Suna-ne gratuit: <br> 0800.080.300 </p>
  </div>
</div>
<div class="faq">
  <h2>FAQ</h2>
  <p>Gaseste raspunsuri la cele mai intalnite intrebari</p>
  <button>Vezi mai mult</button>
</div>`;

  const shipping = document.querySelector(".shipping");
  document.body.insertBefore(supportTooltip, shipping);

  supportTooltip.classList.add("tooltipStyle");
  shade.classList.add("shadeStyle");
});

supportBtn.addEventListener("mouseleave", () => {
  supportTooltip.remove();
  supportTooltip.classList.remove("tooltipStyle");
  shade.classList.remove("shadeStyle");
});
