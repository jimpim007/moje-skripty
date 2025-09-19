// ==UserScript==
// @name         Autofill Workstation from URL
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        https://example.com/login*
// @grant        none
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