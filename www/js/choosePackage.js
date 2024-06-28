document.getElementById('package-selector').addEventListener('change', function() {
    var selectedPackage = this.value;
    
    // Hide all package sections
    document.getElementById('solo-package').classList.add('inactive');
    document.getElementById('couple-package').classList.add('inactive');
    document.getElementById('family-package').classList.add('inactive');
    
    // Show the explore section
    document.getElementById('explore-section').classList.remove('inactive');

    // Show the selected package section
    if (selectedPackage === 'solo') {
        document.getElementById('solo-package').classList.remove('inactive');
    } else if (selectedPackage === 'couple') {
        document.getElementById('couple-package').classList.remove('inactive');
    } else if (selectedPackage === 'family') {
        document.getElementById('family-package').classList.remove('inactive');
    }
});