function launchApp(id) {
  document.getElementById(id).style.display = 'block';
}
function closeApp(id) {
  document.getElementById(id).style.display = 'none';
}
function toggleStartMenu() {
  const menu = document.getElementById('start-menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
function handleTerminal(e) {
  if (e.key === 'Enter') {
    const input = e.target.value;
    const output = document.getElementById("termOut");
    output.textContent += `\n> ${input}`;
    e.target.value = "";
  }
}
function calcInput(val) {
  document.getElementById("calcInput").value += val;
}
function calculate() {
  try {
    const input = document.getElementById("calcInput");
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
}
function clearCalc() {
  document.getElementById("calcInput").value = "";
}