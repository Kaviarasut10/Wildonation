document.addEventListener('DOMContentLoaded', function() {
    const animalListElement = document.getElementById('animal-list');
    const forestSelectElement = document.getElementById('forest-select');

    const animalsByForest = {
        amazon: [
            'Jaguar', 'Sloth', 'Macaw', 'Anaconda', 
            'Harpy Eagle', 'Poison Dart Frog', 'Capybara', 'Piranha'
        ],
        serengeti: [
            'Lion', 'Elephant', 'Cheetah', 'Giraffe', 
            'Zebra', 'Hyena', 'Wildebeest', 'African Buffalo'
        ],
        congo: [
            'Gorilla', 'Okapi', 'Bonobo', 'Forest Elephant', 
            'Leopard', 'Chimpanzee', 'Mandrill', 'African Grey Parrot'
        ],
        sundarbans: [
            'Bengal Tiger', 'Saltwater Crocodile', 'Indian Python', 'King Cobra', 
            'Fishing Cat', 'Water Monitor', 'Mudskipper', 'Estuarine Dolphin'
        ]
    };

    // Background images for each forest
    const forestBackgrounds = {
        amazon: 'p.jpg',
        serengeti: 'g.jpg',
        congo: 'e.jpg',
        sundarbans: 'c.jpg'
    };

    // Function to update the list of animals based on the selected forest
    function updateAnimalList(forest) {
        // Clear existing list
        animalListElement.innerHTML = '';

        // Update background image
       document.body.style.backgroundImage = `url('${forestBackgrounds[forest]}')`;

        // Populate the list with animals from the selected forest
        const animals = animalsByForest[forest] || [];
        animals.forEach(animal => {
            const listItem = document.createElement('li');
            listItem.textContent = animal;
            listItem.addEventListener('click', () => {
                alert(`Thank you for choosing to donate to ${animal}!`);
            });
            animalListElement.appendChild(listItem);
        });
    }

    // Initial population of animal list based on the default forest selection
    updateAnimalList(forestSelectElement.value);

    // Update animal list when a new forest is selected
    forestSelectElement.addEventListener('change', function() {
        updateAnimalList(this.value);
    });
});
