document.addEventListener('DOMContentLoaded', function () {
    const uploadContainer = document.getElementById('uploadContainer');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
  
    uploadContainer.addEventListener('dragover', function (e) {
      e.preventDefault(); // google what is does.
      uploadContainer.classList.add('drag-over');
    });
  
    uploadContainer.addEventListener('dragleave', function () {
      uploadContainer.classList.remove('drag-over');
    });
  
    uploadContainer.addEventListener('drop', function (event) {
      event.preventDefault();
      uploadContainer.classList.remove('drag-over');
      console.log('TEST', event.dataTransfer.files);
      handleFiles(event.dataTransfer.files);
    });
  
    fileInput.addEventListener('change', function () {
      handleFiles(fileInput.files);
    });
  
    function handleFiles(files) {
      fileList.innerHTML = ''; 
  
      for (const file of files) {
        console.log(file);
        const listItem = document.createElement('div');
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
      }
    }
  });
  