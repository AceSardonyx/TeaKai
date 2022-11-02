<script> // i love es6
     let redirect_Page = () => {
     let tID = setTimeout(function () {
               window.location.href = "./home";
               window.clearTimeout(tID); // clear timeout :>
          }, 5000);
     }
</script>

// <script>function redirect_Page () { var tID = setTimeout(function () { window.location.href = "#"; window.clearTimeout(tID); }, 5000); } </script>