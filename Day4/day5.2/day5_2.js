const tabContent = {
    tab1: "<h2>Tab 1 </h2><p>Tab 1.</p>",
    tab2: "<h2>Tab 2 </h2><p>Tab 2.</p>",
    tab3: "<h2>Tab 3 </h2><p>Tab 3.</p>"
  };

  function openTab(tabId) {
    const content = tabContent[tabId];
  
    document.getElementById("tab1").classList.remove("active");
    document.getElementById("tab2").classList.remove("active");
    document.getElementById("tab3").classList.remove("active");
    
    document.getElementById(tabId).innerHTML = content;
    document.getElementById(tabId).classList.add("active");
  }
  