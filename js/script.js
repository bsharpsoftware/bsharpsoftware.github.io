var site = 0;

function bsharp_siteCreate() {
    return {
        data: bsharp_site_dataCreate(),
        domElement: bsharp_site_domElementCreate()
    };
}

function bsharp_site_dataCreate() {
    return {
        currentPageIndex: 0,
        widthRelativeTo1920Scale: 0,
        fontSizeRelativeToRemScale: 0,
        isMobile: 0
    };
}

function bsharp_site_domElementCreate() {
    return {
        rootFontSizeElement: bsharp_site_domElement_rootFontSizeElementCreate(),
        menuDesktopElement: bsharp_site_domElement_menuDesktopElementCreate(),
        menuMobileContainer: bsharp_site_domElement_menuMobileContainerCreate(),
        pageElement: bsharp_site_domElement_pageElementCreate();
    };
}

function bsharp_site_domElement_rootFontSizeElementCreate() {
    return {
        element: bsharp_site_domElement_rootFontSizeElement_elementGet(),
        observer:bsharp_site_domElement_rootFontSizeElement_observerCreate()
    };
}

function bsharp_site_domElement_rootFontSizeElement_elementGet() {
    site.domElement.rootFontSizeElement.element = document.getElementById("rootFontSizeElement");
}

function bsharp_site_domElement_rootFontSizeElement_observerCreate() {
    site.domElement.rootFontSizeElement.observer = new ResizeObserver(() => {
        adjust();
    });
}

function bsharp_site_domElement_menuDesktopElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_elementCreate(),
        mainElement: bsharp_site_domElement_menuDesktopElement_mainElementCreate(),
        messagesElement: bsharp_site_domElement_menuDesktopElement_messagesElementCreate(),
        aboutElement: bsharp_site_domElement_menuDesktopElement_aboutElementCreate(),
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuDesktopElement_elementCreate() {
    site.domElement.menuDesktopElement.element = document.createElement("div");
    site.domElement.menuDesktopElement.element.style.position = "absolute";
    site.domElement.menuDesktopElement.element.style.left = "0px";
    site.domElement.menuDesktopElement.element.style.top = "0px";
    site.domElement.menuDesktopElement.element.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
    site.domElement.menuDesktopElement.element.style.fontSize = "0px";
    site.domElement.menuDesktopElement.element.style.width = "100%";
    site.domElement.menuDesktopElement.element.style.minWidth = "min-content";
    site.domElement.menuDesktopElement.element.style.boxSizing = "border-box";
    site.domElement.menuDesktopElement.element.id = "site_domElement_menuDesktopElement_element";
}

function bsharp_site_domElement_menuDesktopElement_mainElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_mainElement_elementCreate(),
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuDesktopElement_mainElement_elementCreate() {
    site.domElement.menuDesktopElement.mainElement.element = document.createElement("img");
    site.domElement.menuDesktopElement.mainElement.element.style.position = "inline-block";
    site.domElement.menuDesktopElement.mainElement.element.style.left = "0px";
    site.domElement.menuDesktopElement.mainElement.element.style.top = "0px";
    site.domElement.menuDesktopElement.mainElement.element.style.outline = "3px solid rgba(255, 255, 255, 0.0)";
    site.domElement.menuDesktopElement.mainElement.element.style.outlineOffset("-3px");
    site.domElement.menuDesktopElement.mainElement.element.src = "https://bsharpsoftware.github.io/image/logo.svg";
    site.domElement.menuDesktopElement.mainElement.element.alt = "main";
    site.domElement.menuDesktopElement.mainElement.element.style.width = "auto";
    site.domElement.menuDesktopElement.mainElement.element.id = "site_domElement_menuDesktopElement_mainElement_element";
}

function bsharp_site_domElement_menuDesktopElement_messagesElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_messagesElement_elementCreate(),
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuDesktopElement_messagesElement_elementCreate() {
    site.domElement.menuDesktopElement.messagesElement.element = document.createElement("div");
    site.domElement.menuDesktopElement.messagesElement.element.style.position = "inline-block";
    site.domElement.menuDesktopElement.messagesElement.element.style.top = "0px";
    site.domElement.menuDesktopElement.messagesElement.element.style.outline = "3px solid rgba(255, 255, 255, 0.0)";
    site.domElement.menuDesktopElement.messagesElement.element.style.outlineOffset("-3px");
    site.domElement.menuDesktopElement.messagesElement.element.innerHTML = "Messages";
    site.domElement.menuDesktopElement.messagesElement.element.style.color = rgba(255, 255, 255, 1.0);
    site.domElement.menuDesktopElement.messagesElement.element.id = "site_domElement_menuDesktopElement_messagesElement_element";
}

