function randomScores() {
    var arr = [];
    for(var i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 5) + 1);
    }
    return arr;
};

var names = [
    'Joe Schmoe',
    'Jon Doe',
    'Michael Myers',
    'Pikachu',
    'Honda',
    'Soldier 76',
    'Deeva'
];

var friendsArray = [];
for(var i = 0; i < names.length; i++) {
    friendsArray.push({
        name: names[i],
        photo: 'https://lorempixel.com/400/200/people',
        scores: randomScores()
    })
}

module.exports = {
    list: friendsArray,
    findMatch: function(newUser){
        var match = {};
        var diff = 0;
        for(var i = 0; i < this.list.length; i++) {
            if(newUser.name === this.list[i].name) {
                continue;
            }

            var totalDiff = 0;
            for(var x = 0; x < newUser.scores.length; x++) {
                totalDiff +=  Math.abs(this.list[i].scores[x] - newUser.scores[x]);
            }

            if(i === 0) {
                diff = totalDiff;
            } 

            if(totalDiff < diff) {
                match = this.list[i];
                diff = totalDiff;
            }
        }
        return match;
    }
};

