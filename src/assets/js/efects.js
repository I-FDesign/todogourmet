// Header account btn-------------------------------------------

function showDropdown() {
    $('.account .account-dropdown').slideToggle(300);
}

function hideDropdown() {
    $('.account .account-dropdown').slideUp(300);
}


// Navbar Scroll--------------------------------------------------


function scrollToDiv(slideTo) {
    const marcas_div = $('.nuestras-marcas').offset().top;
    const contactanos_div = $('.contactanos').offset().top + 150;

    if (slideTo == 'contact') {
        $('html, body').animate({
            scrollTop: contactanos_div - 10
        }, 500);
    } else {
        $('html, body').animate({
            scrollTop: marcas_div - 10
        }, 500);
    }
}

// Mobile navbar-----------------------------------------------

function showMenu() {
    $('header .gourmet-navbar ul.navbar').slideToggle(200);
}

// Button to top-----------------------------------------------

$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('.to-top').fadeIn(300);
    } else {
        $('.to-top').fadeOut(300);
    }
})

function goToTop(animationTime = 500) {
    $('html, body').animate({
        scrollTop: 0
    }, animationTime);
    return false;
}

// login---------------------------------------------

function hideModal() {
    $('#loginModal').modal('hide');
}

function handleAdditionalInfoModal(option){
    $('#additionalInfoModal').modal(option);
}



// Sidebar admin effects-------------------------------------------

var overlay = $('.overlay'),
    isClosed = true;

function hamburger_cross() {

    if (isClosed) {
        overlay.show();
        $('#hamburger_btn').removeClass('is-closed');
        $('#hamburger_btn').addClass('is-open')
        isClosed = false;
    } else {
        overlay.hide();
        $('#hamburger_btn').removeClass('is-open');
        $('#hamburger_btn').addClass('is-closed');
        isClosed = true;
    }
    $('#wrapper').toggleClass('toggled');
}

$('[data-toggle="offcanvas"]').click(function() {
    $('#wrapper').toggleClass('toggled');
});

// Close admin editmodal -----------------------------------

function closeEditModal( modalId ){
    $('#' + modalId).modal('hide');
    const modalBackdrops = document.getElementsByClassName('modal-backdrop');

    for (const modal of modalBackdrops) {
        modal.style.display = 'none';
    }
}