var canvas = (function ($) {
    var selectors = {
            window: window,
            container: '#hero'
        },
        nodes = [],
        isMobile = ($(window).width() <= 480),
        $document = $(document),
        $canvas,
        canvas,
        context,
        mouse,
        timer,
        list,
        totalParticles,
        rows,
        cols,
        manual = true,
        particle = {
            vx: 0,
            vy: 0,
            x: 0,
            y: 0
        },
        settings = {

            // v ONLY CHANGE THESE SETTINGS :) //
            maskScale: 200, // logo width
            color: [255,221,53], // logo color: yellow
            position: [0, -100], // offset position
            // ^ ONLY CHANGE THESE SETTINGS :) //

            brush: Math.pow((isMobile ? 50 : 200), 2),
            drag: 0.95,
            ease: 0.07,
            displacement: 1.2,
            spacing: 2,
            maxScale: (isMobile ? 0.4 : 0.3),
            offset: [],
            manualTimeout: 4000,
            autoSpeed: 0.6,
            pixelRatio: window.devicePixelRatio > 1 ? 2 : 1
        };

    var tog,
        dx, dy,
        mx, my,
        d, t, f,
        a, b,
        i, n,
        w, h,
        p, s,
        r, c;


    return {
        init: function () {
            nodes = createNodes(selectors);

            if (nodes.container.length > 0) {
                init();
                step();

                autoOn(true);
            }
        }
    }

    function createNodes(list) {
        var result = {};

        for (key in list) {
            result[key] = $(list[key]);
        }

        return result;
    }

    function autoOn(quick) {
        setTimeout(function () {
            manual = false;

            autoOff();
        }, quick ? 1500 : 4000);
    }

    function autoOff() {
        setTimeout(function () {
            manual = true;
            mx, my = 0;

            autoOn();
        }, 10000);
    }

    function init() {
        $canvas = $('<canvas>').addClass('hero__bg').css({
            'position': 'absolute',
            'top': '0',
            'left': '0'
        });
        canvas = $canvas[0];
        context = canvas.getContext('2d');

        nodes.container.append($canvas);

        tog = true;

        list = [];

        settings.width = canvas.width = nodes.window.outerWidth();
        settings.height = canvas.height = nodes.container.outerHeight();

        settings.maskScale = Math.min(settings.maskScale, settings.width * settings.maxScale);

        // set shape
        settings.maskWidth = settings.maskScale;
        settings.maskHeight = settings.maskScale;

        settings.offset = [
            (settings.width - settings.maskWidth + settings.position[0]) / 2,
            (settings.height - settings.maskHeight + settings.position[1]) / 2,
        ];

        w = settings.width;
        h = settings.height;


        // set grid
        cols = settings.maskWidth / settings.spacing;
        rows = settings.maskHeight / settings.spacing;

        totalParticles = cols * rows;


        context.translate(settings.offset[0], settings.offset[1]);


        context.fillStyle = '#ffffff';

        context.beginPath();

        context.moveTo((112.5 / 175) * settings.maskWidth, (174.2 / 175) * settings.maskWidth);
        context.bezierCurveTo((109.3 / 175) * settings.maskWidth,(174.2 / 175) * settings.maskWidth,(106.2 / 175) * settings.maskWidth,(172.39999999999998 / 175) * settings.maskWidth,(104.6 / 175) * settings.maskWidth,(169.29999999999998 / 175) * settings.maskWidth);
        context.bezierCurveTo((102.39999999999999 / 175) * settings.maskWidth,(164.99999999999997 / 175) * settings.maskWidth,(104.19999999999999 / 175) * settings.maskWidth,(159.7 / 175) * settings.maskWidth,(108.6 / 175) * settings.maskWidth,(157.49999999999997 / 175) * settings.maskWidth);
        context.bezierCurveTo((135.7 / 175) * settings.maskWidth,(144.09999999999997 / 175) * settings.maskWidth,(152.5 / 175) * settings.maskWidth,(116.99999999999997 / 175) * settings.maskWidth,(152.5 / 175) * settings.maskWidth,(86.89999999999998 / 175) * settings.maskWidth);
        context.bezierCurveTo((152.5 / 175) * settings.maskWidth,(57.09999999999998 / 175) * settings.maskWidth,(135.9 / 175) * settings.maskWidth,(30.199999999999974 / 175) * settings.maskWidth,(109.2 / 175) * settings.maskWidth,(16.59999999999998 / 175) * settings.maskWidth);
        context.bezierCurveTo((104.9 / 175) * settings.maskWidth,(14.39999999999998 / 175) * settings.maskWidth,(103.10000000000001 / 175) * settings.maskWidth,(9.09999999999998 / 175) * settings.maskWidth,(105.3 / 175) * settings.maskWidth,(4.799999999999979 / 175) * settings.maskWidth);
        context.bezierCurveTo((107.5 / 175) * settings.maskWidth,(0.49999999999997957 / 175) * settings.maskWidth,(112.8 / 175) * settings.maskWidth,-(1.3000000000000203 / 175) * settings.maskWidth,(117.1 / 175) * settings.maskWidth,(0.8999999999999795 / 175) * settings.maskWidth);
        context.bezierCurveTo((149.7 / 175) * settings.maskWidth,(17.4 / 175) * settings.maskWidth,(170 / 175) * settings.maskWidth,(50.4 / 175) * settings.maskWidth,(170 / 175) * settings.maskWidth,(86.8 / 175) * settings.maskWidth);
        context.bezierCurveTo((170 / 175) * settings.maskWidth,(123.6 / 175) * settings.maskWidth,(149.4 / 175) * settings.maskWidth,(156.7 / 175) * settings.maskWidth,(116.4 / 175) * settings.maskWidth,(173.1 / 175) * settings.maskWidth);
        context.bezierCurveTo((115.1 / 175) * settings.maskWidth,(173.9 / 175) * settings.maskWidth,(113.8 / 175) * settings.maskWidth,(174.2 / 175) * settings.maskWidth,(112.5 / 175) * settings.maskWidth,(174.2 / 175) * settings.maskWidth);

        context.moveTo((90.7 / 170) * settings.maskWidth, (139.6 / 174.2) * settings.maskHeight);
        context.bezierCurveTo((87.5 / 175) * settings.maskWidth,(139.6 / 175) * settings.maskWidth,(84.4 / 175) * settings.maskWidth,(137.79999999999998 / 175) * settings.maskWidth,(82.8 / 175) * settings.maskWidth,(134.7 / 175) * settings.maskWidth);
        context.bezierCurveTo((80.6 / 175) * settings.maskWidth,(130.39999999999998 / 175) * settings.maskWidth,(82.39999999999999 / 175) * settings.maskWidth,(125.1 / 175) * settings.maskWidth,(86.8 / 175) * settings.maskWidth,(122.89999999999999 / 175) * settings.maskWidth);
        context.bezierCurveTo((100.39999999999999 / 175) * settings.maskWidth,(116.1 / 175) * settings.maskWidth,(108.9 / 175) * settings.maskWidth,(102.5 / 175) * settings.maskWidth,(108.9 / 175) * settings.maskWidth,(87.29999999999998 / 175) * settings.maskWidth);
        context.bezierCurveTo((108.9 / 175) * settings.maskWidth,(72.29999999999998 / 175) * settings.maskWidth,(100.5 / 175) * settings.maskWidth,(58.69999999999998 / 175) * settings.maskWidth,(87.10000000000001 / 175) * settings.maskWidth,(51.899999999999984 / 175) * settings.maskWidth);
        context.bezierCurveTo((82.80000000000001 / 175) * settings.maskWidth,(49.69999999999998 / 175) * settings.maskWidth,(81.00000000000001 / 175) * settings.maskWidth,(44.399999999999984 / 175) * settings.maskWidth,(83.2 / 175) * settings.maskWidth,(40.09999999999998 / 175) * settings.maskWidth);
        context.bezierCurveTo((85.4 / 175) * settings.maskWidth,(35.79999999999998 / 175) * settings.maskWidth,(90.7 / 175) * settings.maskWidth,(33.99999999999998 / 175) * settings.maskWidth,(95 / 175) * settings.maskWidth,(36.19999999999998 / 175) * settings.maskWidth);
        context.bezierCurveTo((114.4 / 175) * settings.maskWidth,(45.999999999999986 / 175) * settings.maskWidth,(126.4 / 175) * settings.maskWidth,(65.59999999999998 / 175) * settings.maskWidth,(126.4 / 175) * settings.maskWidth,(87.29999999999998 / 175) * settings.maskWidth);
        context.bezierCurveTo((126.4 / 175) * settings.maskWidth,(109.19999999999999 / 175) * settings.maskWidth,(114.2 / 175) * settings.maskWidth,(128.89999999999998 / 175) * settings.maskWidth,(94.5 / 175) * settings.maskWidth,(138.59999999999997 / 175) * settings.maskWidth);
        context.bezierCurveTo((93.4 / 175) * settings.maskWidth,(139.3 / 175) * settings.maskWidth,(92 / 175) * settings.maskWidth,(139.6 / 175) * settings.maskWidth,(90.7 / 175) * settings.maskWidth,(139.6 / 175) * settings.maskWidth);

        context.moveTo(0,(125.8 / 175) * settings.maskWidth);
        context.lineTo((0.1 / 175) * settings.maskWidth,(48.8 / 175) * settings.maskWidth);
        context.bezierCurveTo((0.1 / 175) * settings.maskWidth,(44 / 175) * settings.maskWidth,(4 / 175) * settings.maskWidth,(40.199999999999996 / 175) * settings.maskWidth,(8.9 / 175) * settings.maskWidth,(40.199999999999996 / 175) * settings.maskWidth);
        context.lineTo((31.799999999999997 / 175) * settings.maskWidth,(40.199999999999996 / 175) * settings.maskWidth);
        context.bezierCurveTo((58.8 / 175) * settings.maskWidth,(40.199999999999996 / 175) * settings.maskWidth,(76.9 / 175) * settings.maskWidth,(58.89999999999999 / 175) * settings.maskWidth,(76.9 / 175) * settings.maskWidth,(87 / 175) * settings.maskWidth);
        context.bezierCurveTo((76.9 / 175) * settings.maskWidth,(115.4 / 175) * settings.maskWidth,(59.2 / 175) * settings.maskWidth,(134.5 / 175) * settings.maskWidth,(32.60000000000001 / 175) * settings.maskWidth,(134.5 / 175) * settings.maskWidth);
        context.lineTo((9.2 / 175) * settings.maskWidth,(134.5 / 175) * settings.maskWidth);
        context.bezierCurveTo((3.7 / 175) * settings.maskWidth,(134.4 / 175) * settings.maskWidth,0,(130.9 / 175) * settings.maskWidth,0,(125.8 / 175) * settings.maskWidth);

        context.moveTo((17.6 / 175) * settings.maskWidth,(118.7 / 175) * settings.maskWidth);
        context.lineTo((32 / 175) * settings.maskWidth,(118.7 / 175) * settings.maskWidth);
        context.bezierCurveTo((48.2 / 175) * settings.maskWidth,(118.7 / 175) * settings.maskWidth,(58.6 / 175) * settings.maskWidth,(106.3 / 175) * settings.maskWidth,(58.6 / 175) * settings.maskWidth,(87 / 175) * settings.maskWidth);
        context.bezierCurveTo((58.6 / 175) * settings.maskWidth,(68 / 175) * settings.maskWidth,(47.900000000000006 / 175) * settings.maskWidth,(55.8 / 175) * settings.maskWidth,(31.3 / 175) * settings.maskWidth,(55.8 / 175) * settings.maskWidth);
        context.lineTo((17.6 / 175) * settings.maskWidth,(55.8 / 175) * settings.maskWidth);
        context.lineTo((17.6 / 175) * settings.maskWidth,(118.7 / 175) * settings.maskWidth);
        context.closePath();

        context.fill();

        createPixels(settings.color);


        // manual mouse control
        nodes.container.on('mousemove', function (event) {
            mx = event.clientX;
            my = event.clientY;
            manual = true;

            clearTimeout(timer);
            timer = setTimeout(function () {
                manual = false;
            }, settings.manualTimeout);
        });
    }

    function createPixels(color) {
        // create pixels
        for (i = 0; i < totalParticles; i++) {
            p = Object.create(particle);
            p.x = p.ox = settings.offset[0] + settings.spacing * (i % cols);
            p.y = p.oy = settings.offset[1] + settings.spacing * Math.floor(i / cols);

            p.color = color;

            // set shape boundaries
            if (context.isPointInPath(p.ox, p.oy)) {
                list.push(p);
            }
        }
    }

    function step() {
        if ($document.scrollTop() <= nodes.container.outerHeight()) {
            if (tog = !tog) {
                if (!manual) {
                    t = +new Date() * 0.001 * settings.autoSpeed;
                    mx = w * 0.5 + (Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45);
                    my = h * 0.5 + (Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45);
                }

                for (i = 0; i < list.length; i++) {
                    p = list[i];

                    // brush size
                    d = (dx = mx - p.x) * dx + (dy = my - p.y) * dy;
                    f = -settings.brush / d;

                    if (d < settings.brush) {
                        t = Math.atan2(dy, dx) * settings.displacement;
                        p.vx += f * Math.cos(t);
                        p.vy += f * Math.sin(t);
                    }

                    p.x += (p.vx *= settings.drag) + (p.ox - p.x) * settings.ease;
                    p.y += (p.vy *= settings.drag) + (p.oy - p.y) * settings.ease;

                    // hide pixel when out of canvas bounds
                    p.hide = p.x < 0 || p.x > settings.width;
                }
            } else {
                b = (a = context.createImageData(w, h)).data;

                for (i = 0; i < list.length; i++) {
                    p = list[i];

                    n = (~~p.x + (~~p.y * w)) * 4;

                    b[n] = p.color[0];
                    b[n+1] = p.color[1];
                    b[n+2] = p.color[2];
                    b[n+3] = p.hide ? 0 : 255;
                }

                context.putImageData(a, 0, 0);
            }
        }

        requestAnimationFrame(step);
    }
})(jQuery);

jQuery(function () {
    canvas.init();
});
