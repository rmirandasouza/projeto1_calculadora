// Criando a classe da calculadora
class Calculator{
    constructor(){
        // Aqui é a propriedade que recebe os valores digitados 
        this.displayValue = " "; 
    }
    // Este método adiciona os valores à propriedade displayValue
    //permitindo que o usuario veja os caracteres/valores na tela
    appendToDisplay(value) {
        this.displayValue += value;
        // Chamamos o metado updateDisplay dentro do metado appendToDisplay para que quando o usuario digitar alguma tecla da calculadora o valor que foi armazenado na propriedade displayvalau seja exibida na tela
        this.updateDisplay();

    }
    //Este método atualiza o elemento input no HTML com o valor atual está armazenado em displayValue
    updateDisplay(){
        document.getElementById("displayContent").value = this.displayValue;
    }
    // Este método limpa o valor que está armazenado em displayValue e chama função updateDisplay para atualizar a tela com um valor vazio.
    clearDisplay(){
        this.displayValue = " ";
        this.updateDisplay();
    }
    // O metado try catch  executa o calculo da expressão matremática contida em displayValue. Este metodo utiliza a função eval() para avaliar a expressão e, se for bem sucedida, atualiza o displayVAlue. Com o resultado e chama a função updateDisplay(). Se ocorrer um erro durante avaliação, ele atualiza o displayValue com a mensagem "Erro" e chama a função updateDisplay().
    calculate(){

        try{
            const result = math.evaluate(this.displayValue);
            this.displayValue = result.toString();
            this.updateDisplay();
        } catch (error) {
            this.displayValue = "Erro"
            this.updateDisplay();
        }
    }
}

//Criando o objeto ou instanciando a classe
// Objeto chamado calc
const calc = new Calculator();