function launch(id) {
  document.getElementById(id).style.display = 'block';
}
function closeApp(id) {
  document.getElementById(id).style.display = 'none';
}
function handleTerminal(e) {
  if (e.key === 'Enter') {
    const input = e.target.value;
    const output = document.getElementById("termOut");
    output.textContent += `\n> ${input}`;
    e.target.value = "";
  }
}