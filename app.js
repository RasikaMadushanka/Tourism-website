AOS.init();
//---------make array--------------
const destination=[
    {
    place:"",Image:"",about:"",district:"",province:"",map:""
}, {
    place:"",Image:"",about:"",district:"",province:"",map:""
}
];

//-----------------write search function

function SearchPlace(){
    const Search=document.getElementById("search").value.trim().toLowerCase();
    const Result=document.getElementById("result");



}

const matchDestination=destination.filter(p=>
    p.district.toLowerCase().includes(Search) || 
    p.place.toLocaleLowerCase().includes(Search)||
    p.province.toLocaleLowerCase().includes(Search)
);
  if (matchDestination.length > 0) {
    result.innerHTML = matchDestination.map(place => `
      <div class="card" data-aos="fade-up">
        <img src="${place.image}" alt="${place.place}">
        <h3>${place.place}</h3>
        <p><strong>District:</strong> ${place.district}</p>
        <p><strong>Province:</strong> ${place.province}</p>
        <p>${place.about}</p>
        <iframe src="${place.map}" loading="lazy"></iframe>
      </div>
    `).join("");
  } else {
    result.innerHTML = `<p class="not-found">❌ No places found.</p>`;
  }
