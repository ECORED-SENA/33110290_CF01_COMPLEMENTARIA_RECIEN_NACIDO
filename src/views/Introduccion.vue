<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center
      .col-md-8.mb-4(data-aos="fade-right")
        .tarjeta.bg-1.p-3.mb-4
          .row.align-items-center
            .col-lg-2.col-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/intro/ico.svg' alt='')  
            .col-lg-10.col-12
              p.mb-0 Un evento de interés en salud pública es la morbilidad y la mortalidad perinatal, que son representadas desde la semana número 22 de gestación (a los 154 días) o sobre los 500 gr. de peso, hasta los 7 días completos después del nacimiento, ya que presentan un alto impacto en la familia, entorno social e instituciones que hacen seguimiento frente al valor y la productividad de la sociedad, como indicador del nivel de desarrollo de la ciudad.
        p Por tal motivo, mediante el desarrollo de este componente formativo, se pretende fortalecer al talento humano en salud para la atención adecuada de los neonatos y mujeres durante las primeras 24 horas de nacido, de acuerdo con lineamientos técnicos y operativos como se puede observar en el siguiente video:
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/intro/img.svg' alt='')

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
