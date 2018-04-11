const tabContainer = document.getElementById('tab-container');
const firstTab = document.querySelector('.first, .tab');

firstTab.classList.add('activeTab');
tabContainer.addEventListener('click', (e) => toggleActiveTabCard(e));

toggleActiveTabCard = (e) => {
  
  removeInitialActiveClass();
  
  const activeTab = e.target;
  const activeClass = '.' + activeTab.classList[0];
  const activeCard = document.querySelectorAll(activeClass)[1].classList;
  
  activeCard.add('activeCard');  
  activeTab.classList.add('activeTab');
}

removeInitialActiveClass = () => {
  const allTabs = document.querySelectorAll('.tab');
  const allCards = document.querySelectorAll('.card');
  const allTabsLength = Object.keys(allTabs).length;
  
  for(let i = 0; i < allTabsLength; i++) {
    allTabs[i].classList.remove('activeTab');
    allCards[i].classList.remove('activeCard');
  }  
}

showCode = (element) => {
  if(element.className.includes('active-view')) {    
    element.classList.remove('active-view')
    element.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    element.classList.add('active-view')   
  }
}
