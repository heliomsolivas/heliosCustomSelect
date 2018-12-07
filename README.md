# Helios Custom Select

## I'm working in vanilla version

### if you are interested in contribute, take a look inside the file helios.customSelect.vanilla.js

## Usage Vanilla Version

Include the plugin file

```html
<script src="helios.customSelect.vanilla.js"></script>
```

Create an element to wrap the select

```html
<div class="mySelectVanilla"></div>
```

Call the plugin with or without options:

```javascript
var mySelect = new heliosCustomSelect(".mySelectVanilla", {
  list: ["Option1", "Option2", "Option3"],
  defaultOption: "Filter:"
});
```

[Check the example working here:](https://codepen.io/haykou/pen/Jmvwqx).

[Check full example's source code](https://github.com/heliomsolivas/heliosCustomSelect/blob/master/exampleVanilla.html).

## Usage JQuery Version

Include jQuery:

```html
<script
  src="https://code.jquery.com/jquery-3.3.1.slim.js"
  integrity="sha256-fNXJFIlca05BIO2Y5zh1xrShK3ME+/lYZ0j+ChxX2DA="
  crossorigin="anonymous"
></script>
```

Include plugin's CSS and JS:

```html
<link rel="stylesheet" href="helios.customSelect.css" />
<script src="helios.customSelect.js"></script>
```

Call the plugin:

```javascript
$("#mySelect").customSelect({
  border: "1px solid #cecece",
  defaultText: "Escolha uma opção",
  list: ["Opção 1", "Opção 2"]
});
```

[Check full example's source code](https://github.com/heliomsolivas/heliosCustomSelect/blob/master/example.html).

## To-Do

- Options Documentation
- Settings with data-\*
- Add dropdown icons
- Validations
