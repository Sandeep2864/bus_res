function toggle() {
    document.body.style.backgroundColor="GREY";
    document.getElementById("middle").style.display = "block";
}
// Add an event listener to the document
document.addEventListener('click', function(event) {
    var isClickInsideElement =document.getElementById("middle").contains(event.target);
    var isToggleButton = event.target.id === "toggleButton";

    if (!isClickInsideElement && !isToggleButton) {
        document.getElementById("middle").style.display = "none";
        document.body.style.backgroundColor = "white"; // Reset background color
    }
});
var imageback = 0;
function changeBack() {
var urls = [
"images/back1.png",
"images/back2.png",
"images/back3.png",
"images/back4.png",
"images/back5.png",
];
document.getElementById("main").style.backgroundImage = "url(" + urls[imageback] + ")";
imageback++;
if (imageback >= urls.length) {
imageback = 0;
}
}
setInterval(changeBack, 3000);

var cityPlaces = {
    "Bangalore": "Silicon Valley of India, known for its IT industry",
    "Pune": "Oxford of the East, with rich history and culture",
    "Hyderabad": "City of Pearls, famous for its cuisine and technology industry",
    "Surat": "Diamond City of India, known for diamond cutting and polishing",
    "Mumbai": "Financial capital of India, known for Bollywood",
    "Chennai": "Capital of Tamil Nadu, known for its beaches and culture",
    "Delhi": "Capital of India, known for its historical monuments",
    "Noida": "IT hub with modern infrastructure",
    "Gurgaon": "Leading financial and industrial city near New Delhi",
    "Kolkata": "Cultural capital of India, known for its colonial architecture",
    "Indore": "Commercial capital of Madhya Pradesh",
    "Chandigarh": "Known for its modernist architecture and grid-like city plan",
    "Kochi": "Coastal city in Kerala, known for its spice trade",
    "Nashik": "Ancient holy city in Maharashtra"
};

// Function to update the results display on the webpage
function updateResultsDisplay(results) {
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ''; // Clear previous results
    results.forEach(function(city) {
        var resultElement = document.createElement("div");
        resultElement.className = "result-item"; // Assign a class to each result element
        resultElement.textContent = city;
        resultsContainer.appendChild(resultElement);
    });
}

// Event listener for the search input
document.getElementById("fromInput").addEventListener("input", function() {
    var searchValue = this.value.toLowerCase();
    var results = [];
    // Perform search logic here
    for (var city in cityPlaces) {
        if (city.toLowerCase().includes(searchValue)) {
            results.push(city);
        }
    }
    // Update the results display on the webpage
    updateResultsDisplay(results);
});
document.getElementById("results").addEventListener("click", function(event) {
    var fromInput = document.getElementById("fromInput");
    // Check if the clicked element has the class 'result-item'
    if (event.target.className === "result-item") {
        fromInput.value = event.target.textContent; // Set the input value to the text content of the clicked element
    }
});
var cities = {
    "Bangalore": "Silicon Valley of India, known for its IT industry",
    "Pune": "Oxford of the East, with rich history and culture",
    "Hyderabad": "City of Pearls, famous for its cuisine and technology industry",
    "Surat": "Diamond City of India, known for diamond cutting and polishing",
    "Mumbai": "Financial capital of India, known for Bollywood",
    "Chennai": "Capital of Tamil Nadu, known for its beaches and culture",
    "Delhi": "Capital of India, known for its historical monuments",
    "Noida": "IT hub with modern infrastructure",
    "Gurgaon": "Leading financial and industrial city near New Delhi",
    "Kolkata": "Cultural capital of India, known for its colonial architecture",
    "Indore": "Commercial capital of Madhya Pradesh",
    "Chandigarh": "Known for its modernist architecture and grid-like city plan",
    "Kochi": "Coastal city in Kerala, known for its spice trade",
    "Nashik": "Ancient holy city in Maharashtra"
}

document.getElementById("toInput").addEventListener("input", function() {
    var res = this.value.toLowerCase();
    var result = [];
    for (var city in cities) {
        if (city.toLowerCase().includes(res)) {
            result.push(city);
        }
    }
    updateR(result);
});

function updateR(results) {
    var resultcontainer = document.getElementById("result1");
    resultcontainer.innerHTML = "";
    results.forEach(function(city) {
        var div = document.createElement('div');
        div.className = "result1-item"; // Assign the class name here
        div.textContent = city;
        resultcontainer.appendChild(div);
    });
}

// Use event delegation for the click event
document.addEventListener('click', function(event) {
    if (event.target.className === "result1-item") {
        var res = document.getElementById("toInput");
        res.value = event.target.textContent; // Set the input value
    }    
});


