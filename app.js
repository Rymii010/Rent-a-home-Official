function goHome() {
  window.location.href = "index.html";
}

function saveHome() {
  const home = {
    title: document.getElementById("title").value,
    location: document.getElementById("location").value,
    price: document.getElementById("price").value,
    phone: document.getElementById("phone").value,
    description: document.getElementById("description").value,
    status: "Available"
  };

  let homes = JSON.parse(localStorage.getItem("homes")) || [];
  homes.push(home);
  localStorage.setItem("homes", JSON.stringify(homes));

  window.location.href = "add.html";
}

function markRented(index) {
  let homes = JSON.parse(localStorage.getItem("homes")) || [];
  homes[index].status = "Rented";
  localStorage.setItem("homes", JSON.stringify(homes));
  location.reload();
}

const container = document.getElementById("listingContainer");

if (container) {
  const homes = JSON.parse(localStorage.getItem("homes")) || [];

  homes.forEach((home, index) => {
    container.innerHTML += `
      <div class="home-card">
        <h3>${home.title}</h3>
        <p>${home.location}</p>
        <strong>${home.price}</strong>
        <p>${home.description}</p>
        <p>Phone: ${home.phone}</p>
        <p class="status ${home.status === "Available" ? "available" : "rented"}">
          Status: ${home.status}
        </p>
        ${
          home.status === "Available"
            ? `<button class="card-btn" onclick="markRented(${index})">Mark as Rented</button>`
            : ""
        }
      </div>
    `;
  });
}
