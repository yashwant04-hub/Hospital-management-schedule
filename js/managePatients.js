document.addEventListener("DOMContentLoaded", () => {
  const editButtons = document.querySelectorAll(".edit-btn");

  editButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const userCard = btn.closest(".user-card");
      const editForm = userCard.querySelector(".edit-form");

      // Toggle the form visibility
      if (editForm.style.display === "none" || editForm.style.display === "") {
        editForm.style.display = "block";
        btn.textContent = "Cancel"; // optional: change button label
      } else {
        editForm.style.display = "none";
        btn.textContent = "Edit";
      }
    });
  });
});
