class empleado {
    constructor (nombre, salario, departamento) {
        this.nombre = nombre
        this.salario = salario
        this.departamento = departamento
    }
    aumentosalario(porcentajeaumento) {
        this.salario += this.salario * (porcentajeaumento/100)
        console.log (`Nombre: ${this.nombre}, Salario: ${this.salario }, Departamento: ${this.departamento}` )
    }
}

const empleado1 = new empleado ("Juan", 55000, "marketing")
empleado1.aumentosalario(10)