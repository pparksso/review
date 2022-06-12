const row = document.querySelector("#randomColorTable #row");
const column = document.querySelector("#randomColorTable #column");
const colorBtn = document.querySelector("#randomColorTable .colorBtn");
const colorResetBtn = document.querySelector("#randomColorTable .colorResetBtn");
const tbody = document.querySelector("#randomColorTable .tbody");

colorBtn.addEventListener("click", function () {
  const rowValue = parseInt(row.value);
  const columnValue = parseInt(column.value);
  tbody.innerHTML = "";
  for (i = 0; i < columnValue; i++) {
    let tempHtml = `<tr>`;
    for (j = 0; j < rowValue; j++) {
      const randomColor = Math.floor(Math.random() * 255 * 255 * 255)
        .toString(16)
        .padStart(6, 0);
      tempHtml += `<td style="background-color:#${randomColor}">#${randomColor}</td>`;
    }
    tempHtml += `</tr>`;
    tbody.innerHTML += tempHtml;
  }
});

colorResetBtn.addEventListener("click", function () {
  row.value = "";
  column.value = "";
  tbody.innerHTML = "";
});
