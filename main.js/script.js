document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "scale(1)";
      }, index * 100); // Cria um atraso entre cada foto
    });
  });