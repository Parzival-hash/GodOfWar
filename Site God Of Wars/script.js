function toggleCheckboxes(clickedCheckbox) {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        if (checkbox !== clickedCheckbox) {
            checkbox.checked = false;
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll('.control');
  
  let currentItem = 0;
  const items = document.querySelectorAll('.item');
  const maxItems = items.length;
  
  controls.forEach((control) => {
      control.addEventListener('click', (e) => {
          isLeft = control.classList.contains("arrowLeft");
          
          if (isLeft) {
              currentItem -= 1;
          } else {
              currentItem += 1;
          }
      
          if (currentItem >= maxItems) {
              currentItem = 0;
          }
      
          if (currentItem < 0) {
              currentItem = maxItems - 1;
          }
  
          items.forEach((item) => item.classList.remove('currentItem'));
  
          items[currentItem].scrollIntoView({
              behavior: "smooth",
              inline: "start",
              block: 'nearest'
          });
  
          items[currentItem].classList.add("currentItem");
      });
  });
});