//remember to set the height of the menu to 0.07 the height of the screen by default (ie. 7%).
//Text is simpler, just use rem directly to scale it.
var siteBase = 0;
var desktopMenu = 0;
var mobileMenu = 0;
var sideContainer = 0;
var pageLength = 1; //for now
var page = new Array(pageLength);

function siteBaseCreate() {
	return {
		currentPageIndex: 0,
		scale: 0.0,
		pageWidth: 0.0,
		pageHeight: 0.0,
		isMobile: 0,
		rootFontSizeSpanElement: 0,
		rootFontSizeSpanObserver: 0
	};
}

function siteBaseSetDimensions() {
	siteBase.scale = 1.0 + ((parseFloat(getComputedStyle(document.documentElement).fontSize) - 16.0) / 16.0);
	siteBase.pageWidth = document.documentElement.clientWidth * siteBase.scale;
	siteBase.pageHeight = document.documentElement.clientHeight * siteBase.scale;
	if(siteBase.pageWidth < (768 * siteBase.scale))
		siteBase.isMobile = 1;
	else if(siteBase.pageWidth >= (768 * siteBase.scale))
		siteBase.isMobile = 0;
}

function siteBaseSetup() {
	siteBase.currentPageIndex = 0;
	siteBaseSetDimensions();
	siteBase.rootFontSizeSpanElement = document.getElementById("rootFontSizeSpan");
	siteBase.rootFontSizeSpanObserver = new ResizeObserver(() => {
		resize();
	});
}

function desktopMenuCreate() {
	return {
		base: 0,
		home: 0,
		homeImage: 0,
		links: 0,
		linksText: 0
	};
}

function desktopMenuSetDimensions() {
	desktopMenu.base.style.width = siteBase.pageWidth.toString() + "px";
	desktopMenu.base.style.height = ;
	if(((siteBase.pageHeight * 0.07) * siteBase.scale) < (69.37 * siteBase.scale))
		desktopMenu.style.height = (69.37 * siteBase.scale).toString() + "px";
	else
		desktopMenu.style.height = ((siteBase.pageHeight * 0.07) * siteBase.scale).toString() + "px";
	desktopMenu.home.style.width = (parseFloat(desktopMenu.base.style.width) * 0.2).toString() + "px";
	desktopMenu.home.style.height = desktopMenu.base.style.height;
	desktopMenu.homeImage.style.width = desktopMenu.home.style.width;
	desktopMenu.homeImage.style.height = desktopMenu.home.style.height;
	desktopMenu.links.style.left = (parseFloat(desktopMenu.home.style.width)).toString() + "px";
	desktopMenu.links.style.width = (parseFloat(desktopMenu.base.style.width) * 0.2).toString() + "px";
	desktopMenu.links.style.height = desktopMenu.base.style.height;
	desktopMenu.linksText
}

function resize() {
	siteBaseSetDimensions();
}

function load() {
	siteBase = siteBaseCreate();
	siteBaseSetup();
}

function menuCreate() {
	return {
		menuElement: 0,

	}
}

var menuElement = 0;
var menuElement_0 = 0;
var menuElement_0_image = 0;
var linksMenuElement = 0;
var hamburgerMenuSelectorElement = 0;
var hamburgerMenuSelectorElement_image0 = 0;
var hamburgerMenuSelectorElement_image1  = 0;
var hamburgerMenu_isOpen = 0;
var menuHeight = 0.0;

function setDimensions() {
	menuElement.style.width = currentPageWidth.toString() + "px";
	menuHeight = (pageHeight * 0.07) * scale;
	if(menuHeight < (69.37 * scale))
		menuHeight = 69.37 * scale;
	menuElement.style.height = menuHeight.toString() + "px";
	menuElement_0.style.width = (200.0 * scale).toString() + "px";
	menuElement_0.style.height = menuHeight.toString() + "px";
	menuElement_0_image.style.width = (200.0 * scale).toString() + "px";
	menuElement_0_image.style.height = menuHeight.toString() + "px";
	hamburgerMenuSelectorElement.style.width = (50.0 * scale).toString() + "px";
	hamburgerMenuSelectorElement.style.height = (50.0 * scale).toString() + "px";
	hamburgerMenuSelectorElement.style.left = (pageWidth - (parseFloat(hamburgerMenuSelectorElement.style.width) + (5.0 * scale))).toString() + "px";
	hamburgerMenuSelectorElement_image0.style.width = (50.0 * scale).toString() + "px";
	hamburgerMenuSelectorElement_image0.style.height = (50.0 * scale).toString() + "px";
	hamburgerMenuSelectorElement_image1.style.width = (50.0 * scale).toString() + "px";
	hamburgerMenuSelectorElement_image1.style.height = (50.0 * scale).toString() + "px";
}

function setupPage0() {
	
}

