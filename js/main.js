$(function () {
    $(".dial").knob({
        fgColor: '#08C9C6',
        bgColor: '#FCFFEB',
        angleOffset: -80,
        angleArc: 160,
        min: 0,
        max: 100,
        width: 280,
        height: 280,
        cursor: 40,
        displayInput: false
    });
});

function hideAddressBar()
{
    if(!window.location.hash)
    {
        if(document.height < window.outerHeight)
        {
            document.body.style.height = (window.outerHeight + 50) + 'px';
        }

        setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
    }
}

window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );

var st = sidetap();
$(".header-button.menu").on("click",st.toggle_nav)
