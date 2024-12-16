

const h2 = document.createElement("h2");
h2.textContent = "A basic introduction for beginners";

document.querySelector("body").appendChild(h2);


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-hover-text]');

    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            // Store the current image
            const originalImage = this;
            
            // Create a span element to replace the image
            const textSpan = document.createElement('span');
            textSpan.textContent = originalImage.getAttribute('data-hover-text');
            textSpan.className = originalImage.className + '-text';
            
            // Replace the image with text
            originalImage.parentNode.replaceChild(textSpan, originalImage);
            
            // Store the original image on the span for later retrieval
            textSpan.originalImage = originalImage;
        });

        img.parentNode.addEventListener('mouseout', function(event) {
            // Check if the mouseout is actually leaving the cell
            if (!this.contains(event.relatedTarget)) {
                const textSpan = this.querySelector('span.' + img.className + '-text');
                
                if (textSpan && textSpan.originalImage) {
                    // Restore the original image
                    this.replaceChild(textSpan.originalImage, textSpan);
                }
            }
        });
    });
});
