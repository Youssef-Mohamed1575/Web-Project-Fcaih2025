document.addEventListener('DOMContentLoaded', () => { 
    const input = document.querySelector('.search-input');// بنخزن العنصر الموجود في search-bar ونخزنه في constant
    input.addEventListener('keyup', function () { //  key up function كل مرة المستخدم يضغط على زر في الكيبورد وهو بيكتب في خانة البحث، شغّل الكود اللي جوا 
      let filter = this.value.toLowerCase();//يتحول كل الحروف ل lower 
      let items = document.querySelectorAll('.item'); //كل العناصر اللي واخده ال class.item يتتسجل في عنصر items 
      items.forEach(item => { // يتعدي علي كل عنصر من المشروبات
        let text = item.textContent.toLowerCase(); //بتاخد كل الكلام اللي في .itemوتحوله lower
        if (text.includes(filter)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  