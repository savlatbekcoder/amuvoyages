const loader = document.querySelector(".loader");
setTimeout(() => {
  setTimeout(() => {
    loader.style.opacity = "0";
  }, 500);
  loader.style.display = "none";
}, 600);

const foooter = document.querySelector("footer");
foooter.innerHTML = `
<footer class="bg-created text-white">
<div class="container">
  <div class="row">
    <div class="col-md-6 col-12 text-start my-3">
      <h3>Contact Us</h3>
      <p> Khiva city, Ichan Kala, Boyoqchilar str. 64</p>
      <p class="my-0">tel: +99891 920 94 20 <br>
      tel: +99897 754 16 80 <br />
      email: tourismstan@gmail.com
      </p>
    </div>
    <div class="col-md-6 col-12 text-start my-3">
      <h3>AMU VOYAGES</h3>
      <p>
        INCOMING TOURISM AND TRANSPORTATION SERVICE PROVIDER COMPANY IN
        UZBEKISTAN AND CENTRAL ASIA
      </p>
    </div>
  </div>
</div>
</footer>
`;
