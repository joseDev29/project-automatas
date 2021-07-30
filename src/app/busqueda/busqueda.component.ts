import { Component, OnInit } from '@angular/core';
import { db, Paso, Proceso } from '../data/db';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  resultados: Proceso[] = [];
  notResults: boolean = true;
  load: boolean = false;
  activeProcess: Proceso | null = null;
  activePasos: Paso[] = [];
  @ViewChild('searchInput') searchInput: any;
  constructor() {}

  ngOnInit(): void {}

  onInput(event: any) {
    let query = event.target.value.trim();

    switch (query) {
      case '':
        this.resultados = [];
        this.load = false;
        this.notResults = true;
        break;
      case 'a':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        this.searchProcess('asignatura');
        break;
      case 'as':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('asignatura');
        break;
      case 'asi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('asignatura');
        break;
      case 'asig':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('asignatura');
        break;
      case 'asign':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('asignatura');
        break;

      case 'asigna':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('asignatura');
        break;
      case 'asignat':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('asignatura');
        break;
      case 'asignatu':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('asignatura');
        break;
      case 'asignatur':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('asignatura');
        break;
      case 'asignatura':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('asignatura');
        break;
      case 'al':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'ali':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'alim':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'alime':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'alimen':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'aliment':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'alimenta':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'alimentac':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'alimentaci':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'alimentacio':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'alimentacion':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('alimentacion');
        break;
      case 'b':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('busqueda');
        break;
      case 'bu':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('busqueda');
        break;
      case 'bus':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('busqueda');
        break;
      case 'busq':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('busqueda');
        break;
      case 'busqu':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('busqueda');
        break;
      case 'busque':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('busqueda');
        break;
      case 'busqued':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('busqueda');
        break;
      case 'busqueda':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('busqueda');
        break;
      case 'c':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cambio');
        this.searchProcess('cancelacion');
        this.searchProcess('carnet');
        this.searchProcess('catalogo');
        this.searchProcess('certificado');
        this.searchProcess('cita');
        this.searchProcess('consultar');
        this.searchProcess('contraseña');
        this.searchProcess('cursadas');
        this.searchProcess('cursos');
        break;
      case 'ca':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cambio');
        this.searchProcess('cancelacion');
        this.searchProcess('carnet');
        this.searchProcess('catalogo');
        break;
      case 'cam':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cambio');
        break;
      case 'camb':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cambio');
        break;
      case 'cambi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cambio');
        break;
      case 'cambio':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cambio');
        break;
      case 'can':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cancelacion');
        break;
      case 'canc':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cancelacion');
        break;
      case 'cance':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cancelacion');
        break;
      case 'cancel':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cancelacion');
        break;
      case 'cancela':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cancelacion');
        break;
      case 'cancelac':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cancelacion');
        break;
      case 'cancelaci':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cancelacion');
        break;
      case 'cancelacio':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cancelacion');
        break;
      case 'cancelacion':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cancelacion');
        break;
      case 'car':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('carnet');
        break;
      case 'carn':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('carnet');
        break;
      case 'carne':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('carnet');
        break;
      case 'carnet':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('carnet');
        break;
      case 'cat':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('catalogo');
        break;
      case 'cata':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('catalogo');
        break;
      case 'catal':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('catalogo');
        break;
      case 'catalo':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('catalogo');
        break;
      case 'catalog':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('catalogo');
        break;
      case 'catalogo':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('catalogo');
        break;
      case 'ce':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;

      case 'cer':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;

      case 'cert':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;

      case 'certi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;

      case 'certif':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;

      case 'certifi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;

      case 'certific':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;

      case 'certifica':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;

      case 'certificad':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;

      case 'certificado':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('certificado');
        break;
      case 'ci':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cita');
        break;

      case 'cit':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cita');
        break;

      case 'cita':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cita');
        break;

      case 'co':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('consultar');
        this.searchProcess('contraseña');
        break;

      case 'con':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('consultar');
        this.searchProcess('contraseña');
        break;

      case 'cons':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('consultar');
        break;

      case 'consu':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('consultar');
        break;

      case 'consul':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('consultar');
        break;

      case 'consult':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('consultar');
        break;

      case 'consulta':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('consultar');
        break;

      case 'consultar':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('consultar');
        break;
      case 'cont':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('contraseña');
        break;

      case 'contr':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('contraseña');
        break;

      case 'contra':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('contraseña');
        break;

      case 'contras':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('contraseña');
        break;

      case 'contrase':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('contraseña');
        break;

      case 'contraseñ':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('contraseña');
        break;

      case 'contraseña':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('contraseña');
        break;
      case 'cu':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cursadas');
        this.searchProcess('cursos');
        break;

      case 'cur':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cursadas');
        this.searchProcess('cursos');
        break;

      case 'curs':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cursadas');
        this.searchProcess('cursos');
        break;

      case 'cursa':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cursadas');
        break;

      case 'cursad':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cursadas');
        break;

      case 'cursada':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cursadas');
        break;

      case 'cursadas':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cursadas');
        break;
      case 'curso':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cursos');
        break;

      case 'cursos':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('cursos');
        break;
      case 'd':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('diploma');
        break;

      case 'di':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('diploma');
        break;

      case 'dip':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('diploma');
        break;

      case 'dipl':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('diploma');
        break;

      case 'diplo':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('diploma');
        break;

      case 'diplom':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('diploma');
        break;

      case 'diploma':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('diploma');
        break;
      case 'e':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('egresado');
        this.searchProcess('entrar');
        this.searchProcess('estudio');
        break;

      case 'eg':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('egresado');
        break;

      case 'egr':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('egresado');
        break;

      case 'egre':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('egresado');
        break;

      case 'egres':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('egresado');
        break;

      case 'egresa':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('egresado');
        break;

      case 'egresad':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('egresado');
        break;

      case 'egresado':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('egresado');
        break;
      case 'en':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('entrar');
        break;

      case 'ent':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('entrar');
        break;

      case 'entr':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('entrar');
        break;

      case 'entra':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('entrar');
        break;

      case 'entrar':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('entrar');
        break;
      case 'es':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('estudio');
        break;

      case 'est':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('estudio');
        break;

      case 'estu':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('estudio');
        break;

      case 'estud':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('estudio');
        break;

      case 'estudi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('estudio');
        break;

      case 'estudio':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('estudio');
        break;
      case 'g':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('grado');
        this.searchProcess('graduado');
        break;

      case 'gr':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('grado');
        this.searchProcess('graduado');
        break;

      case 'gra':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('grado');
        this.searchProcess('graduado');
        break;

      case 'grad':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('grado');
        this.searchProcess('graduado');
        break;

      case 'grado':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('grado');
        break;
      case 'gradu':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('graduado');
        break;

      case 'gradua':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('graduado');
        break;

      case 'graduad':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('graduado');
        break;

      case 'graduado':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('graduado');
        break;
      case 'h':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('horario');
        break;

      case 'ho':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('horario');
        break;

      case 'hor':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('horario');
        break;

      case 'hora':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('horario');
        break;

      case 'horar':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('horario');
        break;

      case 'horari':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('horario');
        break;

      case 'horario':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('horario');
        break;
      case 'i':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('ingreso');
        this.searchProcess('inscripcion');
        break;

      case 'in':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('ingreso');
        this.searchProcess('inscripcion');
        break;

      case 'ing':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('ingreso');
        break;

      case 'ingr':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('ingreso');
        break;

      case 'ingre':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('ingreso');
        break;

      case 'ingres':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('ingreso');
        break;

      case 'ingreso':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('ingreso');
        break;
      case 'ins':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('inscripcion');
        break;

      case 'insc':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('inscripcion');
        break;

      case 'inscr':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('inscripcion');
        break;

      case 'inscri':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('inscripcion');
        break;

      case 'inscrip':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('inscripcion');
        break;

      case 'inscripc':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('inscripcion');
        break;

      case 'inscripci':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('inscripcion');
        break;

      case 'inscripcio':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('inscripcion');
        break;

      case 'inscripcion':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('inscripcion');
        break;
      case 'l':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('login');
        break;

      case 'lo':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('login');
        break;

      case 'log':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('login');
        break;

      case 'logi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('login');
        break;

      case 'login':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('login');
        break;

      case 'm':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('materia');
        break;

      case 'ma':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('materia');
        break;

      case 'mat':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('materia');
        break;

      case 'mate':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('materia');
        break;

      case 'mater':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('materia');
        break;

      case 'materi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('materia');
        break;

      case 'materia':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('materia');
        break;
      case 'n':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('numero');
        break;

      case 'nu':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('numero');
        break;

      case 'num':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('numero');
        break;

      case 'nume':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('numero');
        break;

      case 'numer':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('numero');
        break;

      case 'numero':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('numero');
        break;

      case 'p':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        this.searchProcess('plan');
        this.searchProcess('planificador');
        this.searchProcess('progreso');
        break;

      case 'pe':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        break;

      case 'pen':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        break;

      case 'pend':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        break;

      case 'pendi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        break;

      case 'pendie':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        break;

      case 'pendien':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        break;

      case 'pendient':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        break;

      case 'pendiente':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        break;

      case 'pendientes':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('pendientes');
        break;

      case 'pl':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('plan');
        this.searchProcess('planificador');
        break;

      case 'pla':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('plan');
        this.searchProcess('planificador');
        break;

      case 'plan':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('plan');
        this.searchProcess('planificador');
        break;
      case 'plani':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('planificador');
        break;

      case 'planif':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('planificador');
        break;

      case 'planifi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('planificador');
        break;

      case 'planific':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('planificador');
        break;

      case 'planifica':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('planificador');
        break;

      case 'planificad':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('planificador');
        break;

      case 'planificado':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('planificador');
        break;

      case 'planificador':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('planificador');
        break;
      case 'pr':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('progreso');
        break;

      case 'pro':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('progreso');
        break;

      case 'prog':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('progreso');
        break;

      case 'progr':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('progreso');
        break;

      case 'progre':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('progreso');
        break;

      case 'progres':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('progreso');
        break;

      case 'progreso':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('progreso');
        break;
      case 's':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('solicitar');
        this.searchProcess('subsidio');
        break;

      case 'so':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('solicitar');
        break;

      case 'sol':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('solicitar');
        break;

      case 'soli':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('solicitar');
        break;

      case 'solic':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('solicitar');
        break;

      case 'solici':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('solicitar');
        break;

      case 'solicit':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('solicitar');
        break;

      case 'solicita':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('solicitar');
        break;

      case 'solicitar':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('solicitar');
        break;
      case 'su':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('subsidio');
        break;

      case 'sub':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('subsidio');
        break;

      case 'subs':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('subsidio');
        break;

      case 'subsi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('subsidio');
        break;

      case 'subsid':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('subsidio');
        break;

      case 'subsidi':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('subsidio');
        break;

      case 'subsidio':
        this.resultados = [];
        this.load = true;
        this.notResults = false;
        this.searchProcess('subsidio');
        break;
      default:
        this.resultados = [];
        this.load = false;
        this.notResults = true;
    }
  }

  searchProcess(query: string) {
    query = query.toLowerCase();

    db.procesos.forEach((proceso) => {
      if (proceso.claves.includes(query)) {
        this.load = false;
        this.resultados.push(proceso);
      }
    });
  }

  viewProcess(event: any, resultado: Proceso) {
    event.preventDefault();
    this.activeProcess = resultado;
    this.searchInput.nativeElement.value = '';
    this.resultados = [];
    this.load = false;
    this.notResults = true;
    this.activePasos = [];

    this.activeProcess?.pasos.forEach((clave) => {
      db.pasos.forEach((paso) => {
        //console.log('clave', clave);
        if (clave === paso.id) {
          //console.log(clave);
          //console.log(paso.id);

          this.activePasos.push(paso);
        }
      });
    });

    console.log(this.activePasos);
  }
}
