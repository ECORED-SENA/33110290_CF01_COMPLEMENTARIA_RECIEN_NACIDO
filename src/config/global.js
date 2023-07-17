export default {
  global: {
    componenteFormativo:
      'Marco general de la Ruta Integral de Atención en Salud a población Materno Perinatal (RIAMP)',
    descripcionCurso:
      'De acuerdo con los lineamientos técnicos y operativos en los cuales se establecen las directrices para el desarrollo de la Ruta Integral de Atención en Salud a la población Materno Perinatal, se ofrece mediante el desarrollo de este componente,  una preparación adecuada en torno a las condiciones clínicas y las medidas terapéuticas que deben ser aplicadas y definidas en la intervención individual y colectiva, de todos los neonatos y mujeres, para su atención durante las primeras 24 horas de vida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-gif-1'],
        imagen: require('@/assets/curso/portada/circulo.gif'),
      },
      {
        clases: ['banner-principal-gif-2'],
        imagen: require('@/assets/curso/portada/linea.gif'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ley Estatutaria',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Política de Atención Integral en Salud ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ruta Integral de Atención Materno Perinatal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Gestión de la atención integral en Salud Materno Perinatal (Gestión de Intervenciones definidas en la RIAMP)',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Enfoque Antenatal de Riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Factores de riesgo antenatal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Evaluación del riesgo materno perinatal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Control prenatal',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Intervenciones colectivas',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Generalidades',
      referencia:
        'Resolución 3280 de 2018. [Ministerio de Salud y Protección Social]. Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Agosto 2 de 2018.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf',
    },
    {
      tema: 'Ley Estatutaria ',
      referencia:
        'MinSalud. (204). Preguntas y Respuestas sobre la Ley Estatutaria. ',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/ley-estatutaria-abc-jun-2014.pdf',
    },
    {
      tema: 'Enfoque Antenatal del Riesgo',
      referencia:
        'Minsalud. (2017). Lineamiento técnico y operativo de la Ruta Integral de Atención en Salud Materno Perinatal.',
      tipo: 'PDF',
      link:
        'https://www.dssa.gov.co/images/documentos/Lineamiento_materno_perinatal.pdf',
    },
    {
      tema: 'Enfoque Antenatal del Riesgo',
      referencia:
        'Ministerio de Salud y Protección Social – Colciencias. (2013). Guía de Práctica Clínica del Recién Nacido Sano. ',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IETS/GPC_Prof_Sal_RNSano.pdf',
    },
    {
      tema: 'Enfoque Antenatal del Riesgo',
      referencia:
        'Organización Mundial de la Salud (OMS). (2021). Normas para mejorar la calidad de la atención a los recién nacidos enfermos o de pequeño tamaño en los establecimientos de salud ',
      tipo: 'PDF',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/341557/9789240017245-spa.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Enfoque Antenatal del Riesgo',
      referencia:
        'Suarez E. (1982). El enfoque de riesgo en la atención perinatal y materno infantil. <em>Boletín de la oficina Sanitaria Panamericana</em>. ',
      tipo: 'PDF',
      link:
        'https://iris.paho.org/bitstream/handle/10665.2/17118/v92n6p482.pdf?sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Atención',
      significado:
        'servicios recibidos por los individuos o las poblaciones para promover y mantener la salud. ',
    },
    {
      termino: 'Derecho',
      significado:
        'es el conjunto de normas que imponen deberes y confieren facultades que establecen las bases de convivencia social.',
    },
    {
      termino: 'Infancia',
      significado:
        'etapa de la vida del hombre comprendida desde el nacimiento hasta la pubertad.',
    },
    {
      termino: 'Integrales',
      significado:
        'es la principal condición del desarrollo humano, es el estado del bienestar que permiten un adecuado crecimiento y desarrollo en todos los ámbitos de la vida y personas. ',
    },
    {
      termino: 'Lineamiento',
      significado:
        'documento en el cual se establecen directrices específicas o políticas internas asociadas a un tema, proceso o método en particular.',
    },
    {
      termino: 'Materno perinata',
      significado:
        'es el adecuado desarrollo de control prenatal y perinatal dicho control debe ser precoz, periódico, completo, de calidad y de amplia cobertura; siendo ofrecido a la mayor población posible y garantizando su fácil accesibilidad. ',
    },
    {
      termino: 'Morbilidad',
      significado:
        'se refiere a la presentación, síntoma o proporción de una enfermedad en una población. ',
    },
    {
      termino: 'Mortalidad',
      significado:
        'estudia la frecuencia del número de defunciones ocurridas en una población, área geográfica y periodo determinado. ',
    },
    {
      termino: 'Normativa',
      significado:
        'es un conjunto de normas y reglas que tienen como finalidad, regular y asegurar las cantidades y características en la reproducción o servicio de los bienes de consumo entre personas físicas y/o jurídicas. ',
    },
    {
      termino: 'Políticas',
      significado:
        'configuran un dispositivo postmoderno que instrumentaliza ideologías manteniendo el poder y hegemonía, que no solo orienta un sector, sino que requieren mirarse desde un pensar crítico que profundice más allá de escenarios democráticos. ',
    },
    {
      termino: 'RIAS',
      significado:
        'Rutas Integrales de Atención en Salud – Definen las condiciones necesarias para asegurar la integridad en la atención por parte de los agentes del Sistema de Salud (territorio, asegurador, prestador) y de otros sectores. ',
    },
    {
      termino: 'Riesgo',
      significado: 'contingencia o proximidad de un daño o peligro. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Enfermeriacelayane. (2018). Unidad didáctica 3: Enfoque de riesgo en la atención materno infantil Licenciatura en Enfermería y obstetricia. Universidad de Guanajuato. ',
      link:
        'https://blogs.ugto.mx/enfermeriaenlinea/unidad-didactica-3-enfoque-de-riesgo-en-la-atencion-materno-infantil/ ',
    },
    {
      referencia:
        'Instituto Nacional de Salud (INS). (2018). Mortalidad Perinatal y Neonatal. Boletín epidemiológico semanal. ',
      link:
        'https://www.ins.gov.co/buscador-eventos/BoletinEpidemiologico/2018%20Bolet%C3%ADn%20epidemiol%C3%B3gico%20semana%2032.pdf',
    },
    {
      referencia: 'Ministerio de Salud. (2016). Ley Estatutaria. ',
      link: 'https://www.minsalud.gov.co/Paginas/prueba_tabs_hd.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Rutas Integrales de Atención en Salud –RIAS. Biblioteca digital.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/05-rias-presentacion.pdf ',
    },
    {
      referencia:
        'Ministerio de Salud (s.f.). Ruta para mejorar la salud materna. ',
      link:
        'https://www.minsalud.gov.co/salud/publica/ssr/Paginas/Ruta-para-mejorar-la-salud-materna.aspx',
    },
    {
      referencia:
        'Secretaria Distrital de Salud. Alcaldía de Bogotá. (2018). Política de Atención Integral en Salud Modelo Integral de Atención e Salud. ',
      link:
        'http://www.saludcapital.gov.co/DSP/Tecnovigilancia/Primer_Encuentro_Distrital_de_Tecnovigilancia/PAIS_MIAS_RIAS_060318.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Efraín Gómez Matamoros',
          cargo: 'Experto Temático',
          centro:
            'Regional Distrito Capital - Centro de Formación de Talento Humano en Salud',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
