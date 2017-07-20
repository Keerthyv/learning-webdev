let ladder = {
    step: 0,
    up: function up() {
        this.step++;
    },
    down: function down() {
        this.step--;
    },
    showStep: function() { // shows the current step
        alert(this.step);
    }
};

ladder.up();
console.log(ladder.step);
ladder.up();
console.log(ladder.step);
ladder.up();
console.log(ladder.step);
ladder.down();
console.log(ladder.step);