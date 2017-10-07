var viewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Cutie1');
    this.imgSrc = ko.observable('images/cat1.jpg');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);

        var count = 0;
        count ++;
    }
}

ko.applyBindings(new viewModel());
