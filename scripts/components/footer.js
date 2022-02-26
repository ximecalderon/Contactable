export default function footer(...options) {
  function renderOption(option) {
    return `<button type=${option.type} class="link ${option.class}">${option.tag}</button>`
  }

  return `
  <footer class="section-md border-top p-15">
    <div class="flex flex-end gap-26 js-footer-options">
    ${options.map(renderOption).join("")}
    </div>  
  </footer>
  `;
}