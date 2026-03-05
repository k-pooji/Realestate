const properties = [
  {
    title: "Luxury Villa",
    location: "Hyderabad",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    title: "Modern Apartment",
    location: "Bangalore",
    price: 900000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  },
  {
    title: "Family House",
    location: "Chennai",
    price: 700000,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
  },
  {
    title: "Beachside Home",
    location: "Vizag",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
  },
  {
    title: "Premium Garden Villa",
    location: "Gachibowli",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
  },
  {
    title: "Lake View Villa",
    location: "Hitech City",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
  },
  {
    title: "Royal Duplex Villa",
    location: "Jubilee Hills",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    title: "Green Valley Villa",
    location: "Kondapur",
    price: 2100000,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
  },
  {
    title: "Palm Residency Villa",
    location: "Miyapur",
    price: 1950000,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
  }
];

function displayProperties(list) {
  const container = document.getElementById("propertyList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No properties found.</p>";
    return;
  }

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.title}">
        <div class="card-body">
         <h3>${p.title} <span class="badge">Featured</span></h3>
          <p>${p.location}</p>
          <p class="price">₹${p.price.toLocaleString()}</p>
        </div>
      </div>
    `;
  });
}

function filterProperties() {
  const location = document.getElementById("searchLocation").value.toLowerCase();
  const maxPrice = document.getElementById("priceFilter").value;

  const filtered = properties.filter(p => {
    const matchLocation = p.location.toLowerCase().includes(location);
    const matchPrice = maxPrice ? p.price <= maxPrice : true;
    return matchLocation && matchPrice;
  });

  displayProperties(filtered);
}

// Load all properties on page load
displayProperties(properties);

function updateCount(count) {
  document.getElementById("propertyCount").innerText =
    `${count} properties available`;
    updateCount(list.length);
}

function scrollToProperties() {
  document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
}

function showWhyUs(type) {
  const box = document.getElementById("whyContent");

  if (!box) {
    console.error("whyContent div not found");
    return;
  }

  box.style.display = "block";

  if (type === "verified") {
    box.innerHTML = `
      <h3>🏡 Verified Properties</h3>
      <p>
        All properties are legally verified with complete documentation
        to ensure transparency and customer trust.
      </p>
    `;
  } 
  else if (type === "price") {
    box.innerHTML = `
      <h3>💰 Best Price Guarantee</h3>
      <p>
        We compare market prices and negotiate directly with sellers
        to offer the best value without hidden charges.
      </p>
    `;
  } 
  else if (type === "location") {
    box.innerHTML = `
      <h3>📍 Prime Locations</h3>
      <p>
        Our properties are located in high-demand areas near schools,
        hospitals, transport, and IT hubs.
      </p>
    `;
  } 
  else if (type === "support") {
    box.innerHTML = `
      <h3>📞 24/7 Support</h3>
      <p>
        Our support team is available 24/7 to help with site visits,
        documentation, and after-sales service.
      </p>
    `;
  }
}
