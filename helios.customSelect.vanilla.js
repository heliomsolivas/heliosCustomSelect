// Create an immediately invoked functional expression to wrap our code
(function() {
  //Construtor
  this.heliosCustomSelect = function(el, options) {
    // Create global element references
    this.element = el;
    this.defaults = options;
    var elementDOM = document.querySelector(el);

    // Define option defaults
    var defaults = {
      list: ["Option 1", "Option 2", "Option 3"],
      defaultOption: "Choose an option"
    };

    //Private Methods
    function buildSelect() {
      var selfElement = el;
      var self = this;

      /*Cria o DOM da lista*/
      let frag = document.createDocumentFragment();
      let fragWrapper = frag.appendChild(document.createElement("div"));
      fragWrapper.className = "wrapper-select";
      let fragSelectAtual = fragWrapper.appendChild(
        document.createElement("div")
      );

      fragSelectAtual.className = "select__atual";
      if (typeof options !== "undefined") {
        let selectAtualText = fragSelectAtual.appendChild(
          document.createElement("span")
        );
        selectAtualText.className = "select__atual__text";
        selectAtualText.textContent = options.defaultOption;
      } else {
        let selectAtualText = fragSelectAtual.appendChild(
          document.createElement("span")
        );
        selectAtualText.className = "select__atual__text";
        selectAtualText.textContent = defaults.defaultOption;
      }
      let selectIcon = fragSelectAtual.appendChild(
        document.createElement("span")
      );

      selectIcon.className = "select__icon";
      let selectOpcoes = fragWrapper.appendChild(document.createElement("div"));
      selectOpcoes.className = "select__opcoes";
      fragSelectAtual.onclick = function() {
        fragSelectAtual.classList.toggle("open");
        selectOpcoes.classList.toggle("open");
      };

      if (typeof options !== "undefined") {
        var items = options.list;
      } else {
        var items = defaults.list;
      }
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        let radioLabel = selectOpcoes.appendChild(
          document.createElement("label")
        );
        radioLabel.className = "select__opcoes__label";
        radioLabel.setAttribute("tabindex", index + 1);
        radioLabel.setAttribute("for", element);
        radioLabel.textContent = element;
        radioLabel.onfocus = function(el) {
          document.addEventListener("keydown", function(e) {
            if (e.keyCode === 13) {
            }
          });
        };
        radioLabel.onclick = function() {
          let selectText = this.textContent;
          let selectAtual = this.parentNode.previousSibling.children[0];
          selectAtual.textContent = selectText;
          selectAtual.parentNode.classList.remove("open");
          selectAtual.parentNode.nextSibling.classList.remove("open");
        };
        let inputRadio = fragWrapper.insertBefore(
          document.createElement("input"),
          fragSelectAtual
        );
        inputRadio.setAttribute("type", "radio");
        inputRadio.setAttribute("id", element);
        inputRadio.setAttribute("name", "optSelect" + selfElement);
      }

      elementDOM.appendChild(frag);
    }
    return buildSelect();
  };
})();
