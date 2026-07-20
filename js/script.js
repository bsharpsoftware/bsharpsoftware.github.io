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
        aboutElement: bsharp_site_domElement_menuDesktopElement_aboutElementCreate()
    };
}

function bsharp_site_domElement_menuDesktopElement_elementCreate() {
    site.domElement.menuDesktopElement.element = document.createElement("div");
    site.domElement.menuDesktopElement.element.style.display = "flex";
    site.domElement.menuDesktopElement.element.style.flexWrap = "wrap";
    site.domElement.menuDesktopElement.element.style.alignItems = "stretch";
    site.domElement.menuDesktopElement.element.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
    site.domElement.menuDesktopElement.element.style.width = "100%";
    site.domElement.menuDesktopElement.element.style.height = "auto";
    site.domElement.menuDesktopElement.element.id = "site_domElement_menuDesktopElement_element";
}

function bsharp_site_domElement_menuDesktopElement_mainElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_mainElement_elementCreate()
    };
}

function bsharp_site_domElement_menuDesktopElement_mainElement_elementCreate() {
    site.domElement.menuDesktopElement.mainElement.element = document.createElement("img");
    site.domElement.menuDesktopElement.mainElement.element.style.display = "flex";
    site.domElement.menuDesktopElement.mainElement.element.style.justifyContent = "center";
    site.domElement.menuDesktopElement.mainElement.element.style.alignItems = "center";
    site.domElement.menuDesktopElement.mainElement.element.style.outline = "3px solid rgba(255, 255, 255, 0.0)";
    site.domElement.menuDesktopElement.mainElement.element.style.outlineOffset("-3px");
    site.domElement.menuDesktopElement.mainElement.element.src = "https://bsharpsoftware.github.io/image/logo.svg";
    site.domElement.menuDesktopElement.mainElement.element.alt = "main";
    site.domElement.menuDesktopElement.mainElement.element.id = "site_domElement_menuDesktopElement_mainElement_element";
}

function bsharp_site_domElement_menuDesktopElement_messagesElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_messagesElement_elementCreate()
    };
}

function bsharp_site_domElement_menuDesktopElement_messagesElement_elementCreate() {
    site.domElement.menuDesktopElement.messagesElement.element = document.createElement("div");
    site.domElement.menuDesktopElement.messagesElement.element.style.display = "flex";
    site.domElement.menuDesktopElement.messagesElement.element.style.justifyContent = "center";
    site.domElement.menuDesktopElement.messagesElement.element.style.alignItems = "center";
    site.domElement.menuDesktopElement.messagesElement.element.style.outline = "3px solid rgba(255, 255, 255, 0.0)";
    site.domElement.menuDesktopElement.messagesElement.element.style.outlineOffset("-3px");
    site.domElement.menuDesktopElement.messagesElement.element.innerHTML = "Messages";
    site.domElement.menuDesktopElement.messagesElement.element.style.color = rgba(255, 255, 255, 1.0);
    site.domElement.menuDesktopElement.messagesElement.element.style.overflowWrap = "break-word";
    site.domElement.menuDesktopElement.messagesElement.element.id = "site_domElement_menuDesktopElement_messagesElement_element";
}

function bsharp_site_domElement_menuDesktopElement_aboutElementCreate() {
    return {
        element: bsharp_site_domElement_menuDesktopElement_aboutElement_elementCreate()
    };
}

