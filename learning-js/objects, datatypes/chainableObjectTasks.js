let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        console.log(this.step);
        return this;
    }
};

ladder
    .down()
    .up()
    .up()
    .down()
    .down()
    .showStep();

console.log(ladder);