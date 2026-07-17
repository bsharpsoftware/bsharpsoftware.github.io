# bsharpsoftware.github.io
website:
menu image, program images, social media images, and icon are svg format to prevent scaling from destroying them.

headings: 
0) the main page (reached with bsharp image link in menu) contains an image link for each program released.
	these bring up the "page" for said game.
1) messages (contains complete archive of messages, whether originating here or on social media, beginning with a 	list of tags. Also contains a box with an arrow on either side for selecting month and another set for 	year. Displays the current criteria at the top. Defaults to the current month.)
2) about (brief description of company, and links to steam company page, social media, and youtube).

technical details:
url: the only url is the main one, all other pages are accessed via the menu.
menu: if the page is under a certain size (use javascript for this), switch to hamburger menu
main page area: use a div that scroll both vertically and horizontally, but hide both scrollbars.
each "page" should be 100% of the browser's current width . on phone it should be 100% of the height,
on desktop the menu should be 10% of the height and the main page area should be 90%
content: all content should be centered and its dimensions set by javascript when loaded in.
	all content that's not currently being used, ie. on other "pages" should be unloaded.
	detect resizes using javascript and adjust the sizes of elements manually.

technical details:
url: the only url is the main one, all other "pages" are accessed via the menu or via the main "page".
margins and padding: set in the css to be 0 for all elements.
layout: the menuDesktopElement is the first element. position absolute. set font-size to 0. all menu sub-elements 		set to display inline-block. set width to 100% * scale. Also, set min-width to min-content, and 		box-sizing to border-box. For child elements, figure out a font-size that doesn't stretch the menu 		by default when the following formula is applied: ((<font-size number> * windowWidthVs1920Scale) * 		fontSizeVsRmScale).
		Maintain uniform height for all the menu elements, and the menu itself, by setting all their
		heights to the height of the largest child element. for the image child element, set its width
		to auto. Lastly, when a menu child element is selected, it gets a partly transparent grey outline.
		Specifically an outline, because those can be set to overlap content, rather than taking up space.
		The css looks like <number>px solid rgba(<comma separated rgb values for colour>, <decimal opacity 		value>). Furthermore set the outline offset to -<same number as assigned to px above>.
		Lastly, the text changes from grey to white when a child element is selected.
	the menuModileElement: same settings as above with regard to size stuff and positioning/display. Set a 			touch event that sets a variable to check if the user is dragging to 0. Set an event for dragging 		that sets that variable to 1. Lastly, set an event for touchend that only executes the code 			associated with the touched button if a drag wasn't detected. Do this for each child element of the 
		mobileMenuElement. The menuMainElement is display none by default, and position absolute, with z-		level 1. It's immediately below the hamburgerContainerElement which contains the hamburgerElement 		which in turn contains the hamburgerSelectedFalse and hamburgerSelectedTrue image elements. Set the 		width of the entire thing to 100% * the font scale variable. Set the min-height of the 				hamburgerContainerElement to min-content. Multiply the height of the hamburger images by the font 		scale variable. The width of this menu is equal to the width of the pageElement. the Hamburger is
		positioned close to the right edge of the menu. The hamburger itself should have the same event
		code described above for the menu elements.
	the pageElement: have its width correspond to the width of the currently in use menu element. Have height
		set to 100% - the height of the menu and - the possible size of a horizontal scrollbar. Set
		font-size to be multiplied by the scale for fonts. Have min-height set to min-content. Position it
		to be directly under whichever menu is being used. 
	the data container contains things like scale variables and so on.
events:
	load: creates all elements apart from rootFontSizeSpan. How this works is it first calls siteCreate().
	

