<script>
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;
function updateSlide(){slides.style.transform=`translateX(-${index*100}%)`;}
document.getElementById('next').addEventListener('click',()=>{index=(index+1)%images.length; updateSlide();});
document.getElementById('prev').addEventListener('click',()=>{index=(index-1+images.length)%images.length; updateSlide();});
setInterval(()=>{index=(index+1)%images.length; updateSlide();},5000);

function toggleMenu(){document.querySelector('.nav-links').classList.toggle('active');}

  // Fermer le menu mobile après clic
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    if(nav.classList.contains('active')){
      nav.classList.remove('active');
    }
  });
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // empêche le scroll instantané par défaut
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const navHeight = document.querySelector('.navbar').offsetHeight;
    window.scrollTo({
      top: targetSection.offsetTop - navHeight,
      behavior: 'smooth'
    });
    // fermer le menu
    const nav = document.querySelector('.nav-links');
    nav.classList.remove('active');
  });
});
  function openVideo(url){
  document.getElementById("videoFrame").src = url;
  document.getElementById("videoModal").style.display = "flex";
}

function closeVideo(){
  document.getElementById("videoFrame").src = "";
  document.getElementById("videoModal").style.display = "none";
}

/* ---- Recherche dans les cours ---- */
document.getElementById("searchInput").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  document.querySelectorAll(".cours-item").forEach(item => {
    let title = item.getAttribute("data-title").toLowerCase();
    item.style.display = title.includes(value) ? "block" : "none";
  });
});
</script>