function bsharp_site_domElement_menuDesktopElement_aboutElement_elementCreate() {
    site.domElement.menuDesktopElement.aboutElement.element = document.createElement("div");
    site.domElement.menuDesktopElement.aboutElement.element.style.display = "flex";
    site.domElement.menuDesktopElement.aboutElement.element.style.justifyContent = "center";
    site.domElement.menuDesktopElement.aboutElement.element.style.alignItems = "center";
    site.domElement.menuDesktopElement.aboutElement.element.style.outline = "3px solid rgba(255, 255, 255, 0.0)";
    site.domElement.menuDesktopElement.aboutElement.element.style.outlineOffset("-3px");
    site.domElement.menuDesktopElement.aboutElement.element.innerHTML = "About";
    site.domElement.menuDesktopElement.aboutElement.element.style.color = rgba(255, 255, 255, 1.0);
    site.domElement.menuDesktopElement.aboutElement.element.style.overflowWrap = "break-word";
    site.domElement.menuDesktopElement.aboutElement.element.id = "site_domElement_menuDesktopElement_aboutElement_element";
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
    site.domElement.menuMobileContainer.hamburgerElement.element = document.createElement("div");
    site.domElement.menuMobileContainer.hamburgerElement.element.style.display = "flex";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.flexWrap = "wrap";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.alignItems = "stretch";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.background = "#000000";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.width = "100%";
    site.domElement.menuMobileContainer.hamburgerElement.element.style.height = "auto";
    site.domElement.menuMobileContainer.hamburgerElement.element.id = "site_domElement_menuMobileContainer_hamburgerElement_element";
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedTrueElementCreate() {
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement = document.createElement("img");
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.display = "flex";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.justifyContent = "center";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.style.alignItems = "center";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.src = "https://bsharpsoftware.github.io/image/hamburgerMenu_1.svg";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.alt = "hamTrue";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedTrueElement.id = "site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedTrueElement";
}

function bsharp_site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedFalseElementCreate() {
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement = document.createElement("img");
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.display = "flex";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.justifyContent = "center";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.style.alignItems = "center";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.src = "https://bsharpsoftware.github.io/image/hamburgerMenu_0.svg";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.alt = "hamFalse";
    site.domElement.menuMobileContainer.hamburgerElement.hamburgerImageSelectedFalseElement.id = "site_domElement_menuMobileContainer_hamburgerElement_hamburgerImageSelectedFalseElement";
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
    site.domElement.menuMobileContainer.mainElement.element = document.createElement("div");
    site.domElement.menuMobileContainer.mainElement.element.style.position = "fixed";
    site.domElement.menuMobileContainer.mainElement.element.style.background = "#000000";
    site.domElement.menuMobileContainer.mainElement.element.style.width = "100%";
    site.domElement.menuMobileContainer.mainElement.element.style.minHeight = "min-content";
    site.domElement.menuMobileContainer.mainElement.element.style.fontSize = "0px";
    site.domElement.menuMobileContainer.mainElement.element.style.boxSizing = "border-box";
    site.domElement.menuMobileContainer.mainElement.element.id = "site_domElement_menuMobileContainer_mainElement_element";
}

function bsharp_site_domElement_menuMobileContainer_mainElement_mainElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_mainElement_elementCreate()
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_mainElement_elementCreate() {
    site.domElement.menuMobileContainer.mainElement.mainElement.element = document.createElement("div");
    site.domElement.menuMobileContainer.mainElement.mainElement.element.style.position = "flex";
    site.domElement.menuMobileContainer.mainElement.mainElement.element.style.justifyContent = "center";
    site.domElement.menuMobileContainer.mainElement.mainElement.element.style.alignItems = "center";
    site.domElement.menuMobileContainer.mainElement.mainElement.element.style.width = "100%";
    site.domElement.menuMobileContainer.mainElement.mainElement.element.style.height = "auto";
    site.domElement.menuMobileContainer.mainElement.mainElement.element.innerHTML = "Main";
    site.domElement.menuMobileContainer.mainElement.mainElement.element.style.color = rgba(255, 255, 255, 1.0);
    site.domElement.menuMobileContainer.mainElement.mainElement.element.style.overflowWrap = "break-word";
    site.domElement.menuMobileContainer.mainElement.mainElement.element.id = "site_domElement_menuMobileContainer_mainElement_mainElement_element";
}

function bsharp_site_domElement_menuMobileContainer_mainElement_messagesElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_messagesElement_elementCreate()
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_messagesElement_elementCreate() {
    site.domElement.menuMobileContainer.mainElement.messagesElement.element = document.createElement("div");
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.style.position = "flex";
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.style.justifyContent = "center";
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.style.alignItems = "center";
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.style.width = "100%";
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.style.height = "auto";
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.innerHTML = "Messages";
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.style.color = rgba(255, 255, 255, 1.0);
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.style.overflowWrap = "break-word";
    site.domElement.menuMobileContainer.mainElement.messagesElement.element.id = "site_domElement_menuMobileContainer_mainElement_messagesElement_element";
}

function bsharp_site_domElement_menuMobileContainer_mainElement_aboutElementCreate() {
    return {
        element: bsharp_site_domElement_menuMobileContainer_mainElement_aboutElement_elementCreate()
    };
}

function bsharp_site_domElement_menuMobileContainer_mainElement_aboutElement_elementCreate() {
    site.domElement.menuMobileContainer.mainElement.aboutElement.element = document.createElement("div");
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.style.position = "flex";
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.style.justifyContent = "center";
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.style.alignItems = "center";
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.style.width = "100%";
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.style.height = "auto";
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.innerHTML = "About";
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.style.color = rgba(255, 255, 255, 1.0);
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.style.overflowWrap = "break-word";
    site.domElement.menuMobileContainer.mainElement.aboutElement.element.id = "site_domElement_menuMobileContainer_mainElement_aboutElement_element";
}

function bsharp_site_domElement_pageElementCreate() {
    return {
        element: bsharp_site_domElement_pageElement_elementCreate() //etc...
    };
}

function bsharp_site_domElement_pageElement_elementCreate() {
    site.domElement.pageElement.element = document.createElement("div");
    site.domElement.pageElement.element.style.position = "static";
    site.domElement.pageElement.element.style.width = "100%";
    site.domElement.pageElement.element.style.overflowY = "auto";
    site.domElement.pageElement.element.id = "site_domElement_pageElement_element";
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
    document.body.appendChil(site.domElement.pageElement.element);
}

function bhsarp_create() {
    site = bsharp_siteCreate();
    bsharp_adjust();
    bsharp_attach();
}

window.addEventListener("load", bsharp_create);
window.addEventListener("resize", bsharp_adjust);

//to do: testing. fixing inevitable bugs. add functionality. work on page content gradually.
