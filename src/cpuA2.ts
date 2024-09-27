import { Controle, Digito, Operação, Teclado } from "./calculadora";

export default class TecladoA2 implements Teclado{
    digiteDigito(digito: Digito): void {
        throw new Error("Method not implemented.");
    }
    digiteOperação(operação: Operação): void {
        throw new Error("Method not implemented.");
    }
    digiteControle(controle: Controle): void {
        throw new Error("Method not implemented.");
    }
    // digite(digito: Digito): void;
    // digite(operação: Operação): void;
    // digite(controle: Controle): void;
    // digite(controle: unknown): void {
    //    if (typeof (valor))
    //    throw new Error ("Method not implemented");
    // }
}
