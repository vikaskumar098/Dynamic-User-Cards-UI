const users = [
  {
    image: "https://images.pexels.com/photos/7698821/pexels-photo-7698821.jpeg",
    username: "Priya Mehta",
    profession: "UI/UX Designer",
    city: "Pune",
    description: "Creative designer focused on user-centered design and modern digital experiences."
  },
  {
    image: "https://images.pexels.com/photos/17190672/pexels-photo-17190672.jpeg",
    username: "Tilak Verma",
    profession: "Data Analyst",
    city: "Bangalore",
    description: "Data-driven analyst who enjoys discovering insights and solving business problems."
  },
  {
    image: "https://images.pexels.com/photos/6325996/pexels-photo-6325996.jpeg",
    username: "Simran Kaur",
    profession: "Digital Marketer",
    city: "Delhi",
    description: "Expert in social media strategy, branding, and high-impact marketing campaigns."
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    username: "Vikram Singh",
    profession: "Cloud Engineer",
    city: "Hyderabad",
    description: "AWS & Azure certified cloud engineer with a strong focus on scalable infrastructure."
  },
{
    image: "https://images.pexels.com/photos/20434266/pexels-photo-20434266.jpeg",
    username: "Sunil Singh",
    profession: "Software Tester",
    city: "Jaipur",
    description: "Detail-oriented QA tester skilled in automation and ensuring flawless user experience."
  },
  {
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    username: "Aditya Raj",
    profession: "Python Developer",
    city: "Mumbai",
    description: "Android & Flutter developer who enjoys creating smooth and modern mobile apps."
  },
  {
    image: "https://images.pexels.com/photos/5292196/pexels-photo-5292196.jpeg",
    username: "Ananya Mishra",
    profession: "Content Writer",
    city: "Lucknow",
    description: "Creative storyteller who writes engaging blogs, scripts, and SEO-optimized content."
  },
  {
    image: "https://images.pexels.com/photos/26698086/pexels-photo-26698086.jpeg",
    username: "Harshit Jain",
    profession: "Cyber Analyst",
    city: "Chandigarh",
    description: "Security specialist focused on penetration testing and protecting digital infrastructure."
  }
];

var sum = '';

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.username}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>
        `
})

var main = document.querySelector('main')

main.innerHTML = sum 
