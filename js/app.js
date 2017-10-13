var initialCats = [
      {
          name: "Cutie1",
          imgSrc: "images/cat1.jpg",
          clickCount: 0,
          nicknames: ['Simba']
      },
      {
          name: "Cutie2",
          imgSrc: "images/cat2.jpg",
          clickCount: 0,
          nicknames: ['Chorong']
      },
      {
          name: "Cutie3",
          imgSrc: "images/cat3.jpg",
          clickCount: 0,
          nicknames: ['Ggongji']
      },
      {
          name: "Cutie4",
          imgSrc: "images/cat4.jpg",
          clickCount: 0,
          nicknames: ['Chu']
      },
      {
          name: "Cutie5",
          imgSrc: "images/cat5.jpg",
          clickCount: 0,
          nicknames: ['Mu']
      }
];


var Cat = function(data) {
  var self = this;

  self.clickCount = ko.observable(data.clickCount);
  self.name = ko.observable(data.name);
  self.level = ko.observable(data.level)
  self.imgSrc = ko.observable(data.imgSrc);
  self.nicknames = ko.observableArray(data.nicknames);

  self.level = ko.computed(function() {

      var clicks = self.clickCount();

      if(clicks < 10){
        return "NewBorn";
      } else if(clicks >= 10 && clicks <20 ){
        return "Infant"
      } else {
        return "Teenager"
      }
  });
};

var viewModel = function() {
    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        this.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
      this.clickCount(this.clickCount() + 1);
  };

    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
};

ko.applyBindings(viewModel());
