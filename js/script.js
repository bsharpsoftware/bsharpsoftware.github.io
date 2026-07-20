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
        viewportHeight: 0,
        scale: 0,
        isMobile: 0
    };
}

function bsharp_site_domElementCreate() {
    return {
        rootFontSizeElement: bsharp_site_domElement_rootFontSizeElementCreate(),
        menuDesktopElement: bsharp_site_domElement_menuDesktopElementCreate(),
        menuMobileContainer: bsharp_site_domElement_menuMobileContainerCreate(),
        pageElement: bsharp_site_domElement_pageElementCreate()
    };
}

function bsharp_site_domElement_rootFontSizeElementCreate() {
    return {
        element: bsharp_site_domElement_rootFontSizeElement_elementGet(),
        observer:bsharp_site_domElement_rootFontSizeElement_observerCreate()
    };
}

function bsharp_site_domElement_rootFontSizeElement_elementGet() {
    var temp = document.getElementById("rootFontSizeElement");
    return temp;
}

function bsharp_site_domElement_rootFontSizeElement_observerCreate() {
    var temp = new ResizeObserver(() => {
        adjust();
    });
    return temp;
}

function bsharp_site_domElement_menuDesktopElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_elementCreate(),
        mainElement: bsharp_site_domElement_menuDesktopElement_mainElementCreate(),
        messagesElement: bsharp_site_domElement_menuDesktopElement_messagesElementCreate(),
        aboutElement: bsharp_site_domElement_menuDesktopElement_aboutElementCreate()
    };
}

function bsharp_site_domElement_menuDesktopElement_elementCreate() {
    var temp = document.createElement("div");
    temp.style.display = "flex";
    temp.style.flexWrap = "wrap";
    temp.style.alignItems = "stretch";
    temp.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
    temp.style.width = "100%";
    temp.style.height = "auto";
    temp.id = "site_domElement_menuDesktopElement_element";
    return temp;
}

function bsharp_site_domElement_menuDesktopElement_mainElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_mainElement_elementCreate()
    };
}

function bsharp_site_domElement_menuDesktopElement_mainElement_elementCreate() {
    var temp = document.createElement("img");
    temp.style.display = "flex";
    temp.style.justifyContent = "center";
    temp.style.alignItems = "center";
    temp.style.outline = "3px solid rgba(255, 255, 255, 0.0)";
    temp.style.outlineOffset = "-3px";
    temp.src = "https://bsharpsoftware.github.io/image/logo.svg";
    temp.alt = "main";
    temp.id = "site_domElement_menuDesktopElement_mainElement_element";
    return temp;
}

function bsharp_site_domElement_menuDesktopElement_messagesElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_messagesElement_elementCreate()
    };
}

function bsharp_site_domElement_menuDesktopElement_messagesElement_elementCreate() {
    var temp = document.createElement("div");
    temp.style.display = "flex";
    temp.style.justifyContent = "center";
    temp.style.alignItems = "center";
    temp.style.outline = "3px solid rgba(255, 255, 255, 0.0)";
    temp.style.outlineOffset = "-3px";
    temp.innerHTML = "Messages";
    temp.style.color = "rgba(255, 255, 255, 1.0)";
    temp.style.overflowWrap = "break-word";
    temp.id = "site_domElement_menuDesktopElement_messagesElement_element";
    return temp;
}

function bsharp_site_domElement_menuDesktopElement_aboutElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_aboutElement_elementCreate()
    };
}

function bsharp_site_domElement_menuDesktopElement_aboutElement_elementCreate() {
    var temp = document.createElement("div");
    temp.style.display = "flex";
    temp.style.justifyContent = "center";
    temp.style.alignItems = "center";
    temp.style.outline = "3px solid rgba(255, 255, 255, 0.0)";
    temp.style.outlineOffset = "-3px";
    temp.innerHTML = "About";
    temp.style.color = "rgba(255, 255, 255, 1.0)";
    temp.style.overflowWrap = "break-word";
    temp.id = "site_domElement_menuDesktopElement_aboutElement_element";
    return temp;
}

