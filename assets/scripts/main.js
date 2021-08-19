console.log("🥲 Trna be hackerman??");
lax.init();

lax.addDriver('scrollY', function() {
    return window.scrollY;
}, {
    easing: "easeInOutQuint",
    frameStep: 0.5
});


// Hero animation

const OFFSET = -250;
const BASE_MOVEMENT = -70;
const STAGGER = 30;

lax.addElements('.slide-right', {
    scrollY: {
        translateX: [
            ["elInY", "elCenterY"],
            [100, 0]
        ]
    }
});

lax.addElements('.slide-up', {
    scrollY: {
        translateY: [
            ["elInY", "elOutY"],
            [OFFSET, BASE_MOVEMENT]
        ]
    }
});

lax.addElements('.slide-up-alt1', {
    scrollY: {
        translateY: [
            ["elInY", "elOutY"],
            [OFFSET, BASE_MOVEMENT + STAGGER]
        ]
    }
});

lax.addElements('.slide-up-alt2', {
    scrollY: {
        translateY: [
            ["elInY", "elOutY"],
            [OFFSET, BASE_MOVEMENT + 2 * STAGGER]
        ]
    }
});