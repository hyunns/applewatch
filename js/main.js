(function() {
    // gnb열기
    $('header .icon_nav').on('click', function(e) {
        e.preventDefault();

        $('header .gnb').addClass('open');
        $('header .dimm').stop().fadeIn(300);
        $('body').addClass('hidden');
    });

    // gnb닫기
    $('header .btn_close').on('click', function(e) {
        e.preventDefault();

        $('header .gnb').removeClass('open');
        $('header .dimm').stop().fadeOut(300);
        $('body').removeClass('hidden');
    });

    $('header .dimm').on('click', function(e) {
        e.preventDefault();

        $('header .gnb').removeClass('open');
        $('header .dimm').stop().fadeOut(300);
        $('body').removeClass('hidden');
    });

    gsap.registerPlugin(ScrollTrigger);

    // loading 타임라인 
    let loadTl = gsap.timeline({ defaults: {duration: 0.7, ease: 'Power3.InOut', delay:1, } });
    
    loadTl.to('.loading_content', 2.5, { y: '-100vh', },)
    loadTl.to('.loading_bg', { y: '-101%', transformOrigin: '50% 0', stagger: -0.07, }, .08)
    loadTl.to('.loading', {duration: 2, opacity: 0, }, 1)
    loadTl.to('.loading', { visibility:'hidden', })
    loadTl.to('header .icon_nav', {x: 0, opacity: 1, ease: 'none',}, .5)
    
    // 전체 타임라인
    let tl = gsap.timeline();
    const headTxt = new SplitType('.intro h2>span span', { types: 'words, chars', });

    tl.fromTo(headTxt.chars, { opacity: 0, y: '-30vh', rotationX: 90, }, { opacity: 1, y: '0vh', dutaion: 0.7, transformOrigin: '50% 25%', stagger: -.15, rotationX: 0, }, 2.5)
    .to('.intro .heading h2', { scrollTrigger: { trigger: '.intro', start: 'top', scrub: 1, pin: '.intro .heading', }, duration: 1, y: '-300vh', });

    // intro
    let intro = gsap.timeline({ scrollTrigger: { trigger: '.intro', start: 'top', end: '+=5000', scrub: 2, pin: true, } })
    intro.to('.intro h2', {y: '-420vh', duration: 5})
    intro.to('.intro_img', {bottom: '0', height:'100vh', duration: 2}, '-=2')
    intro.to('.intro_img', {left: '-50%', duration: 3})
    intro.to('.intro02_img', {width: '100%', duration: 3}, '-=3.5')
    intro.to('.black_bg', {right: '0', duration: 3})
    intro.set('.txt_box', {visibility: 'visible'}, '-=5')
    intro.to('.txt_box span.txt01', {x: 0, duration: 5}, '-=3')
    intro.to('.txt_box span.txt02', {x: 0, duration: 5}, '-=6')
    intro.to('.txt_box span.txt03', {x: 0, duration: 5}, '-=4')
    intro.to('.txt_box span.txt04', {y: 0, duration: 3}, '-=2')

    // watch circle
    let watch = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top', end: '+=3000', scrub: 1, pin: true, } })
    watch.to('.hero_circle', { scale: 1, top: 1000, rotation: -90, duration: 3, })
    watch.to('.hero_circle', { rotation: -162, duration: 3, delay: 1 })
    watch.to('.hero', {background: '#000', duration: 1}, '-=1')
    watch.to('.watch_hardware.dark', {duration: 1, opacity: 1 }, '-=1')

    watch.fromTo('.hero .txt_wrap h2', {opacity:0}, {opacity:1, duration: 2})
    watch.fromTo('.hero .txt_wrap p', {opacity:0}, {opacity:1, duration: 2})
    
    // prod
    let prodTit = gsap.timeline({ scrollTrigger: {trigger: '.prod', start: 'top center',}})
    prodTit.fromTo('.prod .tit', { opacity: 0, y: '50%', }, {opacity: 1, y: 0, duration: 2,})

    let prod1 = gsap.timeline({ scrollTrigger: {trigger: '.prod1', start:'top 100%'}})
    prod1.fromTo('.prod1 img_wrap', { autoAlpha: 0, y: '50%',}, {duration:1, autoAlpha:1, y:0})
    .to('.prod1 .img_wrap>img', {duration:1, scale: 1})
    .fromTo('.prod1 .txt_wrap *', { autoAlpha: 0, y: '100%', }, {duration: 1, autoAlpha: 1, y: 0, stagger: 0.1, })

    let prod2 = gsap.timeline({ scrollTrigger: {trigger: '.prod2', start:'top 100%'}})
    prod2.fromTo('.prod2 img_wrap', { autoAlpha: 0, y: '50%',}, {duration:1, autoAlpha:1, y:0})
    .to('.prod2 .img_wrap>img', {duration:1, scale: 1})
    .fromTo('.prod2 .txt_wrap *', { autoAlpha: 0, y: '100%', }, {duration: 1, autoAlpha: 1, y: 0, stagger: 0.1, })
    
    let prod3 = gsap.timeline({ scrollTrigger: {trigger: '.prod3', start:'top 100%'}})
    prod3.fromTo('.prod3 img_wrap', { autoAlpha: 0, y: '50%',}, {duration:1, autoAlpha:1, y:0})
    .to('.prod3 .img_wrap>img', {duration:1, scale: 1})
    .fromTo('.prod3 .txt_wrap *', { autoAlpha: 0, y: '100%', }, {duration: 1, autoAlpha: 1, y: 0, stagger: 0.1, })

    // band
    let band = gsap.timeline({ scrollTrigger: { trigger: '.bands .bands_bg', start: 'top 80%', end: '-=200', scrub: 1, } })
    // band.to('.bands .bands_bg', { duration: 2, 'background-position-x': 'calc(50% - 184px)', delay: 1,})
    band.to('.bands .bands_bg', { duration: 2, 'background-position-x': 'calc(50% - 354px)', delay: 1,})
    // band.to('.bands .bands_bg', { duration: 2, 'background-position-x': 'calc(50% - 520px)', delay: 1,})

    gsap.to('.grid_wrap .motion01', { scrollTrigger: { trigger: '.grid_wrap', start: 'top 80%', scrub: 2, }, y: 90,})
    gsap.to('.grid_wrap .motion02', { scrollTrigger: { trigger: '.grid_wrap', start: 'top 80%', end: '+=2000', scrub: 2, }, y: -90,})

    let tl1 = gsap.timeline({ defaults: { duration: 1, delay: 1 }, scrollTrigger: { trigger: '.complication', start: 'top top', end: '+=3000', scrub: 1, pin: true, } })
    tl1.to('.icon_border .bg1', { 'margin-top': -75, })
    .to('.icon_border .bg2', { 'margin-top': -75, })
    .to('.icon_border .bg3', { 'margin-top': -75, })
    .to('.icon_border .bg4', { 'margin-top': -75, })

    let tl2 = gsap.timeline({ defaults: { duration: 1, delay: 1 }, scrollTrigger: { trigger: '.complication', start: 'top top', end: '+=3000', scrub: 1, } })
    tl2.to('.txt_change .txt1', { 'margin-top': -45, })
    .to('.txt_change .txt2', { 'margin-top': -45, })
    .to('.txt_change .txt3', { 'margin-top': -45, })
    .to('.txt_change .txt4', { 'margin-top': -45, })

    let tl3 = gsap.timeline({ defaults: { duration: 1, delay: 1 }, scrollTrigger: { trigger: '.complication', start: 'top top', end: '+=3000', scrub: 1, } })
    tl3.to('.complication .current', { y: -30, })
    .to('.complication .current', { y : -60, })
    .to('.complication .current', { y : -90, })
    .to('.complication .current', { y : -120, })

    // complication
    let total = $('.txt_change em').length;
    console.log(total);
    $('.total').html(total);

    $('.depth1>li>a').on('click', function(e) {
        e.preventDefault();

        sub = $(this).siblings('.sub');
        h = sub.find('.depth2').outerHeight();

        if($(this).hasClass('active')) {
            $('.depth1>li>a').removeClass('active');
            $('.depth1 .sub').stop().animate({height: 0}, 300);
        } else {
            $('.depth1>li>a').removeClass('active');
            $(this).addClass('active');
            $('.depth1 .sub').stop().animate({height: 0}, 300);
            sub.stop().animate({height: h}, 300);
        }
    });
})();