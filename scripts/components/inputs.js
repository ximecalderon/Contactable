function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderError(error) {
  return `<span class="error-message">${error}</span>`
}

function renderErrors(fieldID, errors) {
  if (errors) {
    const input = document.getElementById(fieldID);
    input.classList.add(".input--error");

    return errors.map(renderError).join("")
  } else {
    return ""
  }
};

export function renderInputs(...inputs) {
  inputs.map((input) => {
    input({
      label: input,
      id: input,
      placeholder: capitalize(input),
      type: input,
      required: true
    })
  }).join("")
}

export function input({
  label,
  id,
  name,
  placeholder = "",
  type,
  required = false,
  value = false,
  errors
}) {
  return `
    <div class="section p-60">
      <input
        label="${label}"
        type="${type ? type : "text"}"
        placeholder="${placeholder}"
        class="input"
        id="${id}"
        name="${name ? name : id}"
        ${value ? `value="${value}"` : ""}
        ${required ? "required" : ""}
      />
      ${renderErrors(id, errors)}
    </div >
  `;
}

function renderOption(option, isSelected) {
  return `
  <option ${isSelected} value="${option}">${option}</option>
  `
};

function renderOptions(options, selected) {
  return options.map((option) => {
    const isSelected = (option == selected ? "selected" : "");
    return renderOption(option, isSelected)
  }).join("")
};

function printHiddenSelect(selected) {
  if (selected == "") {
    return `<option hidden disabled selected>Relation</option>`
  } else {
    return ""
  }
};

export function select({
  id,
  name,
  selected = "",
  errors
}) {
  return `
  <div class="section p-60">
    <select required id="${id}" name="${name}" class="select">
      ${printHiddenSelect(selected)}
      ${renderOptions(["Family", "Friends", "Work", "Acquaintance"], selected)}
    </select >
  ${renderErrors(id, errors)}
    </div >
  `;
}

