import { swiperProductJs } from "./generateSwipper.js"
import { toggleListItems } from "./toggleList.js";
import { handleSmoothScroll } from "./handleSmoothScroll.js";
import { swiperJsHtml } from "./handleSwiperMovt.js";
import { updateUserName } from "./updateUserName.js";
import { handleToggleButton } from "./toggleMenuBar.js";

swiperJsHtml();
toggleListItems();
swiperProductJs()
handleSmoothScroll();
updateUserName()
handleToggleButton()