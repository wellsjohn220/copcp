{/* <script>  */}
  const scriptURL = 'https://script.google.com/macros/s/AKfycby69BFjuFqbLbxt7GbHsYEeVJ87daMxiSQX4Vu_kkHn2iMaAinkNO_0kdEUKz4J4qL-/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")  

  const scriptURL2 = 'https://script.google.com/macros/s/AKfycbxRFU7gJwElZci_iLIyoOL_8MXFN_MLaOcBGNPOTsGVg9b9V5bG-VsT8KpxSB05eg/exec'  
  
  const form2 = document.forms['contact-to-google-sheet']
  const msg2 = document.getElementById("msg2")  

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Thank you For Subscribing My Site by 12345 John"
          setTimeout(function(){
              msg.innerHTML = "This site powered by 12345 John in 2024"
          }, 5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })  

  form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
      .then(response => {
          msg2.innerHTML = "Thanks for your contact details by 12345 John"
          setTimeout(function(){
              msg2.innerHTML = "Contact"
          }, 5000)
          form2.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
 function generateDate(){
    let today = new Date().toLocaleDateString('en-AU')
    console.log('Date has been loaded ' + today);
    document.getElementById("reg").value = today;  
    return true;
  }
  function generateEDate(){
    let today = new Date().toLocaleDateString('en-AU')
    let subtime = new Date().toLocaleTimeString('en-AU')
    console.log('E Regeste Time: ' + subtime);
    console.log('E Regeste Date: ' + today);
    document.getElementById("Ereg").value = today;  
    document.getElementById("Eregtime").value = subtime;  
    return true;
  }
