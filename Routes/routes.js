import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from '../src/Home/home'
import Votacao from '../src/Votar/votar'
import Resultado from '../src/Resultado/resultado'



const Rotas = {

    Home:{
        name: "Home",
        screen: Home,
    },

    Votacao: {
        name: "Votacao",
        screen: Votacao,
    },

    Resultado : {
        name: "Resultado",
        screen: Resultado,
    },

}


const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);
