    // Function to update stats based on checked checkboxes
    function updateStats() {
        // Initialize stats
        let red = 0;
        let juiciness = 0;
        let fruits = 0;
        let healthy = 0;
        let hot = 0;
        let green = 0;

        // Loop through each checkbox
        document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
            // If checkbox is checked
            if (checkbox.checked) {
                // Update stats based on checkbox id
                switch (checkbox.id) {
                    case 'apples':
                        red += 1;
                        juiciness += 2;
                        fruits += 1;
                        healthy += 3;
                        break;
                    case 'tomatoes':
                        red += 2;
                        juiciness += 1;
                        fruits += 1;
                        healthy += 2;
                        break;
                    case 'cherries':
                        red += 3;
                        juiciness += 1;
                        fruits += 1;
                        healthy += 1;
                        break;
                    case 'lettuce':
                        healthy += 3;
                        green += 1;
                        break;
                    case 'greenpeppers':
                        fruits += 1;
                        healthy += 1;
                        green += 1;
                        break;
                    case 'jalapenos':
                        fruits += 1;
                        hot += 1;
                        green += 2;
                        break;
                }
            }
        });

        // Update stats display
        document.getElementById('red').textContent = 'Red: ' + red;
        document.getElementById('juiciness').textContent = 'Juiciness: ' + juiciness;
        document.getElementById('fruits').textContent = 'Fruits: ' + fruits;
        document.getElementById('healthy').textContent = 'Healthy: ' + healthy;
        document.getElementById('hot').textContent = 'Hot: ' + hot;
        document.getElementById('green').textContent = 'Green: ' + green;
    }

    // Listen for changes in checkboxes and update stats
    document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('change', updateStats);
    });
