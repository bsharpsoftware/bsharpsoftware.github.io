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
        pageElement: 0
    };
}

function bsharp_site_domElement_rootFontSizeElementCreate() {
    return {
        element: bsharp_site_domElement_rootFontSizeElement_elementCreate(),
        observer:bsharp_site_domElement_rootFontSizeElement_observerCreate()
    };
}

function bsharp_site_domElement_rootFontSizeElement_elementCreate() {

}

function bsharp_site_domElement_rootFontSizeElement_observerCreate() {

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

}

function bsharp_site_domElement_menuMobileContainerCreate() {
    return {
        hamburgerContainer: bsharp_site_domElement_menuMobileContainer_hamburgerContainerCreate(),
        mainElement: bsharp_site_domElement_menuMonileContainer_mainElementCreate(),
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_hamburgerContainerCreate() {
    return {
        hamburgerImageSelectedTrueElement: bsharp_site_domElement_menuMobileContainer_hamburgerContainer_hamburgerImageSelectedTrueElementCreate(),
        hamburgerImageSelectedFalseElement: bsharp_site_domElement_menuMobileContainer_hamburgerContainer_hamburgerImageSelectedFalseElementCreate(),
        hamburgerSelected: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_hamburgerContainer_hamburgerImageSelectedTrueElementCreate() {

}

function bsharp_site_domElement_menuMobileContainer_hamburgerContainer_hamburgerImageSelectedFalseElementCreate() {

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
