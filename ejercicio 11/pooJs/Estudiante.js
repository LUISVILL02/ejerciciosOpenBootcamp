export class Estudiante {
    #nombre;
    #asignaturas;

    constructor(nombre){
        this.#nombre = nombre;
        this.#asignaturas = ["javasScript", "html", "css"]
    }

    obtenDatos(){
        return "nombre: " + this.#nombre + "\n" + "asignaturas: [ " + this.#asignaturas +']';
    }
}