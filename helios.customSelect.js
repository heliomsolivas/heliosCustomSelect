jQuery.fn.customSelect = function(options) {
  function chooseOption() {
    var selectOption = $(".select__opcoes__label");

    selectOption.click(function() {
      var selectName = $(this).text();
      $(".select__atual__text").text(selectName);
      $(".select__opcoes").hide();
    });
  }

  function openSelect() {
    var selectBox = $(".select__atual");

    selectBox.click(function() {
      $(this).toggleClass("open");
      $(".select__opcoes").toggle();
    });
  }

  function appendRadios() {}

  function appendOption() {
    var list = settings.list;
    var lista = [];
    var listaIds = [];

    $(list).each(function(i, elem) {
      var id = elem
        .replace(/ /g, "")
        .replace(/[^\w\s]/gi, "")
        .toLowerCase();
      console.log(id);

      listaIds.push(
        `<input type="radio" id="${id}" value="${elem}" name="optSelect">`
      );
      lista.push(
        `<label class="select__opcoes__label" for="${id}">${elem}</label>`
      );
    });

    $(".wrapper-select").prepend(listaIds);
    $(".select__opcoes").append(lista);
  }

  var settings = $.extend(
    {
      border: "1px solid red",
      list: ["Option 1", "Option 2"],
      defaultText: "Choose an option",
      textColor: "#fff",
      bgColor: "#222428",
      width: "100%"
    },
    options
  );

  return this.each(function(i, elem) {
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
      .css({
        border: settings.border,
        color: settings.textColor,
        background: settings.bgColor,
        width: settings.width
      })
      .click(appendRadios())
      .click(appendOption())
      .click(openSelect())
      .click(chooseOption());
  });
};
