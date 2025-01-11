function clearAllCharacters() {
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {
        character.remove();
    });
    updateMenuItems();
}

const characters = {
    all: [
        { name: "Chasca", image: "characters/Chasca.png" },
        { name: "Ororon", image: "characters/Ororon.png" },
        { name: "Albedo", image: "characters/Albedo.png" },
        { name: "Alhaitham", image: "characters/Alhaitham.png" },
        { name: "Aloy", image: "characters/Aloy.png" },
        { name: "Arlecchino", image: "characters/Arlecchino.png" },
        { name: "Ayaka", image: "characters/Ayaka.png" },
        { name: "Ayato", image: "characters/Ayato.png" },
        { name: "Baizhu", image: "characters/Baizhu.png" },
        { name: "Childe", image: "characters/Childe.png" },
        { name: "Chiori", image: "characters/Chiori.png" },
        { name: "Clorinde", image: "characters/Clorinde.png" },
        { name: "Cyno", image: "characters/Cyno.png" },
        { name: "Dehya", image: "characters/Dehya.png" },
        { name: "Diluc", image: "characters/Diluc.png" },
        { name: "Emilie", image: "characters/Emilie.png" },
        { name: "Eula", image: "characters/Eula.png" },
        { name: "Furina", image: "characters/Furina.png" },
        { name: "Ganyu", image: "characters/Ganyu.png" },
        // További karakterek
    ],
    regions: {
        mondstadt: [
            { name: "Albedo", image: "characters/Albedo.png" },
            { name: "Diluc", image: "characters/Diluc.png" },
            { name: "Eula", image: "characters/Eula.png" },
            // További Mondstadt karakterek
        ],
        liyue: [
            { name: "Baizhu", image: "characters/Baizhu.png" },
            { name: "Childe", image: "characters/Childe.png" },
            { name: "Ganyu", image: "characters/Ganyu.png" },
            // További Liyue karakterek
        ],
        inazuma: [
            { name: "Ayaka", image: "characters/Ayaka.png" },
            { name: "Ayato", image: "characters/Ayato.png" },
            { name: "Chiori", image: "characters/Chiori.png" },
            // További Inazuma karakterek
        ],
        sumeru: [
            { name: "Alhaitham", image: "characters/Alhaitham.png" },
            { name: "Cyno", image: "characters/Cyno.png" },
            { name: "Dehya", image: "characters/Dehya.png" },
            // További Sumeru karakterek
        ],
        fontaine: [
            { name: "Arlecchino", image: "characters/Arlecchino.png" },
            { name: "Clorinde", image: "characters/Clorinde.png" },
            { name: "Emilie", image: "characters/Emilie.png" },
            { name: "Furina", image: "characters/Furina.png" },
            // További Fontaine karakterek
        ],
        natlan: [
            { name: "Chasca", image: "characters/Chasca.png" },
            { name: "Ororon", image: "characters/Ororon.png" },
            // További Natlan karakterek
        ],
    },
    visions: {
        anemo: [
            { name: "Chasca", image: "characters/Chasca.png" },
            // Add more Anemo characters
        ],
        geo: [
            { name: "Albedo", image: "characters/Albedo.png" },
            { name: "Chiori", image: "characters/Chiori.png" },
            // Add more Geo characters
        ],
        electro: [
            { name: "Ororon", image: "characters/Ororon.png" },
            { name: "Clorinde", image: "characters/Clorinde.png" },
            { name: "Cyno", image: "characters/Cyno.png" },
            // Add more Electro characters
        ],
        dendro: [
            { name: "Alhaitham", image: "characters/Alhaitham.png" },
            { name: "Baizhu", image: "characters/Baizhu.png" },
            { name: "Emilie", image: "characters/Emilie.png" },
            // Add more Dendro characters
        ],
        hydro: [
            { name: "Ayato", image: "characters/Ayato.png" },
            { name: "Childe", image: "characters/Childe.png" },
            { name: "Furina", image: "characters/Furina.png" },
            // Add more Hydro characters
        ],
        pyro: [
            { name: "Arlecchino", image: "characters/Arlecchino.png" },
            { name: "Dehya", image: "characters/Dehya.png" },
            { name: "Diluc", image: "characters/Diluc.png" },
            // Add more Pyro characters
        ],
        cryo: [
            { name: "Aloy", image: "characters/Aloy.png" },
            { name: "Ayaka", image: "characters/Ayaka.png" },
            { name: "Eula", image: "characters/Eula.png" },
            { name: "Ganyu", image: "characters/Ganyu.png" },
            // Add more Cryo characters
        ],
        
    }
};

function resetCharacters() {
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {
        character.classList.remove('out');
        character.classList.add('visible');
    });
}

function addAllCharacters(menuId) {
    let characterList;
    
    if (menuId === 'all') {
        characterList = characters.all;
    } else if (menuId === 'regions') {
        characterList = Object.values(characters.regions).flat();
    } else if (menuId === 'visions') {
        characterList = Object.values(characters.visions).flat();
    } else if (['mondstadt', 'liyue', 'inazuma', 'sumeru', 'fontaine', 'natlan'].includes(menuId)) {
        characterList = characters.regions[menuId];
    } else if (['anemo', 'geo', 'electro', 'dendro', 'hydro', 'pyro', 'cryo'].includes(menuId)) {
        characterList = characters.visions[menuId];
    } else {
        characterList = characters[menuId];
    }

    if (!characterList) {
        console.error("Invalid menuId:", menuId);
        return;
    }

    const allSelected = characterList.every(character => 
        document.getElementById(character.name)
    );

    characterList.forEach(character => {
        const characterDiv = document.getElementById(character.name);
        if (allSelected && characterDiv) {
            characterDiv.remove();
        } else if (!allSelected && !characterDiv) {
            toggleCharacter(character.name);
        }
    });

    updateMenuItems();
}

