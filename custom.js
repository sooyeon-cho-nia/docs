// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  // 메인 검색창 찾기
  const mainSearch = document.getElementById('main-search');
  
  if (mainSearch) {
    // 엔터키 입력 시 검색 실행
    mainSearch.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const searchQuery = e.target.value;
        if (searchQuery) {
          // Mintlify의 기본 검색 페이지로 이동
          window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
      }
    });
    
    // 검색 태그 클릭 시 검색창에 입력
    const searchTags = document.querySelectorAll('.search-tag');
    searchTags.forEach(tag => {
      tag.addEventListener('click', function() {
        mainSearch.value = this.textContent;
        mainSearch.focus();
      });
    });
  }
  
  // 다른 페이지에서는 기본 검색창 표시
  const currentPath = window.location.pathname;
  if (currentPath !== '/' && currentPath !== '/index') {
    // 상단 네비게이션의 검색창 다시 표시
    const style = document.createElement('style');
    style.textContent = `
      nav [type="search"],
      nav .search-container,
      header [role="search"] {
        display: block !important;
      }
    `;
    document.head.appendChild(style);
  }
});