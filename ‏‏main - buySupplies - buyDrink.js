var coffeeShop = {
  beans: 40,
  money: 1000,

  newDrink: function (drinkType, price, beanRequirement) {
    this.drinkRequirements[drinkType] = {'price': price, 'beanRequirement': beanRequirement};
  },

  drinkRequirements: {
    latte: {price: 24, beanRequirement: 10},
    americano: {price: 25, beanRequirement: 5},
    doubleShot: {price: 22, beanRequirement: 15},
    frenchPress: {price: 23, beanRequirement: 12}
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (this.drinkRequirements[drinkType] !== undefined && this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement;
    } else if (this.drinkRequirements[drinkType] !== undefined && this.beans < this.drinkRequirements[drinkType].beanRequirement) {
      alert ("Sorry, we're all out of beans!");
    } else {
      alert ("Sorry, we don't make DRINKNAME");
    }
  },

  buySupplies: function (beansAmount) {
    var costPerBean = 2;
    this.money -= beansAmount * costPerBean;
    this.beans += beansAmount;
  }, 

  buyDrink: function (drinkType) {
    this.money += this.drinkRequirements[drinkType].price;
    this.makeDrink(drinkType);
  }
} 

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
coffeeShop.newDrink('coco', 20, 10);
coffeeShop.buySupplies(500);
coffeeShop.buyDrink('coco');

