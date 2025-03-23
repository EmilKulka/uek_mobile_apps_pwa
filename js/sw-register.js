window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('/uek_mobile_apps_pwa/sw.js');
    }
  }