function hamburgerMenu_setToOpen() {
	hamburgerMenuSelectorElement_image0.style.display = "none";
	hamburgerMenuSelectorElement_image1.style.display = "block";
	hamburgerMenu_isOpen = 1;
}

function hamburgerMenu_setToClosed() {
	hamburgerMenuSelectorElement_image1.style.display = "none";
	hamburgerMenuSelectorElement_image0.style.display = "block";
	hamburgerMenu_isOpen = 0;
}

function menu_create() {
	menuElement = document.createElement("div");
	menuElement.style.position = "static";
	menuElement.style.left = "0px";
	menuElement.style.top = "0px";
	menuElement.style.background = "#000000";
	menuElement.id = "menuElement";
	menuElement_0 = document.createElement("div");
	menuElement_0.style.left = "0px";
	menuElement_0.style.top = "0px";
	menuElement_0.id = "menuElement_0";
	menuElement_0_image = document.createElement("img");
	menuElement_0_image.setAttribute("src", "url here");
	hamburgerMenuSelectorElement = document.createElement("div");
	hamburgerMenuSelectorElement.style.position = "absolute";
	hamburgerMenuSelectorElement.style.top =  (2 * scale).toString() + "px";
	hamburgerMenuSelectorElement.id = "hamburgerMenuSelectorElement";
	if(document.documentElement.clientWidth > (768 * scale)) {
		isMobile = 0;
		hamburgerMenuSelectorElement.style.display = "none";
		menuElement.style.display = "block";
	}
	else if(document.documentElement.clientWidth <= (768 * scale)) {
		isMobile = 1;
		hamburgerMenuSelectorElement.style.display = "block";
		menuElement.style.display = "none";
	}
	hamburgerMenuSelectorElement_image0 = document.createElement("img");
	hamburgerMenuSelectorElement_image0.setAttribute("src", "url here");
	hamburgerMenuSelectorElement.appendChild(hamburgerMenuSelectorElement_image0);
	hamburgerMenuSelectorElement_image1 = document.createElement("img");
	hamburgerMenuSelectorElement_image1.setAttribute("src", "url here"); //https://lh3.googleusercontent.com/d/
	hamburgerMenuSelectorElement_image1.style.display = "none";
	hamburgerMenuSelectorElement.appendChild(hamburgerMenuSelectorElement_image1);
	hamburgerMenuSelectorElement.addEventListener("pointerdown", (event) => {
		if(event.pointerType == "touch" || event.pointerType == "mouse") {
			if(hamburgerMenu_isOpen == 0)
				hamburgerMenu_setToOpen();
			else if(hamburgerMenu_isOpen == 1)
				hamburgerMenu_setToClosed();
		}
	});

	document.body.appendChild(hamburgerMenuSelectorElement);
	document.body.appendChild(menuElement);
}

function menu_append() {
	menuElement_0.appendChild(menuElement_0_image);
	menuElement.appendChild(menuElement_0);
}

function setup() {
	scale = 1.0 + ((parseFloat(getComputedStyle(document.documentElement).fontSize) - 16.0) / 16.0);
	menu_create();
	//all other create functions here
	setDimensions();
	menu_append();
	//all other append functions here
	rootFontSizeSpanElement = document.getElementById("rootFontSizeSpan");
	rootFontSizeSpanObserver = new ResizeObserver(() => {
		scale = 1.0 + ((parseFloat(getComputedStyle(document.documentElement).fontSize) - 16.0) / 16.0);
		setDimensions();
	});
}

function resize_menu() {
	if(document.documentElement.clientWidth > 768) {
		currentElementWidth = currentWindowWidth;
		currentElementWidth = currentElementWidth.toString();
		currentElementWidth = currentElementWidth + "px";
		if(isMobile == 0) {
			menuElement.style.width = currentElementWidth;
			menuElement.style.height = currentElementHeight;
		}
		else if(isMobile == 1) {
			isMobile = 0;
			hamburgerMenuSelectorElement.style.display = "none";
			if(hamburgerMenu_isOpen == 1)
				hamburgerMenu_setToClosed();
			menuElement.style.display = "block";
			menuElement.style.left = "0px";
			menuElement.style.top = "0px";
			menuElement.style.width = currentElementWidth;
			menuElement.style.height = currentElementHeight;
		}
	}
	else if(document.documentElement.clientWidth <= 768) {
		if(isMobile == 0) {
			isMobile = 1;
			menuElement.style.display = "none";
			hamburgerMenuSelectorElement.style.display = "block";
			hamburgerMenuSelectorElement.style.left = (currentWindowWidth - 55).toString() + "px";
		}
		else if(isMobile == 1) {
			hamburgerMenuSelectorElement.style.left = (currentWindowWidth - 55).toString() + "px";
		}
	}
}

function resize() {
	setDimensions();
}

window.addEventListener("load", setup);
window.addEventListener("resize", resize);
