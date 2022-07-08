class TransportSpaceship extends Spaceship {
    constructor(name, crewQuantity, sitQuantity) {
        //chamando o constructor de Spaceship usando SUPER
        super(name, crewQuantity)
        this.sitQuantity = sitQuantity
    }
}