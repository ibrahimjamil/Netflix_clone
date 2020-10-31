const tabitem=document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(){
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}
function removeBorder(){
  tabitem.forEach(item=>{
    item.classList.remove('tab-border');
  });
}
// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

tabitem.forEach(item => {
  item.addEventListener('click',selectItem);
});