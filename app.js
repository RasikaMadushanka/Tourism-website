AOS.init();

// -make Array--------------
const destinations = [
  {
    name: "Sigiriya",
    image: "asset/images/sigiriya.jpg",
    description: "Sigiriya, often called the Lion Rock, is one of Sri Lanka’s most famous landmarks.",
    province: "Central Province",
    district: "Matale District",
    Location: " Near the town of Dambulla, about 175 km northeast of Colombo",
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

  const filtered = destinations.filter(Check =>
    Check.name.toLowerCase().includes(Search) ||
    Check.province.toLowerCase().includes(Search) ||
    Check.district.toLowerCase().includes(Search)
  );

  if (filtered.length === 0) {
    resultContainer.innerHTML = `<p class="text-danger">No results found for "<strong>${Search}</strong>".</p>`;
    return;
  }

  resultContainer.innerHTML = filtered.map(Check => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100 shadow-lg">
        <img src="${Check.image}" class="card-img-top" alt="${Check.name}">
        <div class="card-body">
          <h5 class="card-title fw-bold">${Check.name}</h5>
          <p class="card-text">${Check.description}</p>
           <p class="card-text">${Check.province}</p>
        <p class="card-text">${Check.district}</p>
                <p class="card-text">${Check.Location}</p>
          <p class="card-text">
  <a href="${Check.map}" target="_blank">View Map</a>
</p>
          <a href="#" class="btn btn-primary">Discover</a>
        </div>
      </div>
    </div>
  `).join("");
}

// disply search.html file
displayResults();

function readmore(){
  var dots=document.getElementById("dots");
  var moreText=document.getElementById("more");
  var btn =document.getElementById("buttonD");
  if(dots.style.display==="none"){
    dots.style.display==="inline";
    buttonD.innerHTML="Read more";
    moreText.style.display='none';
  }else{
    dots.style.display='none';
    buttonD.innerHTML="Read less";
    moreText.style.display='inline';

  }
}