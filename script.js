function toggleMode() {
        // Toggle the dark-mode class on the body element
        document.body.classList.toggle('dark-mode');
        
        // Save the current mode to localStorage so it persists
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark');
        } else {
            localStorage.setItem('mode', 'light');
        }
    }

    // Check if dark mode was previously enabled and apply it
    window.onload = function() {
        const savedMode = localStorage.getItem('mode');
        if (savedMode === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }