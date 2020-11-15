export const isWindowOnElement = (elementID) => {
  const element = document.getElementById(elementID);
  const navbar = document.getElementById("navbar");

  if (element && navbar) {
    const navbarHeight = navbar.offsetHeight;
    const offsetTop = element.offsetTop - navbarHeight;
    const offsetBottom = element.offsetHeight + offsetTop;

    return window.pageYOffset >= offsetTop && window.pageYOffset < offsetBottom;
  } else {
    return false;
  }
};
