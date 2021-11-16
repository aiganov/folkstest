$(document).ready(function() {

   //  Модальные окна Проектов в Галерее

   $(".gallery-item .btn").click(function () {
      event.preventDefault();
      var a=$(this).attr('aria-controls');
      $("#"+a).toggleClass('project-modal-show'); 
      $(".modal-overlay").toggleClass('modal-overlay-show');
   })

   $(".modal-close").click(function () {
      event.preventDefault();
      $(".project-modal").removeClass('project-modal-show');
      $(".modal-overlay").removeClass('modal-overlay-show');
   })

   $(".modal-overlay").click(function () {
         $(".project-modal").removeClass('project-modal-show');
         $(this).removeClass('modal-overlay-show');
   });

   //  "Загрузить еще" в Галерее

   $(".btn-show-more").click(function () {
      event.preventDefault();
      $(".gallery-row-hidden").toggleClass('gallery-row-show');

       if ($(this).text() == 'Загрузить еще') {
           $(this).text('Скрыть');
       } else {
         $(this).text('Загрузить еще');
       }
    
   })   
});