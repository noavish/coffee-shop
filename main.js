var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    var list = Object.keys(this.drinkRequirements);
    for (var i=0; i<list.length; i++) {
      if (list[i] === drinkType) {
        if (this.beans >= this.drinkRequirements[list[i]]) {
          this.beans -= this.drinkRequirements[list[i]];
          console.log(this.beans);
        } else {
          console.log ("Sorry, we're all out of beans!");
        }
        return;
      } 
    } 
    console.log ("Sorry, we don't make DRINKNAME");
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");