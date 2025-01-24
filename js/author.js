const context = {
  authors: [{
    name: "Abdelrahaman Aly",
    job: "Senior Cryptographer",
    location: "Abu Dhabi, UAE",
    region: "Asia",
    image: "../images/authors/abdelraham_aly_photo.png",
    twitter: "@abdito_8",
    website: "https://scholar.google.es/citations?user=FDfDueMAAAAJ&hl=en",
    research: "MPC, Algorithm Design & Applied Cryptography"
  },
  {
    name: "Diego Aranha",
    job: "Associate Professor",
    location: "Aarhus, Denmark",
    region: "Europe",
    image: "../images/authors/diego_aranha_photo.png",
    twitter: "@dfaranha",
    website: "https://sites.google.com/site/dfaranha/",
    research: "ECC & Efficient And Secure Cryptography in Software"
  },
  {
    name: "Gustavo Banegas",
    job: "CNRS Researcher",
    location: "Paris, France",
    region: "Europe",
    image: "../images/authors/gustavo_banegas_photo.png",
    twitter: "@gustavosbanegas",
    website: "https://www.cryptme.in/",
    research: "Quantum Cryptanalysis, Isogeny-based Cryptography & PQC"
  },
  {
    name: "Fabio Campos",
    job: "Post-Doc",
    location: "Bochum, Germany",
    region: "Europe",
    image: "../images/authors/fabio_campos_photo.png",
    twitter: "@primaboinca",
    website: "https://www.sopmac.de/",
    research: "PQC"
  },
  {
    name: "Sofía Celi",
    job: "Cryptography Researcher",
    location: "Lisbon, Portugal",
    region: "Europe",
    image: "../images/authors/sofia_celi_photo.png",
    twitter: "@claucece",
    website: "https://www.sofiaceli.com/",
    research: "PQC, Secure Messaging & PETs"
  },
  {
    name: "Jesús Chi",
    job: "Senior Cryptographer",
    location: "Abu Dhabi, UAE",
    region: "Asia",
    image: "../images/authors/jesus_chi_photo.png",
    twitter: "@Jebus_dguez",
    website: "https://jjchidguez.github.io/",
    research: "Cryptanalysis & Isogeny-based Cryptography"
  },
  {
    name: "Daniel Escudero",
    job: "Cryptography Researcher",
    location: "New York, USA",
    region: "North America",
    image: "../images/authors/daniel_escudero_photo.png",
    twitter: "@deescuderoo",
    website: "https://deescuderoo.github.io/",
    research: "Multivariate Cryptography, MPC & Private ML"
  },
  {
    name: "Armando Faz",
    job: "Cryptography Engineer",
    location: "California, USA",
    region: "North America",
    image: "../images/authors/armando_faz_photo.png",
    twitter: "@armfazh",
    website: "https://scholar.google.com/citations?user=XGD6X-EAAAAJ&hl=en",
    research: "Cryptographic Engineering, ECC & HPC"
  },
  {
    name: "Octavio Perez Kempner",
    job: "Post-Doc",
    location: "Tokyo, Japan",
    region: "Asia",
    image: "../images/authors/octavio_perez_photo.png",
    twitter: "@octaviopk",
    website: "https://octavio.pk",
    research: "Provable security, PKC & Zero-knowledge Proofs"
  },
  {
    name: "Ricardo Rodríguez",
    job: "PhD Student",
    location: "Bochum, Germany",
    region: "Europe",
    image: "./images/authors/ricardo_rodriguez_photo.png",
    twitter: "",
    website: "https://ricardorodriguezreveco.com/"
  },
  {
    name: "Fernando Virdia",
    job: "Post-Doc",
    location: "Lisbon, Portugal",
    region: "Europe",
    image: "../images/authors/fernando_virdia_photo.png",
    twitter: "",
    website: "https://fundamental.domains/",
    research: "PQC & Cryptanalysis"
  },
  {
    name: "Arantxa Zapico",
    job: "Cryptography Researcher",
    location: "Córdoba, Argentina",
    region: "South America",
    image: "../images/authors/arantxa_zapico_photo.png",
    twitter: "@arantxazapico",
    website: "https://sites.google.com/view/arantxazapico",
    research: "PKC & Zero-knowledge Proofs"
  },
  ]
};

var load_authors = function () {
  // get the template defined with handlebars and compile it.
  const source = document.getElementById("author-template").innerHTML;
  const template = Handlebars.compile(source);
  // the list of authors that write on the magazine.
  // each image (photo) has been provided by the authors.


  // render the data on the html object.
  const html = template(context);
  document.querySelector(".author-rendered-output").innerHTML = html;
}
window.addEventListener('load', load_authors, false);
