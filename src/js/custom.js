// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {
   //Menu
   $(".nav-item").on('mouseenter', function (event) {
      event.preventDefault();
      $(this).animate({
         left: '250px',
         right: '-250px',
         opacity: '0.5',
         height: '150px',
         width: '150px'
      });
   });
   $(".nav-item").on('mouseleave', function (event) {
      event.preventDefault();
      $(this).animate({
         left: '-250px',
         right: '250px',
         opacity: '100',
         width: '100px'
      });
   });

   //Produtos
   $('.owl-carousel').owlCarousel();

   //jqueryMask 
   $('.date').mask('00/00/0000');
   $('.phone_with_ddd').mask('(00) 0 000-00000');
   $('#FormCPF').mask('000.000.000-00', { reverse: true });
   $('.money').mask('000.000.000.000.000,00', { reverse: true });
   $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });


   /* - Checar se o nome é válido (mais de 2 caracteres)
   * - Checar se o email é válido com ao menos um @ e .
   * - Checar se o CPF é válido com regex 
   */
   $('#FormName').on('focusout', function (e) {
      e.preventDefault()
      let valorNome = $("#FormName").val()
      if (valorNome == " " || valorNome.length <= 2) {
         $(this).addClass('erroModal')
         $('#helpNome').css({ 'display': 'block', 'color': 'red' })
      }
      else {
         $(this).removeClass('erroModal')
         $('#helpNome').css({ 'display': 'none', 'color': 'red' })
      }
   });

   // Válida CPF e CNPJ expressão regex: ([0 - 9]{ 2 } [\.] ? [0 - 9]{ 3 } [\.] ? [0 - 9]{ 3 } [\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})
   // event focusout ou blur
   $('#FormCPF').on('blur', function (e) {
      e.preventDefault()
      const cpfValido = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;

      if (this.value.match(cpfValido)) {
         $(this).removeClass('erroModal')
         $('#helpCPF').css({ 'display': 'none', 'color': 'red' })
      }
      else {
         $(this).addClass('erroModal')
         $('#helpCPF').css({ 'display': 'block', 'color': 'red' })
      }
   });

   //não submeter o formulário caso tenha a class erroModal
   //caso dinamicamente adicione depois do 'submit': '.modal-body .form-contato',
   $('#contato-modal').on('submit', function (e) {
      e.preventDefault()

      const inputName = $('#FormName')
      const inputCPF = $('#FormCPF')

      if (inputName.hasClass('erroModal') || inputCPF.hasClass('erroModal')) {
         console.log("verificar campos obrigatórios!")
         return false
      } else {
         $(this).submit()
         return true
      }
   });

   /*          FIM  */
   // function validaInput(elem) {
   //    if ($(elem).val() == "" || elem.length <= 2) {

   //       console.log('o campo de ' + $(elem).attr('name') + ' é obrigatório')

   //       $(elem).addClass('erroModal')
   //       return false
   //    }
   //    else {
   //       $(elem).removeClass('erroModal')
   //    }
   // }

   // $('#FormName').on('blur', function (e) {
   //    e.preventDefault()
   //    validaInput(this)
   // })
   /*
      função recursiva 
   */

   $('.featured-item h4').append('<span class="badge bg-secondary">Novo</span>');


   $('.featured-item h4').dblclick(function () {
      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
         'padding': '15',
      });
      $(this).append('Frete Gratis');
   });

   $('.featured-item a').on('blur', function (event) {
      event.preventDefault(); //vai tirar o comportamento padrão do link 'a'
      $(this).addClass('btn btn-dark stretch-link');
   });

   $(".cadastro #btnCadastrar").on('mouseenter', function (event) {
      event.preventDefault();
      var div = $(this);
      div.animate({ left: '100px' }, "fast");
      div.animate({ fontSize: '3em' }, "fast");
   });
   $(".cadastro #btnCadastrar").on('mouseleave', function (event) {
      event.preventDefault();
      var div = $(this);
      div.animate({ left: '-100px' }, "slow");
      div.animate({ fontSize: '1em' }, "slow");
   });


   /*
    * Manipulação de eventos
    * blur é quando você tirar um elemento do foco  
    */

   // $('.featured-item a').on('blur', function (event) {

   //    event.preventDefault();

   //    alert('Produto esgotado');

   // })

   /* Callback
   * entendendo ações que começam ao termino de outra
   */
   const tempo = 1000
   $('#btnCadastrar').on('click', function (e) {
      e.preventDefault()
      if ($('#nomeInput').val() == '') {
         $('#nomeInput').animate({
            border: '1px solid #f00',
         }, tempo, function () {
            console.log($(this).val())
         })
      }
   });

   $('.featured-item').hover(function () {
      $(this).css({
         'filter': 'grayscale()',
      })
   },
      function () {
         $(this).css({
            'filter': 'none',
         })
      }
   );
});
