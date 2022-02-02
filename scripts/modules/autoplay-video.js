export default function autoplay() {
    let videos = document.querySelectorAll(".vid")

    videos.forEach((video) => {
    ScrollTrigger.create({
        trigger: video,
        start: 'top center-=5%',
        end: 'center top',
        onEnter: () => video.play(),
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
    });
    
    });
}
