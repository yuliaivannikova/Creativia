// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(container, {
    strokeWidth: 6,
    easing: 'easeInOut',
    color: '#12E193',
    trailColor: '#646883',
    trailWidth: 1,
    svgStyle: null
});

bar.animate(0.68, {
    duration: 800
}); // Number from 0.0 to 1.0