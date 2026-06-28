/* ==========================================================================
   Tự động chạy cấu hình thuộc tính khi trang web tải xong (window.onload)
   ========================================================================== */
window.onload = function() {
    console.log("Trang web đã tải xong. Bắt đầu tự động chèn thuộc tính tabindex...");
    initializeKeyboardAccessibility();
};

/**
 * Hàm tìm tất cả các khối dự án và gán thuộc tính tabindex
 */
function initializeKeyboardAccessibility() {
    let projectCards = document.querySelectorAll(".card-section");
    
    for (let i = 0; i < projectCards.length; i++) {
        projectCards[i].setAttribute("tabindex", "0");
    }
    
    console.log("Hệ thống đã tự động kích hoạt thành công tabindex cho " + projectCards.length + " khối dự án.");
}
