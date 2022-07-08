class BettleSpaceship extends Spaceship {
    constructor(name, crewQuantity, weaponQuantity) {
        //chamando o constructor de Spaceship usando SUPER
        super(name, crewQuantity)
        this.weaponQuantity = weaponQuantity
    }
}