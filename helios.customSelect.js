jQuery.fn.customSelect = function(options) {
  function chooseOption(obj) {
    var selectOption = obj.find(".select__opcoes__label");

    selectOption.click(function() {
      var selectName = $(this).text();
      obj.find(".select__atual__text").text(selectName);
      obj.find(".select__opcoes").hide();
    });
  }

  function closeSelect(obj) {
    $("body").click(function(event) {
      if (!$(event.target).closest(obj).length) {
        $(".select__opcoes").hide();
      }
    });
  }

  function openSelect(obj) {
    var selectBox = obj.find(".select__atual");

    selectBox.click(function() {
      $(this).toggleClass("open");
      obj.find(".select__opcoes").toggle();
    });
  }

  function appendOption(obj) {
    var list = settings.list;
    var lista = [];
    var listaIds = [];

    $.each(list, function(i, elem) {
      var id = elem
        .replace(/ /g, "")
        .replace(/[^\w\s]/gi, "")
        .toLowerCase();

      listaIds.push(
        `<input type="radio" id="${id}" value="${elem}" name="optSelect">`
      );
      lista.push(
        `<label class="select__opcoes__label" for="${id}">${elem}</label>`
      );
    });

    obj.find(".wrapper-select").prepend(listaIds);
    obj.find(".select__opcoes").append(lista);
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
      .click(appendOption($(this)))
      .click(openSelect($(this)))
      .click(chooseOption($(this)))
      .click(closeSelect($(this)));
  });
};
