import { initAnimations } from "@shared/animations";
import { initScroll } from "@shared/scroll";
import { initTheme } from "./features/theme";
import { initNav } from "./features/nav";

document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  initScroll();
  initTheme();
  initNav();
});
