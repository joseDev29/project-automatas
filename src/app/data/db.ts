export interface DB {
  pasos: Paso[];
  procesos: Proceso[];
}

export interface Paso {
  id: string;
  nombre: string;
  descripcion: string;
  link: null | string;
  requisitos: string;
  guias: Guia[];
}

export interface Guia {
  formato: string;
  link: string;
}

export interface Proceso {
  nombre: string;
  guia: string;
  descripcion: string;
  claves: string[];
  pasos: string[];
}

export const db: DB = {
  pasos: [
    {
      id: 'a',
      nombre: 'Ingreso página inicial SIA',
      descripcion:
        'Ingresar a la página de la universidad, menú de opciones, opción estudiantes, opción nuevo SIA.',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Conexion a internet',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1627493771/soporte-sia/paso_a_ooqhbj.png',
        },
      ],
    },
    {
      id: 'Aa',
      nombre: 'Consultar tramites registrados',
      descripcion:
        'En consultar tramites, seleccionamos el grado academico, programa academico, tipo de tramite y fecha a filtrar y estado si se desea',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Haber ingresado a consultar tramites',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_Aa_bva1ik.png',
        },
      ],
    },
    {
      id: 'Ac',
      nombre: 'NavBar',
      descripcion:
        'En la parte superior de la pagina, encontraremos un boton parecido a una lupa, daremos click ahí y se nos abrirá una barra derecha',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Haber ingresado exitosamente al sistema',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_Ac_mhjjku.png',
        },
      ],
    },
    {
      id: 'Ad',
      nombre: 'Navegador',
      descripcion:
        'En la barra de navegacion derecha, aparecerán 3 opciones, daremos click en la que dice "Navegador"',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Estar en el navbar de la pagina',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_Ad_dy39oo.png',
        },
      ],
    },
    {
      id: 'Ae',
      nombre: 'Cambio de contraseña',
      descripcion:
        'Buscaremos la opcion "cambio de contraseña" le damos click y cambiamos la contraseña que tenemos actualmente',
      link: null,
      requisitos: 'Estar en "navegacion" del navbar',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_Ae_1_drpzte.png',
        },
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_Ae_2_jc7dih.png',
        },
      ],
    },
    {
      id: 'Af',
      nombre: 'Autoservicio',
      descripcion:
        'Buscaremos la opcion "AutoServicio" le damos click y se abrirá un menu con diferentes opciones.',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Estar en "navegacion" del navbar',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814262/project_automatas/paso_Af_nsnmyi.png',
        },
      ],
    },
    {
      id: 'Ag',
      nombre: 'Promocion socioeconomica',
      descripcion:
        'Buscaremos la opcion "Promocion socioeconomica" le damos click y se abrirá un menu con diferentes opciones.',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Estar en "Autoservicio" de navegacion.',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_Ag_rgetbl.png',
        },
      ],
    },
    {
      id: 'Ah',
      nombre: 'Subsidios de alimentacion',
      descripcion:
        'Buscaremos la opcion "Subsidios de alimentacion" le damos click en "Aplicar convocatoria"',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Estar en "promocion socioeconimica" de navegacion.',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814262/project_automatas/paso_Ah_i4gimi.png',
        },
      ],
    },
    {
      id: 'Ai',
      nombre: 'Aplicar convocatoria',
      descripcion:
        'Allí seleccionamos: grado académico, programa academico, ciclo electivo, tipo de apoyo (alimentos) , id convocatoria',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Fechas, grado, PBM, evaluacion, apoyo',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814262/project_automatas/paso_Ai_y8vgsb.png',
        },
      ],
    },
    {
      id: 'Aj',
      nombre: 'Lugares de entrega',
      descripcion:
        'Buscaremos la opcion "AutoServicio" le damos click y se abrirá un menu con diferentes opciones.Al darle click en aplicar convocatoria, aparecerán los mercados de entrega, los ordenaremos desde el mas cerca al mas lejos.',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Haber aplicado a la convocatoria',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814262/project_automatas/paso_Aj_potxak.png',
        },
      ],
    },
    {
      id: 'Ak',
      nombre: 'Registros academicos',
      descripcion:
        'Dentro del menu de opciones que aparece al ingresar al SIA, seleccionar "Registros academicos"',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Haber ingresado exitosamente al sistema',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814262/project_automatas/paso_Ak_yz4jjj.png',
        },
      ],
    },
    {
      id: 'Al',
      nombre: 'Historial de notas',
      descripcion:
        'Seleccionamos "Historial de notas" y podremos ver todas las notas de las materias cursadas y las que se cursan actualmente',
      link: 'https://www.ucaldas.edu.co/portal/',
      requisitos: 'Haber ingresado exitosamente al sistema',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814262/project_automatas/paso_Al_tvpmgx.png',
        },
      ],
    },
    {
      id: 'b',
      nombre: 'Usuario y contraseña',
      descripcion:
        'Rellenar formulario de inicio de sesion con usuario y contraseña.',
      link: 'https://campus.ucaldas.edu.co/psp/cs92prod/?cmd=login&languageCd=ESP&',
      requisitos: 'Ser estudiante o profesor activo en el sistema',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1627493444/soporte-sia/paso_b_kimim1.png',
        },
      ],
    },
    {
      id: 'c',
      nombre: 'Gestion de clases',
      descripcion:
        'Dentro del menu de opciones que aparece al ingresar al SIA, seleccionar Gestion de Clases.',
      link: null,
      requisitos: 'Haber ingresado exitosamente al sistema',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1627493444/soporte-sia/paso_c_ykaao4.png',
        },
      ],
    },
    {
      id: 'd',
      nombre: 'Inscripcion de asignatura',
      descripcion:
        'Dentro del menu de Gestion de Clases, seleccionar Inscripcion de Asignatura.',
      link: null,
      requisitos: 'Ingresar a Gestion de Clases',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814259/project_automatas/paso_d_i7lxno.png',
        },
      ],
    },
    {
      id: 'e',
      nombre: 'Periodo academico',
      descripcion: 'Seleccionar el periodo academico correspondiente.',
      link: null,
      requisitos: 'Ingresar a Inscripcion de Asignatura',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814259/project_automatas/paso_e_sgqbf0.png',
        },
      ],
    },
    {
      id: 'f',
      nombre: 'Mis condiciones academicas',
      descripcion:
        'Seleccionar la opcion Mis Condiciones Academicas y click en Buscar',
      link: null,
      requisitos: 'Haber seleccionado Periodo academico',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814259/project_automatas/paso_f_yxucgl.png',
        },
      ],
    },
    {
      id: 'g',
      nombre: 'Seleccionar asignatura',
      descripcion:
        'Verificar que se cumplen los requisitos para la inscripcion y luego seleccionar la asignatura',
      link: null,
      requisitos: 'Se tiene que cumplir los prerequisitos de la asignatura',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814259/project_automatas/paso_g_guvaup.png',
        },
      ],
    },
    {
      id: 'h',
      nombre: 'Carrito de compras',
      descripcion:
        'Ir al Carrito de compras del menu de gestion de clases, y seleccionar la opcion inscribir asignaturas',
      link: null,
      requisitos: 'Haber seleccionado la asignatura',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_h_1_rhdejv.png',
        },
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_h_2_wi6gik.png',
        },
      ],
    },
    {
      id: 'i',
      nombre: 'Mi Horario de Clases',
      descripcion:
        'Ir a Mi Horario de Clases del menu de gestion de clases, y verificar que la materia haya sido inscrita',
      link: null,
      requisitos: 'Haber inscrito exitosamente la asignatura',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_i_etrkbe.png',
        },
      ],
    },
    {
      id: 'j',
      nombre: 'Mi Planificador',
      descripcion: 'Seleccionar la opcion Mi Planificador y click en Buscar',
      link: null,
      requisitos: 'Tener un planificador hecho anteriormente',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_j_ehwn0n.png',
        },
      ],
    },
    {
      id: 'k',
      nombre: 'Busqueda de clase',
      descripcion: 'Seleccionar la opcion Busqueda de Clases y click en Buscar',
      link: null,
      requisitos: 'Haber ingresao al planificador',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_k_yzrltw.png',
        },
      ],
    },
    {
      id: 'l',
      nombre: 'Seleccionar Materia y Grado',
      descripcion:
        'Seleccionar el programa al que pertenece la materia y el grado (pregrado, posgrado)',
      link: null,
      requisitos: 'Haber localizado la materia en el buscador',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_l_eyy1xa.png',
        },
      ],
    },
    {
      id: 'm',
      nombre: 'Planificador',
      descripcion: 'Dentro de gestion de clases, seleccionar planificador',
      link: null,
      requisitos: 'Haber ingresado a gestion de clases',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_m_kz5nzs.png',
        },
      ],
    },
    {
      id: 'n',
      nombre: 'Plan y condiciones academicas',
      descripcion:
        'Seleccionar plan y condiciones academicas y dentro seleccionar la materia que se desee guardar',
      link: null,
      requisitos: 'Haber ingresado al planificador',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_n_rcxej0.png',
        },
      ],
    },
    {
      id: 'o',
      nombre: 'Detalles del curso',
      descripcion:
        'Una vez seleccionada la materia, en detalle del curso dar click en añadir al planificador',
      link: null,
      requisitos: 'Haber seleccionado una materia y estar en detalle del curso',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_o_cbiri3.png',
        },
      ],
    },
    {
      id: 'p',
      nombre: 'Cancelacion de asignatura',
      descripcion:
        'Dentro de gestion de clases, seleccionar cancelacion de asignatura e indicar el ciclo actual que se cursa',
      link: null,
      requisitos: 'Haber pagado la cacelacion',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_p_ej9rgv.png',
        },
      ],
    },
    {
      id: 'q',
      nombre: 'Baja de clase',
      descripcion:
        'Dentro de baja de clase, seleccionar la clase que se quiere cancelar y dar click en baja clases seleccionadas',
      link: null,
      requisitos:
        'Haber ingresado a cancelar materias y tener materias inscritas.',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_q_j4lmmj.png',
        },
      ],
    },
    {
      id: 'r',
      nombre: 'Confirmar seleccion',
      descripcion:
        'Confirmar la clase que se quiere dar de baja dando click en finalizar baja, y se podrán ver los resultados',
      link: null,
      requisitos: 'Haber seleccionado una materia qus se quiera dar de baja.',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_r_lj3ddf.png',
        },
      ],
    },
    {
      id: 's',
      nombre: 'Progreso académico',
      descripcion:
        'Dentro del menu de opciones que aparece al ingresar al SIA, seleccionar Progreso académico',
      link: null,
      requisitos: 'Haber ingresado exitosamente al sistema',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_s_nmiwii.png',
        },
      ],
    },
    {
      id: 't',
      nombre: 'Seleccionar componente',
      descripcion:
        'Dentro del progreso academico, podremos seleccionar los diferentes componentes con sus respectivos',
      link: null,
      requisitos: 'Haber ingresado a progreso academico',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814260/project_automatas/paso_t_hoi5nr.png',
        },
      ],
    },
    {
      id: 'u',
      nombre: 'Gestión de tramites',
      descripcion:
        'Dentro del menu de opciones que aparece al ingresar al SIA, seleccionar Gestion de tramites',
      link: null,
      requisitos: 'Haber ingresado exitosamente al sistema',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_u_lmykpr.png',
        },
      ],
    },
    {
      id: 'v',
      nombre: 'Peticion de tramite',
      descripcion:
        'En peticion de tramite, seleccionamos el grado academico, programa academico y el tramite: carnet de egresado',
      link: null,
      requisitos: 'Haber ingresado a gestion de tramites',
      guias: [],
    },
    {
      id: 'w',
      nombre: 'Generar solicitud',
      descripcion:
        'Al haberle dado en generar solicitud, nos abre una pagina donde buscaremos la solicitud y damos en ir a la pagina de pagos',
      link: null,
      requisitos: 'Haber realizado exitosamente la solicitud del tramite',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_w_vzrpui.png',
        },
      ],
    },
    {
      id: 'x',
      nombre: 'Gestion de pagos',
      descripcion:
        'Se nos abrirá una pagina donde encontraremos todos los pagos vigentes, seleccionamos la solitud del tramite y elegimos el metodo',
      link: null,
      requisitos: 'Solicitud generada exitosamente',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814261/project_automatas/paso_x_ugxgyr.png',
        },
      ],
    },
    {
      id: 'y',
      nombre: 'Metodo de pago',
      descripcion:
        'Si queremos pagar en el banco, damos en la opcion recibo saldo pendiente, o recibo pago en linea si se quiere hacer por internet',
      link: null,
      requisitos: 'Haber realizado la solicitud exitosamente',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814262/project_automatas/paso_y_ebhi8w.png',
        },
      ],
    },
    {
      id: 'z',
      nombre: 'Anexo de archivos',
      descripcion:
        'Anexamos los archivos correspondientes que se nos indican en "añadir archivo"',
      link: null,
      requisitos:
        'Archivos; documento de identidad, saber pro, carnet estudiantil',
      guias: [
        {
          formato: 'imagen',
          link: 'https://res.cloudinary.com/project-p3/image/upload/v1625814262/project_automatas/paso_z_iglfvd.png',
        },
      ],
    },
  ],

  procesos: [
    {
      nombre: 'Ingreso al sistema',
      guia: 'https://www.youtube.com/watch?v=qOqUIJ3xoGA&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=1&ab_channel=U.deCaldas',
      descripcion: 'Ingresar al nuevo sistema de informacion academico',
      claves: ['ingreso', 'login', 'entrar'],
      pasos: ['a', 'b'],
    },
    {
      nombre: 'Citas de inscripción',
      guia: 'https://www.youtube.com/watch?v=Q5KXovxUsRA&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=2&ab_channel=U.deCaldas',
      descripcion:
        'Ver el horario de la cita de inscripción de materias generado por la universidad.',
      claves: ['inscripcion', 'cita', 'horario', 'materias'],
      pasos: ['a', 'b', 'c', 'Am'],
    },
    {
      nombre: 'Inscripcion de asignaturas',
      guia: 'https://www.youtube.com/watch?v=a2jsWd3qSEk&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=3&ab_channel=U.deCaldas	',
      descripcion:
        'Inscribir la/s asignaturas que se desean cursar en el semestre correspondiente.',
      claves: ['inscripcion', 'materia', 'asignatura'],
      pasos: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    },
    {
      nombre: 'Inscripcion de asignaturas desde el planificador',
      guia: 'https://www.youtube.com/watch?v=n16XS_pQpts&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=4&ab_channel=U.deCaldas',
      descripcion:
        'Inscribir la/s asignaturas que se desean cursar en el semestre correspondiente desde el planificador que se posee actualmente',
      claves: ['inscripcion', 'materia', 'asignatura', 'planificador'],
      pasos: ['a', 'b', 'c', 'd', 'e', 'j', 'g', 'h', 'i'],
    },
    {
      nombre: 'Busqueda de clase e inscripción',
      guia: 'https://www.youtube.com/watch?v=L4PPfLoHkiQ&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=5&ab_channel=U.deCaldas',
      descripcion:
        'Inscribir la/s asignaturas que se desean cursar en el semestre correspondiente desde el planificador que se posee actualmente',
      claves: ['inscripcion', 'materia', 'asignatura', 'busqueda'],
      pasos: ['a', 'b', 'c', 'd', 'e', 'k', 'l', 'g', 'h', 'i'],
    },
    {
      nombre: 'Número de curso e Inscripción de asignatura',
      guia: 'https://www.youtube.com/watch?v=3pIjMfxyIcI&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=8&ab_channel=U.deCaldas',
      descripcion:
        'Inscribir la/s asignaturas que se desean cursar en el semestre correspondiente con el número de curso de cada asignatura.',
      claves: ['inscripcion', 'materia', 'asignatura', 'busqueda', 'número'],
      pasos: ['a', 'b', 'c', 'h', 'j'],
    },
    {
      nombre: 'Mi plan de estudios',
      guia: 'https://www.youtube.com/watch?v=FqCYl6GofyI&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=8&ab_channel=U.deCaldas',
      descripcion:
        'Consultar las asignaturas cursadas y pendientes del plan academico de la carrera cursada.',
      claves: [
        'materia',
        'asignatura',
        'consultar',
        'plan',
        'cursadas',
        'endientes',
      ],
      pasos: ['a', 'b', 'c', 'k'],
    },
    {
      nombre: 'Busqueda del catalogo del curso',
      guia: 'https://www.youtube.com/watch?v=wzy1iVYoExk&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=8&ab_channel=U.deCaldas',
      descripcion:
        'Consultar el catalogo de todos los cursos actuales de la universidad, ordenados alfabeticamente o expandiendo todos, posiblitando agregarlo al planificador',
      claves: ['materia', 'asignatura', 'consultar', 'catalogo', 'cursos'],
      pasos: ['a', 'b', 'c', 'l'],
    },
    {
      nombre: 'Planificador',
      guia: 'https://www.youtube.com/watch?v=feuCUkRehHw&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=9&ab_channel=U.deCaldas',
      descripcion:
        'Se encarga de guardar las materias que se desean inscribir para el curso del semestre.',
      claves: ['materia', 'asignatura', 'cursos', 'planificador'],
      pasos: ['a', 'b', 'c', 'm', 'n', 'o'],
    },
    {
      nombre: 'Cancelar asignatura',
      guia: 'https://www.youtube.com/watch?v=fq-081f08Cg&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=10&ab_channel=U.deCaldas',
      descripcion: 'Cancelar una asignatura actualmente incrita en el semestre',
      claves: ['materia', 'asignatura', 'cursos', 'cancelacion'],
      pasos: ['a', 'b', 'c', 'p', 'q', 'r'],
    },
    {
      nombre: 'Progreso academico',
      guia: 'https://www.youtube.com/watch?v=v-Df4vzeX-0&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=16&ab_channel=U.deCaldas',
      descripcion:
        'Ver el progreso academico porporcentajes de los diferentes componentes de la carrera que se está cursando',
      claves: ['materia', 'asignatura', 'cursos', 'progreso'],
      pasos: ['a', 'b', 's', 't'],
    },
    {
      nombre: 'Carnet egresado',
      guia: 'https://www.youtube.com/watch?v=v-Df4vzeX-0&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=16&ab_channel=U.deCaldas',
      descripcion: 'Solicitar el cartet de egresado a traves de la plataforma',
      claves: ['carnet', 'egresado', 'solicitar'],
      pasos: ['a', 'b', 'u', 'v', 'w', 'x', 'y'],
    },
    {
      nombre: 'Diploma de grado',
      guia: 'https://www.youtube.com/watch?v=v-Df4vzeX-0&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=16&ab_channel=U.deCaldas',
      descripcion: 'Solicitar el diploma de grado a traves de la plataforma',
      claves: ['diploma', 'grado', 'graduado', 'solicitar'],
      pasos: ['a', 'b', 'u', 'v', 'w', 'x', 'y'],
    },
    {
      nombre: 'Solicitud de Grado',
      guia: 'https://www.youtube.com/watch?v=v-Df4vzeX-0&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=16&ab_channel=U.deCaldas',
      descripcion: 'Solicitar el grado a traves de la plataforma',
      claves: ['grado', 'graduado', 'solicitar'],
      pasos: ['a', 'b', 'u', 'v', 'z', 'w', 'x', 'y'],
    },
    {
      nombre: 'Consultar tramites registrados',
      guia: 'https://www.youtube.com/watch?v=sT8V3O5COlo&list=PL-th-jwfYFFeTrE3q839hzurInhB4yblz&index=17&ab_channel=U.deCaldas',
      descripcion:
        'Consultar la lista de tramites registrados del periodo academico correspondiente, ya sea que esten en proceso de pago, pagados etc.',
      claves: ['diploma', 'grado', 'graduado', 'solicitar'],
      pasos: ['a', 'b', 'u', 'Aa'],
    },
    {
      nombre: 'Certificado de estudio',
      guia: 'N/A',
      descripcion: 'Solicitar el certificado de estudio del periodo actual',
      claves: ['certificado', 'estudio', 'solicitar'],
      pasos: ['a', 'b', 'u', 'v', 'w', 'x', 'y'],
    },
    {
      nombre: 'Cambio de contraseña',
      guia: 'N/A',
      descripcion: 'Solicitar el certificado de estudio del periodo actual',
      claves: ['contraseña', 'cambio'],
      pasos: ['a', 'b', 'Ac', 'Ad', 'Ae'],
    },
    {
      nombre: 'Subsidio de alimentacion',
      guia: 'N/A',
      descripcion: 'Solicitar el subsidio de alimentación',
      claves: ['alimentacion', 'subsidio', 'solicitar'],
      pasos: ['a', 'b', 'Ac', 'Ad', 'Af', 'Ag', 'Ah', 'Ai', 'Aj'],
    },
    {
      nombre: 'Historial de cursos Notas',
      guia: 'N/A',
      descripcion: 'Solicitar el subsidio de alimentación',
      claves: ['cursos', 'asignaturas', 'notas', 'historial'],
      pasos: ['a', 'b', 'Ak', 'Al'],
    },
  ],
};
