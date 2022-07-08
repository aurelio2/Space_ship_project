class Spaceship {
    static get DECELERATION_RATE() {
        return 0.17
    }

    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }

    speedUp(aceleration) {
        this.currentVelocity += aceleration * (1 - Spaceship.DECELERATION_RATE)
    }
}