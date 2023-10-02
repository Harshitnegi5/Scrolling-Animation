var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part2",
    start: "0% 90%",
    end: "180% 90%",
    // markers: "true",
    scrub: "true",
}})

tl.to(".strip-l",{
    marginLeft: "0%",
}, 'move')

tl.to(".strip-r",{
    marginLeft: "-50%",
},'move')