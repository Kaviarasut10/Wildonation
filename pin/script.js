document.addEventListener('DOMContentLoaded', function () {
  const photoGrid = document.getElementById('photoGrid');
  const uploadForm = document.getElementById('uploadForm');
  const imageUpload = document.getElementById('imageUpload');
  const preview = document.getElementById('preview');

  function downloadImage(imageSrc) {
    const a = document.createElement('a');
    a.href = imageSrc;
    a.download = 'download.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
  // Display uploaded images on the Home page
  if (photoGrid) {
      const images = JSON.parse(localStorage.getItem('images')) || [];
      images.forEach(imgSrc => {
          const img = document.createElement('img');
          img.src = imgSrc;
          photoGrid.appendChild(img);
      });
  }

  // Handle image upload
  if (uploadForm) {
      uploadForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const file = imageUpload.files[0];
          const reader = new FileReader();

          reader.onload = function (e) {
              const imageData = e.target.result;

              // Save to localStorage
              const images = JSON.parse(localStorage.getItem('images')) || [];
              images.push(imageData);
              localStorage.setItem('images', JSON.stringify(images));

              // Show preview
              const img = document.createElement('img');
              img.src = imageData;
              preview.appendChild(img);
          };

          if (file) {
              reader.readAsDataURL(file);
          }
      });
  }
});

