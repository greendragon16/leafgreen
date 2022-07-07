


    
        function is_cpf (c) {

        if((c = c.replace(/[^\d]/g,"")).length != 11)
            return false

        if (c == "00000000000" || c == "11111111111" || c == "22222222222" || c == "33333333333" || c == "44444444444" || c == "55555555555" || c == "66666666666" || c == "77777777777" || c == "88888888888" || c == "99999999999")
            return false;

        var r;
        var s = 0;

        for (i=1; i<=9; i++)
            s = s + parseInt(c[i-1]) * (11 - i);

        r = (s * 10) % 11;

        if ((r == 10) || (r == 11))
            r = 0;

        if (r != parseInt(c[9]))
            return false;

        s = 0;

        for (i = 1; i <= 10; i++)
            s = s + parseInt(c[i-1]) * (12 - i);

        r = (s * 10) % 11;

        if ((r == 10) || (r == 11))
            r = 0;

        if (r != parseInt(c[10]))
            return false;

        return true;
        }


        function fMasc(objeto,mascara) {
        obj=objeto
        masc=mascara
        setTimeout("fMascEx()",1)
        }

        function fMascEx() {
        obj.value=masc(obj.value)
        }

        function mCPF(cpf){
        cpf=cpf.replace(/\D/g,"")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        return cpf
        }

        cpfCheck = function (el) {
            document.getElementById('cpfResponse').innerHTML = is_cpf(el.value)? '<span style="color:green" class="glyphicon glyphicon-ok-sign" title="CPF Válido!" ></span>' : '<span style="color:red" class="glyphicon glyphicon-remove-sign" title="CPF Inválido!">CPF Inválido!</span>';
            if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';
        }


    function MascaraInteiro(num) {
    var er = /[^0-9]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {///verifica se é string, caso seja então apaga
        var texto = $(campo).val();
        $(campo).val(texto.substring(0, texto.length - 1));
        
        return false;
    } else {
        return true;
    }
}
function MascaraFloat(num) {
    var er = /[^0-9.,]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {///verifica se é string, caso seja então apaga
        var texto = $(campo).val();
        $(campo).val(texto.substring(0, texto.length - 1));
        return false;
    } else {
        return true;
    }
}
 //formata de forma generica os campos
function formataCampo(campo, Mascara) {
    var er = /[^0-9/ (),.-]/;
    er.lastIndex = 0;

    if (er.test(campo.value)) {///verifica se é string, caso seja então apaga
        var texto = $(campo).val();
        $(campo).val(texto.substring(0, texto.length - 1));
        return false;
    }
    var boleanoMascara;
    var exp = /\-|\.|\/|\(|\)| /g
    var campoSoNumeros = campo.value.toString().replace(exp, "");
    var posicaoCampo = 0;
    var NovoValorCampo = "";
    var TamanhoMascara = campoSoNumeros.length;
    for (var i = 0; i <= TamanhoMascara; i++) {
        boleanoMascara = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                || (Mascara.charAt(i) == "/"))
        boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(")
                || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "))
        if (boleanoMascara) {
            NovoValorCampo += Mascara.charAt(i);
            TamanhoMascara++;
        } else {
            NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
            posicaoCampo++;
        }
    }
    campo.value = NovoValorCampo;
    ////LIMITAR TAMANHO DE CARACTERES NO CAMPO DE ACORDO COM A MASCARA//
    if (campo.value.length > Mascara.length) {
        var texto = $(campo).val();
        $(campo).val(texto.substring(0, texto.length - 1));
        return false;
    }
    //////////////
    return true;
}

function MascaraMoeda(i) {
    var v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
}

function MascaraGenerica(seletor, tipoMascara) {
    setTimeout(function () {
        if (tipoMascara == 'CPFCNPJ') {
            if (seletor.value.length <= 14) { //cpf
                formataCampo(seletor, '000.000.000-00');
            } else { //cnpj
                formataCampo(seletor, '00.000.000/0000-00');
            }
        } else if (tipoMascara == 'DATA') {
            formataCampo(seletor, '00/00/0000');
        } else if (tipoMascara == 'CEP') {
            formataCampo(seletor, '00000-000');
        } else if (tipoMascara == 'TELEFONE') {
            formataCampo(seletor, '(00) 00000-0000');
        } else if (tipoMascara == 'INTEIRO') {
            MascaraInteiro(seletor);
        } else if (tipoMascara == 'FLOAT') {
            MascaraFloat(seletor);
        } else if (tipoMascara == 'CPF') {
            formataCampo(seletor, '000.000.000-00');
        } else if (tipoMascara == 'CNPJ') {
            formataCampo(seletor, '00.000.000/0000-00');
        } else if (tipoMascara == 'MOEDA') {
            MascaraMoeda(seletor);
        }
    }, 200);
}



