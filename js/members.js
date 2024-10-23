const membersList = {
    authors: [
        {
            name: "Patrick Longa",
            job: "Cryptography Researcher",
            location: "Redmond, USA",
            region: "North America",
            image: "../images/authors/patrick_longa_photo.png",
            twitter: "@PatrickLonga",
            website: "https://www.patricklonga.com/",
            research: "Post-quantum Cryptography, Algorithm Design & High-Performance Computing"
        },
        {
            name: "Francisco Rodríguez",
            job: "Professor",
            location: "Abu Dhabi, UAE",
            region: "Asia",
            image: "../images/authors/francisco_rodriguez_photo.png",
            twitter: "@FRHENR",
            website: "https://delta.cs.cinvestav.mx/~francisco/",
            research: "Public-key Crpytography & Computer Arithmetic"
        },
    ]
};

var load_members = function () {
    // get the template defined with handlebars and compile it.
    const source = document.getElementById("filtered-author-template").innerHTML;
    const template = Handlebars.compile(source);
    // the list of authors that write on the magazine.
    // each image (photo) has been provided by the authors.
    // render the data on the html object.
    const html = template(membersList);
    document.querySelector(".filtered-author-rendered-output").innerHTML = html;
}
window.addEventListener('load', load_members, false);