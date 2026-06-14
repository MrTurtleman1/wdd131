const cCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.webp',
    levelUp: function (level) {
        this.level = level +1;
        console.log(this.level);
        document.querySelector('#level').textContent =`Level: ${cCard.level}`;
    },
    attacked: function (health) {
        if (health > 0) {
            this.health = health -20;
            console.log(this.health);
            document.querySelector('#health').textContent =`Health: ${cCard.health}`;
        }
        else {
            this.health = health -20;
            window.alert("YOU DIED");
            document.querySelector('#health').textContent =`Health: ${cCard.health}`;
        }
    }
};
document.querySelector('#name').textContent = cCard.name;
document.querySelector('img').setAttribute('src', cCard.image);
document.querySelector('img').setAttribute('alt', cCard.name);
document.querySelector('#class').textContent =`Class: ${cCard.class}`;
document.querySelector('#level').textContent =`Level: ${cCard.level}`;
document.querySelector('#health').textContent =`Health: ${cCard.health}`;

document.querySelector("#levelup").addEventListener("click", function () {
    cCard.levelUp(cCard.level);
});
document.querySelector("#attacked").addEventListener("click", function () {
    cCard.attacked(cCard.health);
});