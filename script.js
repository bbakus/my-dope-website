

const h2 = document.createElement("h2");
h2.textContent = "A basic introduction for beginners";

document.querySelector("body").appendChild(h2);


document.getElementById('imageTable').addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'IMG') {
      const hoverText = e.target.getAttribute('title');
      const hoverBox = document.getElementById('hoverBox');
      hoverBox.textContent = hoverText;
      hoverBox.style.display = 'block';
      
      // Position the hover box near the mouse
      hoverBox.style.left = (e.pageX + 10) + 'px';
      hoverBox.style.top = (e.pageY + 10) + 'px';
    }
  });
  
  document.getElementById('imageTable').addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'IMG') {
      document.getElementById('hoverBox').style.display = 'none';
    }
  });