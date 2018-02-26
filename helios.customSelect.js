var selectBox = $(".select__atual");
var selectOption = $(".select__opcoes__label");

selectBox.click(function() {
  $(this).toggleClass("open");
  $(".select__opcoes").toggle();
});

selectOption.click(function() {
  var selectName = $(this).text();
  $(".select__atual__text").text(selectName);
});

jQuery.fn.customSelect = function(options) {
  function openSelect() {
    var selectBox = $(".select__atual");

    selectBox.click(function() {
      $(this).toggleClass("open");
      $(".select__opcoes").toggle();
    });
  }

  // Establish our default settings
  var settings = $.extend(
    {
      border: "1px solid red",
      list: ["Option 1", "Option 2"],
      defaultText: "Choose an option"
    },
    options
  );

  function appendOption() {
    var list = settings.list;
    var lista = [];

    $(list).each(function(i, elem) {
      lista.push(
        `<label class="select__opcoes__label" for="opt1">${elem}</label>`
      );
    });

    $(".select__opcoes").append(lista);
  }

  return this.each(function(i, elem) {
    // console.log(settings.list);
    $(this)
      .append(
        `<div class="wrapper-select">
                  <div class="select__atual">
                  <span class="select__atual__text">${
                    settings.defaultText
                  }</span>
                  </div>
                  <div class="select__opcoes"></div>
                  </div>`
      )
      .css("border", settings.border)
      .click(appendOption())
      .click(openSelect());
  });
};

$("#mySelect").customSelect({
  border: "1px solid #cecece",
  defaultText: "Escolha uma opção",
  list: ["Opção 1", "Opção 2"]
});
