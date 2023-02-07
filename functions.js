const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav2");
const supportBtn = document.querySelector(".supportBtn");
const supportTooltip = document.createElement("div");
const shade = document.getElementById("shade");
const account = document.querySelector(".account");
const navRight = document.querySelector(".navRight");
const shop = document.querySelector(".shop");
let accountInfo = document.createElement("form");

// Log in Form
account.addEventListener("click", () => {
  if (!accountInfo) {
    accountInfo = document.createElement("form");
    accountInfo.innerHTML = `<div class="loginNameContainer">
      <label for="loginName">Email:</label>
      <input type="email" id="loginName" placeholder="email address" required>
      </div>
      <div class="loginPassContainer">
      <label for="loginPassword">Password:</label>
      <input type="password" id="loginPassword" placeholder="password" required>
      </div>
      <button>Submit</button>
`;
    accountInfo.classList.add("logIn");
    accountInfo.setAttribute("action", "GET");
    navRight.insertBefore(accountInfo, shop);
  } else {
    accountInfo.remove();
    accountInfo = null;
  }
});

// Hamburger Menu
hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

// Support Toggle
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
