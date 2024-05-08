function showContent(option) {
  var contentDiv = document.getElementById("content");
  switch (option) {
    case 'timeline':
      contentDiv.innerHTML = "<h2>Zeitstrahl</h2><p>Hier ist der Zeitstrahl-Inhalt.</p>";
      break;
    case 'info':
      contentDiv.innerHTML = "<h2>Information</h2><p>Hier ist der Informations-Inhalt.</p>";
      break;
    case 'quiz':
      contentDiv.innerHTML = "<h2>Quiz</h2><p>Hier ist der Quiz-Inhalt.</p>";
      break;
    default:
      contentDiv.innerHTML = "<h2>Default</h2><p>Standardinhalt.</p>";
  }
}

document.getElementById("menu-trigger").addEventListener("mouseenter", function() {
  document.getElementById("menu-options").style.display = "block";
});

document.getElementById("menu-container").addEventListener("mouseleave", function() {
  document.getElementById("menu-options").style.display = "none";
});

