AOS.init();


const destinations = [
  {
    name: "Sigiriya",
    images: [
      "asset/images/sigiriya.jpg",
      "asset/images/sigiriya.jpg",
      "asset/images/sigiriya.jpg"
    ],
    description: "Sigiriya, often called the Lion Rock, is one of Sri Lanka’s most famous landmarks.",
    province: "Central Province",
    district: "Matale District",
    Location: "Near the town of Dambulla, about 175 km northeast of Colombo",
    map: "https://www.google.com/maps/search/?api=1&query=Sigiriya,+Sri+Lanka"
  }
];

// ------- Function to redirect to search page -------
function goToResults(event) {
  event.preventDefault();
  const Search = document.getElementById("search").value.trim();
  if (Search) {
    window.location.href = `search.html?q=${encodeURIComponent(Search)}`;
  }
  return false;
}

// ------- Function to show results on search.html -------
function displayResults() {
  const params = new URLSearchParams(window.location.search);
  const Search = params.get("q")?.toLowerCase();
  const resultContainer = document.getElementById("result");

  if (!resultContainer) return;

  if (!Search) {
    resultContainer.innerHTML = `<p class="text-muted">No search query provided.</p>`;
    return;
  }
  // ---search function work this-------

  const filtered = destinations.filter(Check =>
    Check.name.toLowerCase().includes(Search) ||
    Check.province.toLowerCase().includes(Search) ||
    Check.district.toLowerCase().includes(Search)
  );

  if (filtered.length === 0) {
    resultContainer.innerHTML = `<p class="text-danger">No results found for "<strong>${Search}</strong>".</p>`;
    return;
  }

  // ✅ Render cards with side images
  resultContainer.innerHTML = filtered.map(Check => `
    <div class="col-12">
      <div class="row g-3 align-items-start">
        
        <!-- Left side: Card -->
        <div class="col-md-8">
          <div class="card h-100 shadow-lg">
            <!-- First image inside card -->
            <img src="${Check.images[0]}" class="card-img-top" alt="${Check.name}">
            
            <div class="card-body">
              <h5 class="card-title fw-bold">${Check.name}</h5>
              <p class="card-text">${Check.description}</p>
              <p class="card-text"><strong>Province:</strong> ${Check.province}</p>
              <p class="card-text"><strong>District:</strong> ${Check.district}</p>
              <p class="card-text"><strong>Location:</strong> ${Check.Location}</p>
              <p class="card-text"><a href="${Check.map}" target="_blank">View Map</a></p>
              <a href="#" class="btn btn-primary">Discover</a>
            </div>
          </div>
        </div>

        <!-- Right side: Other images -->
        <div class="col-md-4 d-flex flex-column gap-2">
          ${Check.images.slice(1).map(img => `
            <img src="${img}" alt="${Check.name}" 
              style="width: 100%; height: 430px; object-fit: cover; border-radius: 6px;">
          `).join("")}
        </div>

      </div>
    </div>
  `).join("");
}

// Run on page load
window.addEventListener("DOMContentLoaded", displayResults);


document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll(".card-body").forEach(card=>{
    let more=card.querySelector(".more");
    let btn=card.querySelector("button");
    if(!more && btn){

      btn.style.display="none";
    }

  });
});

function readmore(btn){
 let cardBody = btn.closest(".card-body");
 let dots = cardBody.querySelector(".dots");
 let more = cardBody.querySelector(".more");
if (!more) return;
//clicked the card
  if(dots.style.display === "none"){
    
    dots.style.display = "inline";
    more.style.display = "none";
    btn.innerText = "Discover";
  }else{
    dots.style.display = "none";
    more.style.display = "inline";
    btn.innerText = "Read less";

  }
}