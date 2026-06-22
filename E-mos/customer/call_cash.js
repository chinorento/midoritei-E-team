document.addEventListener("DOMContentLoaded", function () {
  const callButton = document.querySelector(".action-card button:nth-of-type(1)");
  const payButton = document.querySelector(".action-card button:nth-of-type(2)");
  const callModal = document.querySelector("#callModal");
  const callModalButton = document.querySelector(".call-modal__button");

  function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.left = "50%";
    toast.style.bottom = "86px";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "rgba(79, 42, 0, 0.9)";
    toast.style.color = "#fff";
    toast.style.padding = "12px 18px";
    toast.style.borderRadius = "999px";
    toast.style.fontSize = "0.95rem";
    toast.style.zIndex = "1000";
    toast.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "opacity 0.25s ease";
      toast.style.opacity = "0";
      setTimeout(() => document.body.removeChild(toast), 250);
    }, 1600);
  }

  function openCallModal() {
    if (!callModal) return;
    callModal.classList.remove("hidden");
  }

  function closeCallModal() {
    if (!callModal) return;
    callModal.classList.add("hidden");
  }

  if (callButton) {
    callButton.addEventListener("click", openCallModal);
  }

  if (callModalButton) {
    callModalButton.addEventListener("click", closeCallModal);
  }

  if (payButton) {
    payButton.addEventListener("click", function () {
      window.location.href = "main_menu.html";
    });
  }
});
