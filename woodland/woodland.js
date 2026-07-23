const trees = [
	{
		name: 'White Oak',
        scientificName: 'Quercus alba',
		leafSrc: 'images/white-oak-leaf.jpg',
		leafAlt: '5-9 rounded lobes with no bristle tips. 5-9 inches long. Turn deep red to brown in fall and often persist on tree through winter.',
        bark: 'Light gray, broken into flat, scaly blocks or long irregular plates. Shaggy appearance on mature trees.',
        fruit: 'Acorns mature in one year. Round cap covers 1/4 of the nut. Acorns are 3/4 inch long, oblong with a shallow saucer-shaped cap.',
		maxHeight: '100 ft',
		shape: ' Broad, rounded crown with wide-spreading horizontal branches. Open canopy. Mature trees wider than tall.'
	},
	{
		name: 'Sugar Maple',
		scientificName: 'Acer saccharum',
		leafSrc: 'images/sugar-maple-leaf.jpg',
		leafAlt: '5-lobed with U-shaped sinuses between lobes (not V-shaped like silver maple). 3-6 inches wide. Bright orange, red, and yellow fall color — the iconic New England fall maple.',
		bark: 'Gray-brown with irregular furrows forming long, shaggy plates that curl away from the trunk on older trees. Young bark is smooth and gray.',
		fruit: 'Double-winged samaras (helicopter seeds) with wings nearly parallel (180-degree spread). 1-1.5 inches long. Ripen in fall and fall in a spinning motion.',
		maxHeight: '80 ft',
		shape: 'Dense, oval to rounded crown. Very symmetrical when grown in open areas. Branches are upright-spreading.'
	}
]

let treeContainer = document.querySelector('.tree');
let button = document.querySelector('.button');
let leaf = document.querySelector('.tree');
let modal = document.querySelector('dialog');
let modalImage = modal.querySelector('img');
let closeButton = modal.querySelector('.close-viewer');

button.addEventListener('click', search);
leaf.addEventListener('click', openModal);

function search() {
    let treeQuery = document.querySelector('#search').value;

    let filterTrees = trees.filter(function(tree){
        return (
            tree.name.toLowerCase().includes(treeQuery.toLowerCase()) || 
            tree.leafAlt.toLowerCase().includes(treeQuery.toLowerCase()) || 
            tree.shape.toLowerCase().includes(treeQuery.toLowerCase()) ||
            tree.bark.toLowerCase().includes(treeQuery.toLowerCase()) ||
            tree.fruit.toLowerCase().includes(treeQuery.toLowerCase())
    );
    })

    console.log(filterTrees);


    treeContainer.innerHTML = '';
    filterTrees.forEach(function(tree){
        renderTree(tree);
    })
}

let randomNum = Math.floor(Math.random()* trees.length);
console.log(randomNum);

function treesTemplate(tree) {
    return `<div class="tree-card">
  <div class="tree-content">
	<img src=${tree.leafSrc} alt=${tree.leafAlt}>
	<div class="words">
    <h2>${tree.name}</h2>
	</div>
  </div>
</div>`
}

function renderTree(tree) {
    let html = treesTemplate(tree);
    treeContainer.innerHTML += html
}

function init() {
    renderTree(trees[randomNum]);
}

init();

function openModal(e) {
    console.log(e.target);

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    modalImage.src = src;
    modalImage.alt = alt;

    modal.showModal();
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
         