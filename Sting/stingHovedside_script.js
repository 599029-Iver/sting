/* Set the width of the side navigation to 250px */

let isOpen = false;
function openNav() {
    if(isOpen){
        closeNav();
        isOpen = false;
        return;
    }
    document.getElementById("theSideNav").style.width = "20vw";
    isOpen = true;
  }
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("theSideNav").style.width = "0";
  }