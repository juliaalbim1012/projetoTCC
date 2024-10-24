const inputCEP = document.querySelector('input[name="user_cep"]');
const inputCPF = document.querySelector('input[name="user_cpf"]');
const inputPhone = document.querySelector('input[name="user_telefone"]');
const btnCEP = document.querySelector("#btncep");


if (inputCEP !== null) {
  inputCEP.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
    let cepValue = e.target.value.replace(/\D+/g, "");
    
  cepValue = cepValue.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
   
  e.target.value = cepValue;
  });
}

if(inputCPF !== null){
  inputCPF.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
    let value = e.target.value.replace(/\D+/g, "");
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    e.target.value = value;
    });
  }

  if(inputPhone !== null) {
    inputPhone.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/g, "");
      let value = e.target.value.replace(/\D+/g, "");
      const phoneArray = value.split("");

      if (phoneArray[2] == 9) {
        inputPhone.maxLength = 15;
      
    }

      if (phoneArray[2] != 9) {
        inputPhone.maxLength = 14;
    }
    
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");

    return (e.target.value = value);

  });
 }