function toggleMenu() {
    const menu = document.getElementById('menu-items');
    const subMenus = document.querySelectorAll('.sub-menu');
    
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        // Bezárjuk az összes almenüt
        subMenus.forEach(subMenu => {
            subMenu.style.display = 'none';
        });
    } else {
        menu.style.display = 'block';
    }
}

// Almenü váltása
function toggleSubMenu(menuId) {
    const subMenu = document.getElementById(menuId);
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    if (subMenu.style.display === 'block') {
        populateSubMenu(menuId);  // Kategória karaktereinek betöltése
    }
}

// Kategória karaktereinek megjelenítése
function populateSubMenu(menuId) {
    const subMenu = document.getElementById(menuId);
    subMenu.innerHTML = '';

    if (menuId !== 'regions' && menuId !== 'visions') {
        const allButton = document.createElement('li');
        allButton.classList.add('all-button');
        allButton.textContent = 'All';
        allButton.onclick = () => addAllCharacters(menuId);
        subMenu.appendChild(allButton);
    }

    if (menuId === 'regions' || menuId === 'visions') {
        const category = characters[menuId];
        for (const subCategory in category) {
            const categoryItem = document.createElement('li');
            categoryItem.textContent = subCategory.charAt(0).toUpperCase() + subCategory.slice(1);
            categoryItem.onclick = () => toggleSubMenu(subCategory);
            categoryItem.classList.add('region-header');
            subMenu.appendChild(categoryItem);

            const categorySubMenu = document.createElement('ul');
            categorySubMenu.id = subCategory;
            categorySubMenu.classList.add('sub-menu', 'region-submenu');
            subMenu.appendChild(categorySubMenu);
        }
    } else if (['mondstadt', 'liyue', 'inazuma', 'sumeru', 'fontaine', 'natlan', 
                'anemo', 'geo', 'electro', 'dendro', 'hydro', 'pyro', 'cryo'].includes(menuId)) {
        const parentCategory = ['mondstadt', 'liyue', 'inazuma', 'sumeru', 'fontaine', 'natlan'].includes(menuId) 
            ? 'regions' : 'visions';
        const categoryCharacters = characters[parentCategory][menuId];
        categoryCharacters.forEach(character => {
            const listItem = document.createElement('li');
            listItem.textContent = character.name;
            listItem.onclick = () => toggleCharacter(character.name);
            subMenu.appendChild(listItem);
        });
    } else {
        const category = characters[menuId];
        if (Array.isArray(category)) {
            category.forEach(character => {
                const listItem = document.createElement('li');
                listItem.textContent = character.name;
                listItem.onclick = () => toggleCharacter(character.name);
                subMenu.appendChild(listItem);
            });
        }
    }

    updateMenuItems();
}

// Add new selectCharacter function
function selectCharacter(characterName) {
    const selectedSpan = document.getElementById('selectedCharacter');
    selectedSpan.textContent = characterName;
}

// Update toggleCharacter function
function toggleCharacter(characterName) {
    let character = null;
    for (const category in characters) {
        if (Array.isArray(characters[category])) {
            character = characters[category].find(c => c.name === characterName);
            if (character) break;
        } else if (typeof characters[category] === 'object') {
            for (const region in characters[category]) {
                character = characters[category][region].find(c => c.name === characterName);
                if (character) break;
            }
            if (character) break;
        }
    }

    if (!character) {
        console.error("Nem található karakter ezzel a névvel: " + characterName);
        return;
    }

    const board = document.getElementById('board');
    let characterDiv = document.getElementById(characterName);

    if (!characterDiv) {
        characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        characterDiv.id = characterName;

        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;

        const name = document.createElement('p');
        name.textContent = character.name;

        characterDiv.appendChild(img);
        characterDiv.appendChild(name);
        board.appendChild(characterDiv);

        characterDiv.classList.add('visible');
        characterDiv.onclick = () => toggleOutCharacter(characterName);
        
        // Add right-click event listener
        characterDiv.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Prevent default context menu
            selectCharacter(characterName);
        });
    } else {
        characterDiv.remove();
    }

    updateMenuItems();
}

function toggleOutCharacter(characterName) {
    const characterDiv = document.getElementById(characterName);
    if (characterDiv.classList.contains('out')) {
        characterDiv.classList.remove('out');
        characterDiv.style.opacity = '1';  // Reset opacity
        characterDiv.style.filter = 'none';  // Reset grayscale
        characterDiv.style.pointerEvents = 'auto';  // Enable clicking
    } else {
        characterDiv.classList.add('out');
    }
}

function updateMenuItems() {
    const visibleCharacters = document.querySelectorAll('.character');  // Changed from '.character.visible'
    const menuItems = document.querySelectorAll('#menu-items li');

    menuItems.forEach(item => {
        const characterName = item.textContent.trim();
        // Check if character exists on the board
        const isOnList = Array.from(visibleCharacters).some(character => 
            character.querySelector('p').textContent === characterName
        );

        if (isOnList) {
            item.classList.add('on-list');
        } else {
            item.classList.remove('on-list');
        }
    });
}

// Eseménykezelő, hogy a menü bezáródjon, ha a felhasználó a menün kívül kattint
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu-items');
    const hamburger = document.querySelector('.hamburger');
    
    // Ha nem a menü vagy a hamburger ikon lett kattintva, akkor zárjuk be
    if (!menu.contains(event.target) && event.target !== hamburger) {
        menu.style.display = 'none';
        // Bezárjuk az összes almenüt
        const subMenus = document.querySelectorAll('.sub-menu');
        subMenus.forEach(subMenu => {
            subMenu.style.display = 'none';
        });
    }
});
