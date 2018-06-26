// Create an immediately invoked functional expression to wrap our code
(function() {
  // Define our constructor
  this.heliosSelect = function(obj, items) {
    // Create global element references
    this.obj = obj;
    this.items = items;

    // Define option defaults
    /* First we create global element references. These are important so that we can reference pieces of the Modal from anywhere in our plugin. */

    var defaults = {
      defaultText: "Choose an option",
      list: items
    };

    // Create options by extending defaults with the passed in arugments
    /* Next up, we add a default options object. If a user doesn't provide options, we use these. */
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }
  };

  // Métodos Private
  function buildSelect() {
    /*Pega o objeto passado na chamada do plugin*/
    let objInicial = this.obj;
    let objConversao = objInicial.replace("#", "");
    let objFinal = document.getElementById(objConversao);

    /*Cria o DOM da lista*/

    /* Eu utilizo o createDocumentFragment para dar um appendChild de tudo no objFinal */
    let frag = document.createDocumentFragment();

    let fragWrapper = frag.appendChild(document.createElement("div"));
    fragWrapper.className = "wrapper-select";

    let fragSelectAtual = fragWrapper.appendChild(
      document.createElement("div")
    );
    fragSelectAtual.className = "select__atual";

    let selectAtualText = fragSelectAtual.appendChild(
      document.createElement("span")
    );

    selectAtualText.className = "select__atual__text";

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

    let items = this.items;
    let itemsId = [];

    for (let index = 0; index < items.items.length; index++) {
      const element = items.items[index];
      let radioLabel = selectOpcoes.appendChild(
        document.createElement("label")
      );
      radioLabel.className = "select__opcoes__label";
      radioLabel.setAttribute("for", element);
      radioLabel.textContent = element;

      let inputRadio = fragWrapper.insertBefore(
        document.createElement("input"),
        fragSelectAtual
      );

      inputRadio.setAttribute("type", "radio");
      inputRadio.setAttribute("id", element);
      inputRadio.setAttribute("name", "optSelect");
    }

    objFinal.appendChild(frag);
  }

  // Métodos Públicos
  heliosSelect.prototype.mount = function() {
    // Build out our Modal
    buildSelect.call(this);
  };

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }
})();
