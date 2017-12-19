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
    if (this.drinkRequirements[drinkType] !== undefined && this.beans >= this.drinkRequirements[drinkType]) {
      this.beans -= this.drinkRequirements[drinkType];
    } else if (this.drinkRequirements[drinkType] !== undefined && this.beans < this.drinkRequirements[drinkType]) {
      alert ("Sorry, we're all out of beans!");
    } else {
      alert ("Sorry, we don't make DRINKNAME");
    }
  },

  money: 1000,
  
  buySupplies: function (beansAmount) {
    var costPerBean = 2;
    this.money -= beansAmount * costPerBean;
    this.beans += beansAmount;
  }
} 

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");