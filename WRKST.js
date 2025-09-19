// ==UserScript==
javascript
// ==UserScript==
// @name         External Script Loader
// @match        https://example.com/*
// @require      https://cdn.jsdelivr.net/gh/jimpim007/moje-skripty@main/WRKST.js
// ==/UserScript==

(function() {
    'use strict';
    // Získání parametru workstation z URL
    const params = new URLSearchParams(window.location.search);
    const workstation = params.get('workstation');
    if(workstation) {
        const input = document.querySelector('input[name="Workstation"]');
        if(input) input.value = workstation;
    }

})();
