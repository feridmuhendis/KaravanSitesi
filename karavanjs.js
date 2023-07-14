
  // Arama çubuğunu açma/kapama işlevselliği
  var searchIcon = document.querySelector('.fa-search');
  var searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Ara...';
  searchInput.classList.add('search-input');
  var isOpen = false;

  searchIcon.addEventListener('click', function() {
    if (!isOpen) {
      // Arama çubuğunu aç
      isOpen = true;
      searchIcon.classList.add('active');
      document.querySelector('.navbar').appendChild(searchInput);
    } else {
      // Arama çubuğunu kapat
      isOpen = false;
      searchIcon.classList.remove('active');
      document.querySelector('.search-input').remove();
    }
  });

document.getElementById('loginButton').addEventListener('click', function() {
  // Burada Üye Girişi işlevselliğini ekleyebilirsiniz
  // Örneğin, bir modal pencere açabilir veya bir sayfaya yönlendirebilirsiniz
});
