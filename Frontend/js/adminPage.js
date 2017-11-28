window.onload=
  function () {
      $("#submit").click(function () {
          let productObj={
              pname:$("#name").val(),
              pprice:$("#price").val(),
              imageLink:$("#link").val()
          };
          console.log(productObj);
          $.post("admin/insert",{productObj},()=>{
              console.log("Data sent");
          });/*to complete my post request i need to set the exact url*/
      });
      $('#home').click(()=>{
          window.location.href="/";
      });
  };