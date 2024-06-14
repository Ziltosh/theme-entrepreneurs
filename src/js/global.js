const getDevice = () => {
    if (typeof window === "undefined") {
        return { device: "server", breakpoint: Infinity };
    }

    if (window.innerWidth <= 420) {
        return { device: "mobile", breakpoint: 420 };
    } else if (window.innerWidth <= 768) {
        return { device: "tablet", breakpoint: 768 };
    } else if (window.innerWidth <= 1280) {
        return { device: "laptop", breakpoint: 1280 };
    } else {
        return { device: "desktop", breakpoint: Infinity };
    }
};

let { device, breakpoint } = getDevice();

const calculateRem = () => {
    // TODO: Fix, under 375px it's mixing px values
    if (typeof window === "undefined") return;
    if (window.innerWidth > 1920 || window.innerWidth < 420) {
        document.documentElement.style.fontSize = "16px";
        return;
    } else {
        let rem = 16;
        if (window.innerWidth > 1280) {
            rem = (16 / 1920) * window.innerWidth;
        } else if (window.innerWidth > 768) {
            rem = (16 / 1280) * window.innerWidth;
        } else if (window.innerWidth > 420) {
            rem = (16 / 768) * window.innerWidth;
        }
        document.documentElement.style.fontSize = `${rem}px`;
    }
};

const handleResize = () => {
    const { device: newDevice, breakpoint: newBreakpoint } = getDevice();
    if (newBreakpoint !== breakpoint) {
        device = newDevice;
        breakpoint = newBreakpoint;
    }
    return device;
};


calculateRem();
window.addEventListener("resize", () => {
    console.log("resize")
    calculateRem();
    handleResize();
});