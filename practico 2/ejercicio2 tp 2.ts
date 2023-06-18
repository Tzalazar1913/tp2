class Alumno {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  }
  
  class Curso {
    nombre: string;
    alumnos: Alumno[];
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.alumnos = [];
    }
  
    asignarAlumno(alumno: Alumno) {
      this.alumnos.push(alumno);
    }
  }
  
  class Escuela {
    cursos: Curso[];
  
    constructor() {
      this.cursos = [];
    }
  
    agregarCurso(curso: Curso) {
      this.cursos.push(curso);
    }
  }
  
  const alumno1 = new Alumno("Juan");
  const alumno2 = new Alumno("María");
  
  const curso1 = new Curso("Matemáticas");
  const curso2 = new Curso("Historia");
  
  curso1.asignarAlumno(alumno1);
  curso1.asignarAlumno(alumno2);
  curso2.asignarAlumno(alumno2);
  
  const escuela = new Escuela();
  
  escuela.agregarCurso(curso1);
  escuela.agregarCurso(curso2);
  
  console.log("Escuela:");
  escuela.cursos.forEach((curso) => {
    console.log(`- Curso: ${curso.nombre}`);
    console.log("  Alumnos:");
    curso.alumnos.forEach((alumno) => {
      console.log(`  - ${alumno.nombre}`);
    });
  });