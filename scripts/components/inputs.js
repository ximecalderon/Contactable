export function input({
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

export function select({
  id,
  name
}) {
  return `
    <div class="section p-60">
      <select required id="${id}" name="${name}" class="select">
          <option disabled selected hidden class="gray-300">Relation</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Work">Work</option>
          <option value="Acquaintance">Acquaintance</option>
      </select>
    </div>
  `;
}

