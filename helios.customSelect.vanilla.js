var heliosCustomSelect = function (el, options) {
  this.el = document.querySelector(el);
  this.options = options || {};

  for (var optionName in this.defaultOptions) {
    if (typeof this.options[optionName] === 'undefined') {
      this.options[optionName] = this.defaultOptions[optionName];
    }
  }
}

heliosCustomSelect.prototype.defaultOptions = {
  list: ['Option 1', 'Option 2', 'Option 3'],
  defaultOption: 'Choose an option'
}

heliosCustomSelect.prototype.mount = function () {

  var self = this;

  /*Cria o DOM da lista*/
  let frag = document.createDocumentFragment();

  let fragWrapper = frag.appendChild(document.createElement("div"));
  fragWrapper.className = "wrapper-select";

  let fragSelectAtual = fragWrapper.appendChild(
    document.createElement("div")
  );
  fragSelectAtual.className = "select__atual";

  if (typeof this.options.defaultOption !== 'undefined') {

    let selectAtualText = fragSelectAtual.appendChild(document.createElement("span"));

    selectAtualText.className = "select__atual__text";
    selectAtualText.textContent = this.options.defaultOption;
  }

  let selectIcon = fragSelectAtual.appendChild(
    document.createElement("span")
  );

  selectIcon.className = "select__icon";

  let selectOpcoes = fragWrapper.appendChild(document.createElement("div"));

  selectOpcoes.className = "select__opcoes";

  fragSelectAtual.onclick = function () {
    fragSelectAtual.classList.toggle("open");
    selectOpcoes.classList.toggle("open");
  };

  if (typeof this.options.list !== 'undefined') {

    let items = this.options.list;

    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      let radioLabel = selectOpcoes.appendChild(document.createElement("label"));
      radioLabel.className = "select__opcoes__label";
      radioLabel.setAttribute("for", element);
      radioLabel.textContent = element;

      radioLabel.onclick = function () {
        let selectText = this.textContent;
        let selectAtualText = document.querySelector('.select__atual__text');
        selectAtualText.textContent = self.options.defaultOption + ' ' + selectText;
        document.querySelector('.select__atual').classList.remove('open');
        document.querySelector('.select__opcoes').classList.remove('open');
      };

      let inputRadio = fragWrapper.insertBefore(
        document.createElement("input"),
        fragSelectAtual
      );

      inputRadio.setAttribute("type", "radio");
      inputRadio.setAttribute("id", element);
      inputRadio.setAttribute("name", "optSelect");
    }
  }

  this.el.appendChild(frag);
}