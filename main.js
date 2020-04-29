const plus = document.getElementById('button-plus');
const minus = document.getElementById('button-minus');
const multiply = document.getElementById("button-multiply");
const divide = document.getElementById("button-divide");
const equal = document.getElementById('button-equal');

const one = document.getElementById("button-one");
const two = document.getElementById("button-two");
const three = document.getElementById("button-three");
const four = document.getElementById("button-four");
const five = document.getElementById("button-five");
const six = document.getElementById("button-six");
const seven = document.getElementById("button-seven");
const eight = document.getElementById("button-eight");
const nine = document.getElementById("button-nine");
const zero = document.getElementById("button-zero");
const comma = document.getElementById("button-comma");

const allClear = document.getElementById("button-AC");
const plusMinus = document.getElementById("button-plus-minus");
// const percent = document.getElementById("button-percent");

const display = document.getElementById('textview');

const updateDisplay = () => {
  //Show the value on display.
  display.textContent = value;
}

/**
 * Delete Zero if display has only "0"
 */
const deleteZero = () => {
    if(display.textContent === "0") {
        display.textContent = "";
    }
}

/**
 * Check the expression have number at the end.
 */
const checkExpression = () => {
    if(" " === display.textContent.slice(-1)) {
        return false;
    }
    return true;
}

/**
 * ========================================
 *  There are method of "other" class under.
 * ========================================
 */

plus.onclick = () => {
    if ( checkExpression() ) {
    display.textContent += " + ";
    }
}

minus.onclick = () => {
    if ( checkExpression() ) {
    display.textContent += " - ";
    }
}

divide.onclick = () => {
    if ( checkExpression() ) {
    display.textContent += " / ";
    }
}

multiply.onclick = () => {
    if ( checkExpression() ) {
    display.textContent += " * ";
    }
}

equal.onclick = () => {

    if (display.textContent.indexOf(" ") != -1) { //式になっているかCHECK

        let inputStream = display.textContent; // inputStreamを初期化
        let temp = display.textContent.substring(0,display.textContent.indexOf(" ")) // 最初の数字を読み込む。
        inputStream = inputStream.substring(inputStream.indexOf(" "),inputStream.length)  // inputStreamを更新(最初の一回)

        while (inputStream.length != 0) {
            const blank = inputStream.indexOf(" "); // 常に0となる。

            let previous =Number(temp); // 前式の数字
            let operator = inputStream.substring(blank,blank+3); //演算子
            let post =0; // Inicialize
            nextBlank = inputStream.indexOf(" ",blank+3);

            // 後式の数字を特定、inputStreamの更新
            if( nextBlank != -1) { //次の演算子が存在するならば
                post = Number(inputStream.substring(blank+3,nextBlank));
                inputStream = inputStream.substring(nextBlank,inputStream.length)
            } else { // 終わりならば
                post = Number(inputStream.substring(blank+3,inputStream.length))
                inputStream ="";
            }

            console.log("blank",blank)
            console.dir("previous:"+previous+".")
            console.log("operator:"+operator+".")
            console.log("post:"+post+".")

            // 演算処理
            if(operator === " + ") {
                temp = String(previous + post);
            } else if (operator === " - ") {
                temp = String(previous - post);
            } else if (operator === " * ") {
                temp = String(previous * post);
            } else if (operator === " / ") {
                temp = String(previous / post);
            }
        }
        display.textContent = temp;
    }
}

/**
 * ========================================
 *  There are method of "number" class under.
 * ========================================
 */

one.onclick = () => {
    deleteZero();
    display.textContent += "1";
}

two.onclick = () => {
    deleteZero();
    display.textContent += "2";
}

three.onclick = () => {
    deleteZero();
    display.textContent += "3";
}

four.onclick = () => {
    deleteZero();
    display.textContent += "4";
}

five.onclick = () => {
    deleteZero();
    display.textContent += "5";
}

six.onclick = () => {
    deleteZero();
    display.textContent += "6";
}

seven.onclick = () => {
    deleteZero();
    display.textContent += "7";
}

eight.onclick = () => {
    deleteZero();
    display.textContent += "8";
}

nine.onclick = () => {
    deleteZero();
    display.textContent += "9";
}

zero.onclick = () => {
    deleteZero();
    display.textContent += "0";
}

comma.onclick = () => {
    display.textContent += ".";
}

/**
 * ========================================
 *  There are method of "other" class under.
 * ========================================
 */

allClear.onclick = () => {
    display.textContent = "0";
}

/**
 * Add "+" or "-" displayed number. If displayed number has only "0", No do. 
 */
plusMinus.onclick = () => {
    if(display.textContent.substring(0,1) === "-" && display.textContent !== "0") { //先頭に-がついてる場合。
        display.textContent = display.textContent.substring(1,display.textContent.length);
    } else if (display.textContent !== "0") { //先頭に-が付いてない場合
        display.textContent = "-" + display.textContent;
    }
}

/**
 * Multiply 100 and displayed Number.
 */
// percent.onclick = () => {
//     display.textContent = String(display.textContent * 100);
// }




