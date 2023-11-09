{/* <script> */}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxbwH6kCXKuDb-0kyGG5H8DPeK79duCnUcM-7XK5IPQyZUW6AvNUW-H1lSG_e7Yqls/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")  

  const scriptURL2 = 'https://script.google.com/macros/s/AKfycbzTFfJJ8-6F7lwArpuDny4TmwilwbscK2crEesOxfSAsaWKRPY61Jw17T7sCPo4X5g/exec'
  const form2 = document.forms['contact-to-google-sheet']
  const msg2 = document.getElementById("msg2")  

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Thank you For Subscribing My Site by 12345 John"
          setTimeout(function(){
              msg.innerHTML = "This site powered by 12345 John in 2023"
          }, 5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })  
  form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg2.innerHTML = "Thank you send contact details"
          setTimeout(function(){
              msg2.innerHTML = "CONTACT"
          }, 5000)
          form2.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })  
// </script>