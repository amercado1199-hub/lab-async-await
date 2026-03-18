// Write your code here!
// Step 1: Fetch data
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
displayPosts(data);
});

// Step 2: Display posts
function displayPosts(posts) {
const ul = document.getElementById("post-list");

posts.forEach(post => {
// Create li
const li = document.createElement("li");

// Create h1 (title)
const h1 = document.createElement("h1");
h1.textContent = post.title;

// Create p (body)
const p = document.createElement("p");
p.textContent = post.body;

// Append h1 and p to li
li.appendChild(h1);
li.appendChild(p);

// Append li to ul
ul.appendChild(li);
});
}

async function fetchPosts() {
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();
displayPosts(data);
}

fetchPosts();