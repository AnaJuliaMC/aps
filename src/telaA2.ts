import { Digito, Tela } from "./calculadora";

export default class telaA2 implements Tela{
    mostre(digito: Digito): void {
        switch(digito){
            case Digito.ZERO: console.log("0000\n0  0\n0  0\n0  0\n0000\n")
            case Digito.UM: console.log("  1\n  1\n  1\n  1\n ")
        };
        console.log(Digito)
    }
    limpe(): void {
        console.clear();
    }
    
}