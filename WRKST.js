(function() {
    'use strict';
    const params = new URLSearchParams(window.location.search);
    const workstation = params.get('workstation');
    if(workstation) {
        const input = document.querySelector('input[name="Workstation"]');
        if(input) input.value = workstation;
    }
})();
