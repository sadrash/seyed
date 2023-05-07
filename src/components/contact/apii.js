
function apii() {

    var form1 = document.getElementById("sheetdb-form1");
    form1.addEventListener("submit", e=> {
      e.preventDefault()
      fetch(form1.action,{
        method: 'POST',
        body: new FormData(document.getElementById("sheetdb-form1")),
      }).then(
        response => response.json()
      ).then(alert('Thank you for submitting our advisors will contact you soon'))
    })
}

export default apii