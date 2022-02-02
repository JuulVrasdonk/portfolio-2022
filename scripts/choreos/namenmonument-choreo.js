export default function namenmonumentChoreo() {
    function headingAnimation() {
        let tl = gsap.timeline();
        tl.from("h1 .wrapping-paper", {
            duration: .8,
            y: -120,
            stagger: .2,
            ease: "power4.out",
            autoAlpha: 0,
            opacity: 0,
            scale: .9,
        })
        return tl
    }
    function introTextAnimation() {
        let tl = gsap.timeline();
        tl.from("header > div div:first-of-type p", {
            duration: 2,
            ease: "power4.out",
            opacity: 0
        })
        return tl;
    }

    function projectStatsAnimation() {
        let tl = gsap.timeline();

        tl.from("header > div ul li", {
            duration: 2,
            ease: "power4.out",
            opacity: 0,
            stagger: .2
        })
        return tl;
    }

    if(window.matchMedia("(min-width: 576px)").matches) {
        gsap.to(".scroll",{
            y: -110,
            opacity: 0,
            scrollTrigger: {
                trigger: "h1", 
                start: "top top+=25%",
                end: "top top",
                scrub: .2
            }
        })
    }

    let master = gsap.timeline({
        delay: 2
    })  
        .add(headingAnimation(), "<")
        .add(introTextAnimation(), "-=0.5")
        .add(projectStatsAnimation(), "-=2")


    // *********** MAIN *********** //

    
    let designChallengeTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#designChallenge",
            start: "top-=20% center"
        }
    });
    designChallengeTl.from("#designChallenge h2 .wrapping-paper", {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9,
    })
    .from("#designChallenge p, #designChallenge h3, #designChallenge img", {
        duration: 2,
        ease: "power4.out",
        opacity: 0,
        stagger: .2
    },"-=0.6") 



    let bigScreenTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#groteScherm",
            start: "top-=20% center"
        }
    });
    bigScreenTl.from("#groteScherm h2 .wrapping-paper", {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9,
    })
    .from("#groteScherm p, #groteScherm h3, #groteScherm img", {
        duration: 2,
        ease: "power4.out",
        opacity: 0,
        stagger: .2
    },"-=0.6") 


    let touchscreenTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#touchscreens",
            start: "top-=20% center"
        }
    });
    touchscreenTl.from("#touchscreens h2 .wrapping-paper", {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9,
    })
    .from("#touchscreens p, #touchscreens h3, #touchscreens img", {
        duration: 2,
        ease: "power4.out",
        opacity: 0,
        stagger: .2
    },"-=0.6") 


    let storiesTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#verhalen",
            start: "top-=20% center"
        }
    });
    storiesTl.from("#verhalen h2 .wrapping-paper", {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9,
    })
    .from("#verhalen p, #verhalen h3, #verhalen img", {
        duration: 2,
        ease: "power4.out",
        opacity: 0,
        stagger: .2
    },"-=0.6") 


    let interactionTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#interactie",
            start: "top-=10% center"
        }
    });
    interactionTl.from("#interactie h2 .wrapping-paper", {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        autoAlpha: 0,
        opacity: 0,
        scale: .9,
    })
    .from("#interactie p, #interactie h3, #interactie img", {
        duration: 2,
        ease: "power4.out",
        opacity: 0,
        stagger: .2
    },"-=0.6") 
        
}