function bsharp_site_domElement_menuMobileContainerCreate() {
    return {
        hamburgerElement: bsharp_site_domElement_menuMobileContainer_hamburgerElementCreate(),
        mainElement: bsharp_site_domElement_menuMonileContainer_mainElementCreate(),
        userIsDragging: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_hamburgerElement_elementCreate(),
        hamburgerImageSelectedTrueElement: bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedTrueElementCreate(),
        hamburgerImageSelectedFalseElement: bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedFalseElementCreate(),
        hamburgerSelected: 0
    };
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElement_elementCreate() {
    var temp = document.createElement("div");
    temp.style.display = "flex";
    temp.style.flexWrap = "wrap";
    temp.style.alignItems = "stretch";
    temp.style.background = "#000000";
    temp.style.width = "100%";
    temp.style.height = "auto";
    temp.id = "site_domElement_menuMobileContainer_hamburgerElement_element";
    return temp;
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedTrueElementCreate() {
    var temp = document.createElement("img");
    temp.style.display = "flex";
    temp.style.justifyContent = "center";
    temp.style.alignItems = "center";
    temp.src = "https://bsharpsoftware.github.io/image/hamburgerMenu_1.svg";
    temp.alt = "hamTrue";
    temp.id = "site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedTrueElement";
    return temp;
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedFalseElementCreate() {
    var temp = document.createElement("img");
    temp.style.display = "flex";
    temp.style.justifyContent = "center";
    temp.style.alignItems = "center";
    temp.src = "https://bsharpsoftware.github.io/image/hamburgerMenu_0.svg";
    temp.alt = "hamFalse";
    temp.id = "site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedFalseElement";
    return temp;
}

function bsharp_site_domElement_menuMonileContainer_mainElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_elementCreate(),
        mainElement: bsharp_site_domElement_menuMobileContainer_mainElement_mainElementCreate(),
        messagesElement: bsharp_site_domElement_menuMobileContainer_mainElement_messagesElementCreate(),
        aboutElement: bsharp_site_domElement_menuMobileContainer_mainElement_aboutElementCreate()
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_elementCreate() {
    var temp = document.createElement("div");
    temp.style.position = "fixed";
    temp.style.background = "#000000";
    temp.style.width = "100%";
    temp.style.minHeight = "min-content";
    temp.style.fontSize = "0px";
    temp.style.boxSizing = "border-box";
    temp.id = "site_domElement_menuMobileContainer_mainElement_element";
    return temp;
}

function bsharp_site_domElement_menuMobileContainer_mainElement_mainElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_mainElement_elementCreate()
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_mainElement_elementCreate() {
    var temp = document.createElement("div");
    temp.style.position = "flex";
    temp.style.justifyContent = "center";
    temp.style.alignItems = "center";
    temp.style.width = "100%";
    temp.style.height = "auto";
    temp.innerHTML = "Main";
    temp.style.color = "rgba(255, 255, 255, 1.0)";
    temp.style.overflowWrap = "break-word";
    temp.id = "site_domElement_menuMobileContainer_mainElement_mainElement_element";
    return temp;
}

function bsharp_site_domElement_menuMobileContainer_mainElement_messagesElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_messagesElement_elementCreate()
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_messagesElement_elementCreate() {
    var temp = document.createElement("div");
    temp.style.position = "flex";
    temp.style.justifyContent = "center";
    temp.style.alignItems = "center";
    temp.style.width = "100%";
    temp.style.height = "auto";
    temp.innerHTML = "Messages";
    temp.style.color = "rgba(255, 255, 255, 1.0)";
    temp.style.overflowWrap = "break-word";
    temp.id = "site_domElement_menuMobileContainer_mainElement_messagesElement_element";
    return temp;
}

function bsharp_site_domElement_menuMobileContainer_mainElement_aboutElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_aboutElement_elementCreate()
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_aboutElement_elementCreate() {
    var temp = document.createElement("div");
    temp.style.position = "flex";
    temp.style.justifyContent = "center";
    temp.style.alignItems = "center";
    temp.style.width = "100%";
    temp.style.height = "auto";
    temp.innerHTML = "About";
    temp.style.color = "rgba(255, 255, 255, 1.0)";
    temp.style.overflowWrap = "break-word";
    temp.id = "site_domElement_menuMobileContainer_mainElement_aboutElement_element";
    return temp;
}

function bsharp_site_domElement_pageElementCreate() {
    return {
        element: bsharp_site_domElement_pageElement_elementCreate() //etc...
    };
}

function bsharp_site_domElement_pageElement_elementCreate() {
    var temp = document.createElement("div");
    temp.style.position = "static";
    temp.style.width = "100%";
    temp.style.overflowY = "auto";
    temp.id = "site_domElement_pageElement_element";
    return temp;
}

function bsharp_adjust() {
    site.data.viewportHeight = parseFloat(window.innerHeight);
    site.data.scale = 1.0 + ((parseFloat(getComputedStyle(document.documentElement).fontSize) - 16.0) / 16.0);
    if(parseFloat(document.documentElement.clientWidth) < 750) {
        site.data.isMobile = 1;
        site.domElement.menuMobileContainer.hamburgerElement.hamburgerSelected = 0;
        site.domElement.menuDesktopElement.element.style.display = "none";
        site.domElement.menuMobileContainer.mainElement.element.style.display = "none";
        site.domElement.menuMobileContainer.hamburgerElement.element.style.display = "flex";
        site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.display = "none";
        site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.display = "flex";
    }
    else {
        site.data.isMobile = 0;
        site.domElement.menuMobileContainer.hamburgerElement.hamburgerSelected = 0;
        site.domElement.menuMobileContainer.hamburgerElement.element.style.display = "none";
        site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.display = "none";
        site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.display = "flex";
        site.domElement.menuMobileContainer.mainElement.element.style.display = "none";
        site.domElement.menuDesktopElement.element.style.display = "flex";
    }
    site.domElement.menuDesktopElement.element.style.minHeight = (site.data.viewportHeight * 0.1).toString() + "px";
    site.domElement.menuDesktopElement.messagesElement.element.style.fontSize = (20 * site.data.scale).toString() + "px";
    site.domElement.menuDesktopElement.aboutElement.element.style.fontSize = (20 * site.data.scale).toString() + "px";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.height = (50 * site.data.scale).toString() + "px";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.height = (50 * site.data.scale).toString() + "px";
    site.domElement.menuMobileContainer.mainElement.mainElement.element.style.fontSize = (20 * site.data.scale).toString() + "px";
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.style.fontSize = (20 * site.data.scale).toString() + "px";
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.style.fontSize = (20 * site.data.scale).toString() + "px";
    site.domElement.pageElement.element.style.maxHeight = (site.data.viewportHeight * 0.9).toString() + "px";
}

function bsharp_attach() {
    site.domElement.menuMobileContainer.mainElement.element.appendChild(site.domElement.menuMobileContainer.mainElement.mainElement.element);
    site.domElement.menuMobileContainer.mainElement.element.appendChild(site.domElement.menuMobileContainer.mainElement.messagesElement.element);
    site.domElement.menuMobileContainer.mainElement.element.appendChild(site.domElement.menuMobileContainer.mainElement.aboutElement.element);
    site.domElement.menuMobileContainer.hamburgerElement.element.appendChild(site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement);
    site.domElement.menuMobileContainer.hamburgerElement.element.appendChild(site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement);
    site.domElement.menuDesktopElement.element.appendChild(site.domElement.menuDesktopElement.mainElement.element);
    site.domElement.menuDesktopElement.element.appendChild(site.domElement.menuDesktopElement.messagesElement.element);
    site.domElement.menuDesktopElement.element.appendChild(site.domElement.menuDesktopElement.aboutElement.element);
    document.body.appendChild(site.domElement.menuDesktopElement.element);
    document.body.appendChild(site.domElement.menuMobileContainer.hamburgerElement.element);
    document.body.appendChild(site.domElement.menuMobileContainer.mainElement.element);
    document.body.appendChild(site.domElement.pageElement.element);
}

function bsharp_create() {
    site = bsharp_siteCreate();
    bsharp_adjust();
    bsharp_attach();
}

window.addEventListener("load", bsharp_create);
window.addEventListener("resize", bsharp_adjust);

//to do: testing. fixing inevitable bugs. add functionality. work on page content gradually.
