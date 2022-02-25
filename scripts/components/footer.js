export default function footer(...options) {
  const renderOptions = () => {
    let optionsTemplate = "";
    options.forEach((option) => {
      optionsTemplate += `<a href="#" class="link ${option.class}">${option.tag}</a>`
    })
    return optionsTemplate
  };

  let template = `
  <footer class="section-md border-top p-15">
    <div class="flex flex-end gap-26 js-footer-options">
    ${renderOptions()}
    </div>  
  </footer>
  `;

  return template;
}