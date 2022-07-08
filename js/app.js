class App {
    constructor() {
            //iniciamos a nave null porque vamos estanciar
            this.spaceship = null
        }
        // funcao para start 
    start() {
        this.enrollSpaceship()
        let chosenOption
        do {
            chosenOption = this.showInitialMenu()
            this.redirectFeature(chosenOption)
        } while (chosenOption != "3")
        this.printAndExit()

    }

    enrollSpaceship() {
            let spaceshipName = prompt("Qual o nome da nave?")
            let crewQuantity = prompt("Qual é a quantidade de tripulantes?")
                //varivel para perguntar o tipo de name
            let spaceshipKind = this.askForSpaceshipKind()
            if (spaceshipKind == "1") {
                let weaponQuantity = prompt("Quantas armas a nave possui?")
                    //vamos instanciar a nave Bettle
                this.spaceship = new BettleSpaceship(spaceshipName, crewQuantity, weaponQuantity)
            } else {
                let sitQuantity = prompt("Quantos lugares a nave possui?")
                this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitQuantity)

            }
        }
        //metodo para perguntar o tipo da nave
    askForSpaceshipKind() {
        let chosenOption
        while (!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt("Escolha o tipo de nave?\n1- Batalha\n2- Transporte")
        }
        return chosenOption
    }

    //funcao para mostrar menu
    showInitialMenu() {
        const prompMessage = "O que deseja fazer\n" +
            "1- Acelerar\n" +
            "2- Trocar a nava\n" +
            "3- Imprimir e sair"
        let chosenOption = prompt(prompMessage)
        while (!["1", "2", "3"].includes(chosenOption)) {
            chosenOption = prompt(prompMessage)
        }
        return chosenOption
    }

    //funcao para redicionar a nave
    redirectFeature(chosenOption) {
        switch (chosenOption) {
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                //chamando afuncao para escolher outra nave
                this.enrollSpaceship()
                break
        }
    }

    //funcao para acelerar a nave
    accelerateSpaceship() {
        let aceleration = Number(prompt("Quanto gostarias de acelerar?"))
            //acelerando
        this.spaceship.speedUp(aceleration)
    }
    printAndExit() {
        let finalMessage = "Name:" + this.spaceship.name + "\n" +
            "Quantidade de tripulante: " + this.spaceship.crewQuantity + "\n" +
            "Velocidade actual: " + this.spaceship.currentVelocity + "\n"
        alert(finalMessage)
    }

}