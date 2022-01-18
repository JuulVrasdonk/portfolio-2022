export default function aboutMeChoreo() {

    function headingAnimation() {
        let tl = gsap.timeline();
        tl.from("header .wrapping-paper", {
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

    function imageAnimation() {
        if(window.matchMedia("(min-width: 576px)").matches) {
            let tl = gsap.timeline();
            tl.from(".image-of-me", {
                duration: 4,
                opacity: 0,
                y: 200,
                ease: "power4.out"
            })
            tl.from(".image-of-me", {
                scale: 1.2,
            },"<")
        return tl;
        }
    }

    function navAppearance() {
        let tl = gsap.timeline()
        tl.from("nav, header > div", {
            duration: 2,
            ease: "power4.out",
            opacity: 0,
            stagger: .2
        })
        return tl
    }

    function pinnedHeading() {
        if(window.matchMedia("(min-width: 576px)").matches) {
            let tl = gsap.timeline();
            tl.to("h1", {
                y: 50,
                scrollTrigger: {
                    trigger: "h1", 
                    start: "top top+=15%",
                    end: "top top",
                    scrub: .7
                }
            })
            return tl;
        }
        
    }

    function meStatsTl() {
        function textAppearance() {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "main ul",
                    start: "top-=40px center"
                }
            });
            tl.from("main ul li", {
                duration: 2,
                ease: "power4.out",
                opacity: 0,
                stagger: .2
            })
        }

        let tl = gsap.timeline()
            .add(textAppearance())
        return tl
    }

    function personTl() {
        function textAppearance() {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "main article:first-of-type",
                    start: "center-=20% center"
                }
            });
            tl.from("main article:first-of-type h3 .wrapping-paper", {
                duration: .8,
                y: -120,
                stagger: .2,
                ease: "power4.out",
                autoAlpha: 0,
                opacity: 0,
                scale: .9
            })
            tl.from("main article:first-of-type p", {
                duration: 2,
                ease: "power4.out",
                opacity: 0
            }, "-=1")
        }

        let tl = gsap.timeline()
            .add(textAppearance())
        return tl
    }

    function designerTl() {
        function textAppearance() {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "main article:nth-of-type(2)",
                    start: "center-=20% center"
                }
            });
            tl.from("main article:nth-of-type(2) h3 .wrapping-paper", {
                duration: .8,
                y: -120,
                stagger: .2,
                ease: "power4.out",
                autoAlpha: 0,
                opacity: 0,
                scale: .9
            })
            tl.from("main article:nth-of-type(2) p", {
                duration: 2,
                ease: "power4.out",
                opacity: 0
            }, "-=1")
        }

        let tl = gsap.timeline()
            .add(textAppearance())
        return tl
    }

    function developerTl() {
        function textAppearance() {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "main article:nth-of-type(3)",
                    start: "center-=20% center"
                }
            });
            tl.from("main article:nth-of-type(3) h3 .wrapping-paper", {
                duration: .8,
                y: -120,
                stagger: .2,
                ease: "power4.out",
                autoAlpha: 0,
                opacity: 0,
                scale: .9
            })
            tl.from("main article:nth-of-type(3) p", {
                duration: 2,
                ease: "power4.out",
                opacity: 0
            }, "-=1")
            tl.from("main article:nth-of-type(3) a", {
                duration: 2,
                ease: "power4.out",
                opacity: 0
            }, "-=1.8")

        }

        let tl = gsap.timeline()
            .add(textAppearance())
        return tl
    }

    let master = gsap.timeline({
        delay: .7
    })
        .add(navAppearance())  
        .add(headingAnimation(),"<")
        .add(imageAnimation(),"-=1.5")
        .add(pinnedHeading())
        .add(meStatsTl())
        .add(personTl())
        .add(designerTl())
        .add(developerTl())
}