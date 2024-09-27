import { Digito, Operação } from "./calculadora";
import telaA2 from "./telaA2";

const d = new telaA2
d.mostre(Digito.ZERO)
d.limpe()
d.mostre(Digito.UM)

function f(value: unknown){
    console.log(typeof(value))
}

f(Operação.DIVISÃO)

