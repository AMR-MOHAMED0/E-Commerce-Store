 document.addEventListener("DOMContentLoaded", function () {
  // تحديد زر التعديل 
  const editButton = document.querySelector("section.profile button.btn");

  // التأكد من وجود الزر في الصفحة الحالية
  if (editButton && window.location.pathname.includes("profile.html")) {
    editButton.addEventListener("click", function (e) {
      e.preventDefault();
      alert("سيتم فتح نموذج تعديل الملف الشخصي!");
    });
  }
});