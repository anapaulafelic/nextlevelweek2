document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField() {
    //duplique qual campo?
  const newFieldSchedule = document.querySelector('.schedule-item').cloneNode(true)

    //antes de colocar na página quero que venham sem preenchimento
    const fields = newFieldSchedule.querySelectorAll('input')

   // para cada field limpar
    /* fields[0].value=""
    fields[1].value="" */

    fields.forEach(function(){
        fields.value="";
    })


    //coloque onde na página?
    document.querySelector('#schedule-items').appendChild(newFieldSchedule)
}