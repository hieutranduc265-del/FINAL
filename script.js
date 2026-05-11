// =====================================
// SLIDER HGT STORE
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    // nếu trang không có slider thì không chạy
    if (slides.length === 0) return;

    let index = 0;


    // =====================================
    // HIỂN THỊ SLIDE
    // =====================================

    function showSlide(i) {

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        slides[i].classList.add("active");

    }


    // =====================================
    // NÚT NEXT
    // =====================================

    if (nextBtn) {

        nextBtn.addEventListener("click", function () {

            index++;

            if (index >= slides.length) {
                index = 0;
            }

            showSlide(index);

        });

    }


    // =====================================
    // NÚT PREV
    // =====================================

    if (prevBtn) {

        prevBtn.addEventListener("click", function () {

            index--;

            if (index < 0) {
                index = slides.length - 1;
            }

            showSlide(index);

        });

    }


    // =====================================
    // AUTO SLIDE
    // =====================================

    setInterval(function () {

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        showSlide(index);

    }, 3000);


});












// Đợi cho nội dung trang web tải xong mới chạy code
document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById('open-search');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearch = document.getElementById('close-search');

    // Kiểm tra xem các phần tử có tồn tại không trước khi gán sự kiện
    if (openBtn && searchOverlay && closeSearch) {
        // Mở thanh tìm kiếm
        openBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
        });

        // Đóng thanh tìm kiếm bằng nút X
        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });

        // Đóng nếu người dùng nhấn phím Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                searchOverlay.classList.remove('active');
            }
        });
    }
});























document.addEventListener("DOMContentLoaded", function () {
    const btnOrder = document.querySelector('.btn-submit-order');

    if (btnOrder) {
        btnOrder.addEventListener('click', function (e) {
            let isValid = true;

            // Hàm kiểm tra chung
            function validate(id, errorId, message) {
                const input = document.getElementById(id);
                const error = document.getElementById(errorId);
                if (input.value.trim() === "") {
                    error.innerText = message;
                    input.classList.add('input-error');
                    isValid = false;
                } else {
                    error.innerText = "";
                    input.classList.remove('input-error');
                }
            }

            // Thực hiện kiểm tra
            validate('fullname', 'error-fullname', 'Vui lòng nhập họ và tên');
            
            // Kiểm tra số điện thoại (phải là số và đủ 10 số)
            const phoneInput = document.getElementById('phone');
            const phoneError = document.getElementById('error-phone');
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phoneInput.value.trim())) {
                phoneError.innerText = "Số điện thoại không hợp lệ (10 chữ số)";
                phoneInput.classList.add('input-error');
                isValid = false;
            } else {
                phoneError.innerText = "";
                phoneInput.classList.remove('input-error');
            }

            validate('address', 'error-address', 'Vui lòng nhập địa chỉ cụ thể');
            validate('city', 'error-city', 'Vui lòng chọn Tỉnh/Thành phố');

            if (!isValid) {
                e.preventDefault(); // Ngừng chuyển trang nếu có lỗi
                // Cuộn lên ô lỗi đầu tiên
                document.querySelector('.input-error').focus();
            } else {
                alert("Đơn hàng đã được đặt thành công!");
            }
        });
    }
});




















