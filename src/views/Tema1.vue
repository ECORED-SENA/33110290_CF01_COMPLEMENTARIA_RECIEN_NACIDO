<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades

    .row.justify-content-center.align-items-center
      .col-lg-8.col-12.mb-4(data-aos="fade-right")
        p El marco normativo en la Ruta Integral de Atención Materno Perinatal es una herramienta operativa de obligatorio cumplimiento a nivel nacional, en la cual se encuentran los lineamientos a seguir para la atención segura del recién nacido y la mujer, incluyendo su entorno familiar, comunitario y social de manera que se garantice un acceso universal en el que se vean involucrados. La población objeto está destinada a mujeres con intención reproductiva en menos de un año, donde se podrán identificar factores de riesgo e intervenirlos buscando garantizar la salud no solo de la mujer sino además de la familia.
        .bg-1.tarjeta.p-3
          .row.align-items-center
            .col-md-2.col-4.mb-4.mb-md-0
              img(src='@/assets/curso/temas/t1/ico.svg' alt='')
            .col-md-10
              p.mb-0 Las instituciones hacen parte fundamental en el proceso de conocer cuáles son esos lineamientos técnicos y operativos que le permitirán la atención segura del recién nacido y la mujer; y determinar si la intervención será de manera colectiva o una intervención individual.   
      .col-lg-4.col-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img.svg' alt='') 

    p.mb-4(data-aos="fade") Cada intervención tiene subdivisiones las cuales afianzan al equipo de talento humano en salud a reconocer la mejor ruta. 
      span.etiqueta.fw-bold La intervención colectiva
      |  tiene tres grandes actividades que buscan fortalecer la red de cuidado familiar y comunitaria, que promueven la salud, no solo materna sino familiar o también llamados materno perinatales; la Resolución 3280 de 2018 expone claramente estas tres actividades:

    
    .row.fondo-t1.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-center
            .col-lg-4.col-md-6.mb-4
              .tarjeta.fondo-sh.text-center.p-3.px-lg-4.h-100
                img.mx-auto.mb-4(src='@/assets/curso/temas/t1/tarj1.svg' alt='' style="width: 100px;") 
                h4 Información para la salud 
                p Se relaciona con actividades que se pueden ejecutar fomentando conceptos de la salud para que la población esté informada; de manera que les permita reconocer las actividades de promoción y prevención, así como el qué hacer frente a los eventos o factores de riesgo que se encuentran para esta ruta.
            .col-lg-4.col-md-6.mb-4
              .tarjeta.fondo-sh.text-center.p-3.px-lg-4.h-100
                img.mx-auto.mb-4(src='@/assets/curso/temas/t1/tarj2.svg' alt='' style="width: 100px;") 
                h4 Educación y comunicación para la salud
                p Permite construir conocimientos para el aprendizaje de acuerdo a las actividades propuestas relacionadas con el cuidado integral como: consulta preconcepcional, control prenatal, higiene oral, lactancia materna y los cuidados básicos del recién nacido y en general la puericultura.
            .col-lg-4.col-md-6.mb-4
              .tarjeta.fondo-sh.text-center.p-3.px-lg-4.h-100
                img.mx-auto.mb-4(src='@/assets/curso/temas/t1/tarj3.svg' alt='' style="width: 100px;") 
                h4 Conformación y fortalecimiento de redes familiares, comunitarias y sociales
                p Estas actividades se basan en construir, coordinar y que haya un intercambio de conocimiento y experiencias entre individuos y comunidades a través de las redes sociales, las cuales pueden dar respuesta de manera activa ante identificación de factores de riesgo.

          .col-lg-1.col-3.mb-4.mb-md-5.pe-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/t1/adorn1.svg' alt='')  
          .col-lg-11.col-12.mb-4.mb-md-5(data-aos="fade-left")
            p.mb-0 Los índices de mortalidad materno perinatal, son indicadores del buen desarrollo que maneja actualmente el país; esto en parte, a la búsqueda constante del mejoramiento en la salud pública.

          .row
            .col-lg-4.mb-4(data-aos="fade-right")
              p El Instituto Nacional de Salud (INS) ha realizado una vigilancia exhaustiva y a través de las siguientes gráficas se presentan los índices de mortalidad desde el año 2008 hasta el año 2019. Estos datos evidencian una disminución en las tasas de mortalidad después de un aumento inicial, gracias al control y seguimiento realizado. Esto demuestra que la implementación de los lineamientos establecidos en la Resolución 3280 de 2018 ha contribuido a mejorar la calidad de vida de las madres, niños y niñas, especialmente durante las etapas perinatal y neonatal:
            .col-lg-8.mb-4(data-aos="fade-left")
              .bg-10.tarjeta.p-4
                SlyderA(tipo="b")
                  .row
                    .col-md-12
                      .titulo-sexto.color-acento-contenido
                        p.mb-0 #[b Figura 1.] Mortalidad Perinatal y Neonatal Tardía por semana epidemiológica
                      img(src='@/assets/curso/temas/t1/slide-img1.png' alt='La imagen representa la tendencia de mortalidad perinatal y neonatal tardía en Colombia entre los años 2008 al 2019. Se relaciona la razón de mortalidad y el número de casos por cada cada año. En esta gráfica, de acuerdo al Boletín Epidemiológico, del Instituto Nacional de Salud, indica que la razón de mortalidad perinatal y neonatal tardía en el 2019 fue de 15,1 muertes por 1 000 nacidos vivos. Luego, hay un descenso en el indicador respecto al año 2018, en que se reportó una tasa de 16,9 muertes por 1 000 nacidos vivos.')
                      figcaption.bg-gris 
                        p.mb-0 Nota. Tomado de Instituto Nacional de Salud (INS) (2018, p.2)
                  .row
                    .col-md-12
                      .titulo-sexto.color-acento-contenido
                        p.mb-0 #[b Figura 2.] Mortalidad Perinatal y Neonatal Tardía por entidad territorial de residencia
                      img(src='@/assets/curso/temas/t1/slide-img2.png' alt='La imagen representa razón de mortalidad perinatal y neonatal tardía en Colombia por entidad territorial de serisdencia entre el 2018 al 2019. En esta gráfica, de acuerdo al Boletín Epidemiológico, del Instituto Nacional de Salud, indica que las cinco entidades territoriales que registran las razones más altas a nivel nacional son Vichada con 36,0, Chocó con 35,5, Vaupés con 30,6, Buenaventura con 29,8 y La Guajira con 24,0 muertes por 1000 nacidos vivos. Lo anterior puede tener una estrecha relación con la alta proporción de personas con necesidades básicas insatisfechas y el alto índice de pobreza multidimensional que concentran esas entidades territoriales.')
                      figcaption.bg-gris 
                        p.mb-0 Nota. Tomado de Instituto Nacional de Salud (INS). (2018, p.2)

          .col-lg-1.col-3.mb-4.mb-md-5(data-aos="fade-right")
            img(src='@/assets/curso/temas/t1/ico2.svg' alt='')  
          .col-lg-11.col-12.mb-4.mb-md-5(data-aos="fade-left")
            p.mb-0 
              span.etiqueta.fw-bold La intervención individual
              |  tiene como objeto realizar de manera adecuada un seguimiento institucional de manera personalizada en la cual participa el equipo multidisciplinario de talento humano en salud donde se realizan varias actividades, alineadas a las demás rutas para la atención y el mantenimiento de la salud. Estas actividades de intervención individual están conformadas por:

          .row.justify-content-center  
            .col-lg-5.col-8.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t1/img2.png' alt='')  
            .col-lg-5.col-12.mb-4(data-aos="fade-left")
              ol.lista-ol
                li.mb-0 
                  span.text-bold.t-purple a. 
                  | La Ruta Integral de Atención en Salud
                li.mb-0 
                  span.text-bold.t-purple b. 
                  | Atención preconcepcional
                li.mb-0 
                  span.text-bold.t-purple c. 
                  | IVE (Interrupción Voluntaria del Embarazo)
                li.mb-0 
                  span.text-bold.t-purple d. 
                  | Cuidado materno perinatal
                li.mb-0 
                  span.text-bold.t-purple e. 
                  | Curso de preparación para la maternidad y paternidad
                li.mb-0 
                  span.text-bold.t-purple f. 
                  | Atención en salud oral
                li.mb-0 
                  span.text-bold.t-purple g. 
                  | Promoción a la sana alimentación y procesos de nutrición
                li.mb-0 
                  span.text-bold.t-purple h. 
                  | Atención del parto y el puerperio
                li.mb-0 
                  span.text-bold.t-purple i. 
                  | Complicaciones obstétricas
                li.mb-0 
                  span.text-bold.t-purple j. 
                  | Complicaciones en el recién nacido
                li.mb-0 
                  span.text-bold.t-purple k. 
                  | Atención del recién nacido
                li.mb-0 
                  span.text-bold.t-purple l. 
                  | Seguimiento del recién nacido
                li.mb-0 
                  span.text-bold.t-purple m. 
                  | Atención de la familia
                li 
                  span.text-bold.t-purple n. 
                  | Atención comunitaria

          p.mb-4(data-aos="fade") De acuerdo a las generalidades encontradas en los modelos de atención, se encuentra la siguiente resolución en la cual se establecen una serie de lineamientos para la atención integral en salud con enfoque en la ruta materno perinatal:

          .row 
            .col-lg-7.mb-4(data-aos="fade-right")
              .bloque-texto-d.color-secundario.p-4.mb-4
                .bloque-texto-d__texto.mb-2
                  i.fas.fa-quote-left
                  p “La Resolución 3280 de 2018, por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación” 
                  i.fas.fa-quote-right
                .bloque-texto-d__autor 
                  .h5.mb-0 - Ministerio de Salud y Protección Social –Resolución Número 3280 de (2018)
              .tarjeta.bg-7.p-3
                .row.align-items-center 
                  .col-md-2
                    img.mx-auto(src='@/assets/curso/temas/t2/ico4.svg' alt='' style="width: 85px;")  
                  .col-md-10
                    p.text-white.mb-0 Conozca al detalle 
                      span.etiqueta.et2.fw-bold la Resolución 3280 de 2018,
                      |  la cual se encuentra en el material complementario, y comprenda mejor cada una de las orientaciones y 
                      span.etiqueta.et2.fw-bold procesos establecidos para la RIASPMP.
            .col-lg-5.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t1/img3.png' alt='') 


    Separador

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1  Ley Estatutaria

    .row.fondo2-t1.align-items-center.pt-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          p.mb-4(data-aos="fade") Es una clasificación de las leyes que regulan derechos y deberes fundamentales, en las personas y la administración de justicia encargada en el territorio nacional. Este derecho se ha adquirido de carácter fundamental y autónomo; por eso debe ser garantizado prioritariamente por el Estado, y debe ser responsabilidad de toda la sociedad. Algunos beneficios de la Ley Estatutaria se presentan en la siguiente figura:

          .col-lg-6.mb-5(data-aos="fade")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Beneficios de la Ley Estatutaria
            img(src='@/assets/curso/temas/t1/fig1.svg' alt='Los beneficios de la Ley Estatutaria son: Mejorar el acceso a los servicios. Eliminar las autorizaciones para las atenciones en los servicios de urgencias. El fortalecimiento del control de servicios farmacéuticos. La incorporación de tendencias tecnológicas que facilitan la atención de los servicios de salud.')

          .col-lg-10
            .tarjeta.bg-1.p-4
              .row.align-items-center
                .col-md-2.col-4.mb-4
                  img.px-lg-3(src='@/assets/curso/temas/t1/ico3.svg' alt='')
                .col-md-10.mb-4
                  p.mb-0 Gracias a la Ley Estatutaria, el equipo que conforma el talento humano en salud se convierte en un profesional con autonomía, permitiendo que su trabajo sea autorregulado con ética, racionalidad y aplicando la evidencia científica; esto no significa que no se encuentren excepciones dentro del sistema de salud, teniendo en cuenta que también se contará con la orientación del Ministerio de Salud y Protección Social, quien define qué tipo de tratamientos no pueden ser recibidos dentro del sistema de salud.
                .col-md-12
                  .tarjeta.bg-white.p-4
                    p.t-purple.mb-0 Se garantizará por medio de esta ley que el derecho a la salud será realmente un derecho fundamental y que a ninguna persona se le podrá negar la atención en los servicios de urgencias dando prioridad a la protección de la salud y la vida.

    p.mb-4(data-aos="fade") La Ley Estatutaria permite que gracias a la implementación de nuevas tendencias tecnológicas, se pueda acelerar el acceso a nuevos tratamientos; pero es el Estado quien toma la decisión de saber en qué momento son aplicados y por medio de qué estrategias se pueden acelerar estos tratamientos y validar si cuentan o no, con la calidad que se necesita para brindar óptimos servicios en salud. En la siguiente figura se observan aspectos claves de esta Ley:

    .row.justify-content-center
      .col-lg-8.mb-5(data-aos="fade")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4.] Ley Estatutaria de Salud
        img(src='@/assets/curso/temas/t1/fig2.svg' alt='Esquema de las Generalidades de la Ley Estatutaria de salud en cuanto a la Ley, sus avances y sus retos.')
        figcaption.bg-gris.mt-3
          p.mb-0 Nota. Adaptado del Ministerio de Salud (2016)

    p.mb-4(data-aos="fade") De igual forma, la Ley Estatutaria da el reconocimiento social como derecho esencial que garantiza la dignidad humana y la igualdad de las oportunidades en la atención y servicios de salud que necesita todo ciudadano, establecido en la Ley 1751 de 2015 (Ley Estatutaria), la cual está definida en la Resolución 3280 de 2018 
      span.t-purple.fw-bold Capítulo 7. Aspectos a considerar en la implementación
      | . Algunos componentes de esta Ley se observan en la figura a continuación:

    .row.justify-content-center
      .col-lg-8.mb-5(data-aos="fade")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 5.] Ley 1751 de 2015
        img(src='@/assets/curso/temas/t1/fig3.svg' alt='El diagrama expone los componentes de la Ley Estatutaria N° 1751 de 2015.')
        figcaption.bg-gris.mt-3
          p.mb-0 Nota. Adaptado de Secretaria Distrital de Salud. Alcaldía de Bogotá. (2018).

    p.mb-4(data-aos="fade") Los principales retos que impone la Ley Estatutaria según Preguntas y Respuestas de la Ley (Minsalud, 2014) se pueden revisar a continuación:

    .row.fondo3-t1.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.mb-2
            .col-lg-3.col-md-6.mb-4
              .tarjeta.fondo-ch.p-4.h-100
                img.mx-auto.mb-4(src='@/assets/curso/temas/t1/tarj2-ico1.svg' alt='' style="width: 80px;")
                p.text-center Diseñar progresivamente un esquema de protección del derecho a la salud basado primordialmente en exclusiones.
            .col-lg-3.col-md-6.mb-4
              .tarjeta.fondo-ch.p-4.h-100
                img.mx-auto.mb-4(src='@/assets/curso/temas/t1/tarj2-ico2.svg' alt='' style="width: 80px;")
                p.text-center Definir un mecanismo de exclusiones legítimo que cumpla con los requisitos constitucionales y sea acatado y respetado por la ciudadanía, las autoridades judiciales y los agentes del sector.
            .col-lg-3.col-md-6.mb-4
              .tarjeta.fondo-ch.p-4.h-100
                img.mx-auto.mb-4(src='@/assets/curso/temas/t1/tarj2-ico3.svg' alt='' style="width: 80px;")
                p.text-center Fortalecer las políticas de transparencia y uso racional de tecnologías en salud en el Marco de la autorregulación médica.
            .col-lg-3.col-md-6.mb-4
              .tarjeta.fondo-ch.p-4.h-100
                img.mx-auto.mb-4(src='@/assets/curso/temas/t1/tarj2-ico4.svg' alt='' style="width: 80px;")
                p.text-center Fortalecer la política farmacéutica y control de precios con el liderazgo del Ministerio de Salud y Protección Social.

          .col-12
            .tarjeta.bg-7.p-3
              .row.align-items-center
                .col-lg-1.col-md-2
                  img.mx-auto(src='@/assets/curso/temas/t2/ico4.svg' alt='' style="width: 85px;")  
                .col-lg-11.col-md-10
                  p.text-white.mb-0 Para entender mejor la decisión de la corte constitucional frente a la atención en salud, se sugiere ver el documento completo de 
                    span.etiqueta.et2.fw-bold Preguntas y Respuestas sobre la ley Estatutaria
                    |  del Ministerio de Salud, que se encuentra en el material complementario.



    Separador

    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2  Política de Atención Integral en Salud

    .row.justify-content-center.mb-3
      .col-md-8.mb-4(data-aos="fade-right")
        p La Política de Atención Integral en Salud es la encargada de orientar el sistema de salud que permite generar las mejores condiciones a la población, mediante la regulación de las condiciones de intervención de la comunidad hacia el acceso a los diferentes servicios de salud, que deben ser prestados de manera oportuna, eficaz y con calidad para prevención y promoción del sistema de salud. Todo esto se encuentra integrado en los territorios en los cuales se desarrolla y que requiere plantear objetivos y estrategias alrededor de la población.
        p Los contenidos encontrados en esta política son:        
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img4.svg' alt='')

    
    .row.fondo4-t1.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-6.mb-4.bg-11.p-4.p-lg-5(data-aos="fade-right")
              img.mb-4(src='@/assets/curso/temas/t1/tarj3-ico1.svg' alt='' style="width: 85px;")
              h5 La construcción de un Marco Estratégico 
              p Como resumen de leyes anteriores ya desarrolladas las cuales tenían como planteamiento la Atención Primaria como elemento fundamental.
            .col-lg-6.mb-4.bg-10.p-4.p-lg-5(data-aos="fade-left")
              img.mb-4(src='@/assets/curso/temas/t1/tarj3-ico2.svg' alt='' style="width: 85px;")
              h5 Un elemento operativo llamado Modelo Integral de Atención en Salud (MIAS) 
              p Es el que orienta cómo se debe operar ese sistema de salud y los agentes que lo componen.
          
          p.mb-4(data-aos="fade") La Política de Atención Integral en Salud (PAIS) y el Modelo Integral de Atención en Salud (MIAS) busca intencionalmente reconocer que la ley estatutaria se encuentra detrás de todas las situaciones de salud, donde están los determinantes sociales, desde el Marco del Plan Decenal de Salud Pública (PDSP) y que son recogidas desde la ley estatutaria. Estos especifican que no todas las situaciones de salud tienen que ver con el sistema de salud siempre y cuando no se tenga que resolver desde los determinantes. Deben ser puntualizados y darle a los diferentes sectores sociales e instituciones del gobierno, la información de las situaciones o determinantes que se deben resolver. La siguiente figura permite resumir esta política:

          .row.justify-content-center.mb-4
            .col-lg-4.mb-4(data-aos="fade-right")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 6.] Ruta de la Política de Atención Integral en Salud
              img(src='@/assets/curso/temas/t1/fig4.svg' alt='La imagen presenta el marco conceptual de la Política de Atención Integral en Salud e el que se muestra la interacción coordinada que debe existir entre las entidades territoriales a cargo de la gestión de la salud pública, los aseguradores (EPS) y los prestadores de servicios. (IPS)')
              figcaption.bg-white.mt-2
                p.mb-0 Nota. Tomado de Minsalud (2016, p.31).
            .col-lg-6.mb-4(data-aos="fade-left")
              .bg-1.p-4.h-100.p-lg-5
                img.mb-4(src='@/assets/curso/temas/t1/adorn2.svg' alt='' style="width: 75px;")
                p Al trabajar de manera integrada con la Política de Atención en Salud (PAIS), se generan mejores condiciones en salud a la población, gracias al control, seguimiento e intervención de quienes conforman los entes sectoriales e intersectoriales, que son responsables de brindar atención y orientación hacia la promoción de la salud y la prevención de la enfermedad.
                p Para regular de manera oportuna este sistema de salud, se debe contar con el diagnóstico, tratamiento, cuidados paliativos y rehabilitación; además del manejo con acceso, continuidad y oportunidad con estrategias de resolución. Esta Política exige que todo debe ejecutarse de manera integrada y con coordinación de cada entidad territorial para un adecuado funcionamiento y atención a las necesidades de la población.

          p.mb-4(data-aos="fade") Algunas generalidades de este modelo de Política de Atención se pueden observar a través del siguiente video:

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/DJ34vo4-jGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Política de Atención Integral en Salud (PAIS)


    Separador

    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3  Ruta Integral de Atención Materno Perinatal

    .row.justify-content-center.mb-md-5
      .col-lg-3.col-md-8.col-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img4.png' alt='')
      .col-lg-9.col-md-12.mb-4(data-aos="fade-left")
        p Las Rutas Integrales de Atención en Salud (RIAS) son aquellas que permiten las condiciones necesarias para acceder a los servicios de la salud, asegurando una atención integral, por parte de los diferentes agentes que conforman el sistema de salud (territorio, asegurador, prestador y otras instituciones)
        p Estas rutas de atención definen cuál es la manera de dar respuesta e indican cuál es nivel de atención, el tipo de atención y la intervención que requiere el individuo, así como las acciones que permiten la promoción de la salud y la prevención de la enfermedad, diagnóstico, tratamiento, rehabilitación y paliación. Todo con el fin de dar cumplimiento al derecho fundamental a la salud, con respuesta al mantenimiento y recuperación de la salud.
        .row
          .col-md-3.col-4
            .bg-8.h-100.tarjeta.d-flex.align-items-center
              img(src='@/assets/curso/temas/t1/img5.svg' alt='')
          .col-md-9
            .bg-4.h-100.p-3.d-flex.align-items-center
              p.mb-0 El Ministerio de Salud y Protección Social, elaboró dentro de la Ruta Integral de Atención en Salud (RIAS) una ruta dirigida a la Atención Materno Perinatal para garantizar la atención integral en salud de las gestantes. Esta herramienta permite gestionar la atención y la intervención en salud teniendo en cuenta la promoción de la salud y la prevención de la enfermedad y todo lo que concierne a la salud de la mujer y sus lineamientos técnicos y operativos, como se observa en la siguiente infografía, de acuerdo con el Ministerio de Salud (s.f.).:
    
    .fondo5-t1.p-4
      .row.align-items-center
        .col-lg-5.mb-4
          img.px-md-3(src='@/assets/curso/temas/t1/img6.svg' alt='')
        .col-lg-7.mb-4  
          h3.t-purple La Ruta Integral de Atención con enfoque en lo Materno
          .linea.mb-4
          p Centrada en las mujeres embarazadas, su proceso de gestación, la familia, comunidad; respetando la cultura, el contexto social, y las necesidades específicas individuales.
          p Apuntando a una atención más segura y de calidad de manera eficaz, eficiente y equitativa.

      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.order-2.order-lg-1
          h5 RIAMP
          p Además de la Ruta Integral de Atención Materno Perinatal, se encuentra la Resolución 3280 de 2018 en la cual se adoptan los lineamientos técnicos y operativos, sus directrices para su desarrollo, contenidos y todos los anexos técnicos necesarios para su obligatorio cumplimiento. 
          .row.align-items-center
            .col-lg-4.col-4
              img.px-md-4(src='@/assets/curso/temas/t1/img8.svg' alt='')
            .col-lg-5.col-8
              h5.mb-0 Normativa
              p.mb-0 Promoción y prevención 
              p.mb-0 Gestión de salud pública 
              p.mb-0 Guías y protocolos
              p Vigilancia en salud pública
        .col-lg-5.mb-4.col-9.order-1.order-lg-2
          img.px-md-3(src='@/assets/curso/temas/t1/img7.svg' alt='')

      .fondo6-t1.p-md-4.p-3
        .row.align-items-center.justify-content-center
          .col-lg-3.col-6
            img.px-md-3(src='@/assets/curso/temas/t1/img9.svg' alt='')
          .col-lg-9
            .bg-9
              p Esta resolución permite de manera integral hacer el seguimiento y garantizar la disponibilidad, capacidad y calidad del talento humano en salud que se requiere para la aplicación y ejecución de las intervenciones y acciones que se encuentran definidas, en los lineamientos de la Ruta Integral de Atención para la población Materno Perinatal.


    Separador

    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.4  Gestión de la atención integral en Salud Materno Perinatal (Gestión de Intervenciones definidas en la RIAMP)

    p.mb-4(data-aos="fade") Una adecuada atención requiere de estrategias y de la gestión a partir de la orientación encontrada en la Ruta Integral de Atención Materno Perinatal, que permite fortalecer y conformar redes sociales y comunitarias, brindando a través de ellas, el conocimiento de cada intervención y hacia dónde dirigirse para mejorar la calidad de la atención; promoviendo y garantizando el derecho a la salud encontradas en las diferentes políticas, planes, programas, proyectos, estrategias y servicios. Todo esto en respuesta de la salud materno perinatal, tal como se observa en la siguiente imagen:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .bg-acento-contenido.tarjeta.p-4
          .row.align-items-center.justify-content-center
            .col-lg-5.col-8.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/t1/img10.png' alt='')
            .col-lg-7.col-12
              h4.text-white Gestión de intervenciones definidas en la Ruta Integral de Atención Materno Perinatal (RIAMP)
              .tarjeta.border-bottom-verde.bg-white.p-4.px-md-5.d-none.d-md-block
                SlyderE(indicadores="derecha")
                  .row
                    h5 Consulta externa
                    ul.lista-ul--color.fa-ul.mb-3
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Medicina general 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Planificación familiar 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Ginecología 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Sexología 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Urología 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Psicología y servicio de vacunación.
                  .row
                    h5 Apoyo diagnóstico
                    ul.lista-ul--color.fa-ul.mb-3
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Ecografías gineco-obstétrica
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Citología vaginal 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Colposcopia 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Laboratorio clínico 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Detección temprana (VPH)
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Asesoría en prueba VIH
                  .row
                    h5 Reproducción asistida
                    ul.lista-ul--color.fa-ul.mb-3
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Consulta y orientación en fertilidad masculina y femenina 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Consulta por genética
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Tratamientos medico/quirúrgicos 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Técnicas Asistidas de Reproducción Humana 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Banco de semen –Conservación de Óvulos (Donación y Conservación)
                  .row
                    h5 Servicios quirúrgicos
                    ul.lista-ul--color.fa-ul.mb-3
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Esterilización femenina por laparoscopia 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Esterilización masculina 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Cirugías ginecológicas 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Cirugías urológicas
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Cirugía General
                  .row
                    h5 Interrupción voluntaria del embarazo
                    ul.lista-ul--color.fa-ul.mb-3
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Orientación por profesionales de la salud 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Atención psicológica 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Procedimientos 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Consulta anticoncepción
                  .row
                    h5 Programa para jóvenes
                    ul.lista-ul--color.fa-ul.mb-3
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Sexualidad 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Derechos sexuales y reproductivos 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Métodos anticonceptivos 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Anticonceptivos de emergencia 
                      li.mb-0 
                        i.fas.fa-chevron-right
                        | Infecciones de Transmisión Sexual ITS
              .tarjeta.border-bottom-verde.bg-white.p-4.px-md-5.d-md-none.d-block
                .row
                  h5 Consulta externa
                  ul.lista-ul--color.fa-ul.mb-3
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Medicina general 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Planificación familiar 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Ginecología 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Sexología 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Urología 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Psicología y servicio de vacunación.
                .row
                  h5 Apoyo diagnóstico
                  ul.lista-ul--color.fa-ul.mb-3
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Ecografías gineco-obstétrica
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Citología vaginal 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Colposcopia 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Laboratorio clínico 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Detección temprana (VPH)
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Asesoría en prueba VIH
                .row
                  h5 Reproducción asistida
                  ul.lista-ul--color.fa-ul.mb-3
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Consulta y orientación en fertilidad masculina y femenina 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Consulta por genética
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Tratamientos medico/quirúrgicos 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Técnicas Asistidas de Reproducción Humana 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Banco de semen –Conservación de Óvulos (Donación y Conservación)
                .row
                  h5 Servicios quirúrgicos
                  ul.lista-ul--color.fa-ul.mb-3
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Esterilización femenina por laparoscopia 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Esterilización masculina 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Cirugías ginecológicas 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Cirugías urológicas
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Cirugía General
                .row
                  h5 Interrupción voluntaria del embarazo
                  ul.lista-ul--color.fa-ul.mb-3
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Orientación por profesionales de la salud 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Atención psicológica 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Procedimientos 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Consulta anticoncepción
                .row
                  h5 Programa para jóvenes
                  ul.lista-ul--color.fa-ul.mb-3
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Sexualidad 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Derechos sexuales y reproductivos 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Métodos anticonceptivos 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Anticonceptivos de emergencia 
                    li.mb-0 
                      i.fas.fa-chevron-right
                      | Infecciones de Transmisión Sexual ITS

    p.mb-4(data-aos="fade") La RIAMP también cuenta con una serie de estrategias y componentes que se pueden observar a continuación:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-11
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.]  Estrategias de la RIAMP
        img(src='@/assets/curso/temas/t1/fig5.svg' alt='La imagen presenta cada una de las etapas de servicio que existen en la Ruta Integral de Atención en Salud – Materno Perinatal')


      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
