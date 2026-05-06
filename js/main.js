(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

// WhatsApp Cart Integration
document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const whatsappBtn = document.getElementById('whatsapp-order-btn');

    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const row = btn.closest('tr');
            const product = {
                name: row.children[1].innerText,
                price: row.children[2].innerText,
                gst: row.children[3].innerText,
                amount: row.children[4].innerText
            };
            cart.push(product);
            cartCount.textContent = `Cart: ${cart.length} items`;
        });
    });

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function () {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            let message = 'Order Details:%0A';
            cart.forEach((item, idx) => {
                message += `${idx + 1}. ${item.name} | Price: ₹${item.price} | GST: ₹${item.gst} | Amount: ₹${item.amount}%0A`;
            });
            const phone = '917698241886'; // Change to your WhatsApp number (country code + number)
            const url = `https://wa.me/${phone}?text=${message}`;
            window.open(url, '_blank');
        });
    }
});

