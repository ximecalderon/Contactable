export default function input({
  label,
  id,
  name,
  placeholder = "",
  type,
  required = false,
  value = false,
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
    </div>
  `;
}
