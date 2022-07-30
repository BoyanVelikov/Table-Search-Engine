function solve() {
   buttonSearch = document.getElementById("searchBtn");
   buttonSearch.addEventListener("click", searchFunc);
   count = 0;

   function searchFunc() {
      if (count > 0) {
         selectedRow.classList.remove("select");
         searchedStringF = '';
      }

      searchedStringI = document.getElementById("searchField");
      searchedStringF = searchedStringI.value;

      tableCells = document.querySelectorAll("td");
      for (each of tableCells) {
         x = each.textContent;
         if (x.includes(searchedStringF)) {
            selectedRow = each.parentNode;
            selectedRow.className = "select";
            count += 1;
         }
      }

   }

}