function bsharp_site_domElement_menuDesktopElement_aboutElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_aboutElement_elementCreate(),
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuDesktopElement_aboutElement_elementCreate() {
    site.domElement.menuDesktopElement.aboutElement.element = document.createElement("div");
    site.domElement.menuDesktopElement.aboutElement.element.style.position = "inline-block";
    site.domElement.menuDesktopElement.aboutElement.element.style.top = "0px";
    site.domElement.menuDesktopElement.aboutElement.element.style.outline = "3px solid rgba(255, 255, 255, 0.0)";
    site.domElement.menuDesktopElement.aboutElement.element.style.outlineOffset("-3px");
    site.domElement.menuDesktopElement.aboutElement.element.innerHTML = "About";
    site.domElement.menuDesktopElement.aboutElement.element.style.color = rgba(255, 255, 255, 1.0);
    site.domElement.menuDesktopElement.aboutElement.element.id = "site_domElement_menuDesktopElement_aboutElement_element";
}

function bsharp_site_domElement_menuMobileContainerCreate() {
    return {
        hamburgerElement: bsharp_site_domElement_menuMobileContainer_hamburgerElementCreate(),
        mainElement: bsharp_site_domElement_menuMonileContainer_mainElementCreate(),
        userIsDragging: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_hamburgerElement_elementCreate(),
        hamburgerImageSelectedTrueElement: bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedTrueElementCreate(),
        hamburgerImageSelectedFalseElement: bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedFalseElementCreate(),
        hamburgerSelected: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElement_elementCreate() {
    site.domElement.menuMobileContainer.hamburgerElement.element = document.createElement("div");
    site.domElement.menuMobileContainer.hamburgerElement.element.style.position = "absolute";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.left = "0px";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.top = "0px";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.background = "#000000";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.minWidth = "min-content";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.minHeight = "min-content";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.fontSize = "0px";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.boxSizing = "border-box";
    site.domElement.menuMobileContainer.hamburgerElement.element.id = "site_domElement_menuMobileContainer_hamburgerElement_element";
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedTrueElementCreate() {
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement = document.createElement("img");
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.position = "inline-block";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.right = "10px";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.top = "0px";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.src = "https://bsharpsoftware.github.io/image/hamburgerMenu_1.svg";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.alt = "hamTrue";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.width = "auto";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.id = "site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedTrueElement";
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedFalseElementCreate() {
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement = document.createElement("img");
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.position = "inline-block";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.right = "10px";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.top = "0px";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.src = "https://bsharpsoftware.github.io/image/hamburgerMenu_0.svg";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.alt = "hamFalse";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.width = "auto";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.id = "site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedFalseElement";
}

function bsharp_site_domElement_menuMonileContainer_mainElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_elementCreate(),
        mainElement: bsharp_site_domElement_menuMobileContainer_mainElement_mainElementCreate(),
        messagesElement: bsharp_site_domElement_menuMobileContainer_mainElement_messagesElementCreate(),
        aboutElement: bsharp_site_domElement_menuMobileContainer_mainElement_aboutElementCreate(),
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_elementCreate() {
    site.domElement.menuMobileContainer.hamburgerElement.element = document.createElement("div");
    site.domElement.menuMobileContainer.hamburgerElement.element.style.position = "absolute";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.left = "0px";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.background = "#000000";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.width = "100%";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.minWidth = "min-content";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.minHeight = "min-content";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.fontSize = "0px";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.boxSizing = "border-box";
    site.domElement.menuMobileContainer.hamburgerElement.element.id = "site_domElement_menuMobileContainer_hamburgerElement_element";
}

function bsharp_site_domElement_menuMobileContainer_mainElement_mainElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_mainElement_elementCreate(),
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_mainElement_elementCreate() {

}

function bsharp_site_domElement_menuMobileContainer_mainElement_messagesElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_messagesElement_elementCreate(),
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_messagesElement_elementCreate() {

}

function bsharp_site_domElement_menuMobileContainer_mainElement_aboutElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_aboutElement_elementCreate(),
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_aboutElement_elementCreate() {

}

function bsharp_site_domElement_pageElementCreate() {
    return {
        element: bsharp_site_domElement_pageElement_elementCreate(), //etc...
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_pageElement_elementCreate() {

}

function bsharp_attach() {

}

function bsharp_adjust() {

}

function bhsarp_create() {
    site = bsharp_siteCreate();
    bsharp_attach();
    bsharp_adjust();
}

window.addEventListener("load", bsharp_create);
window.addEventListener("resize", bsharp_adjust);
