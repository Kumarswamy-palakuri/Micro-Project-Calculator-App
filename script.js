const display = document.getElementById('display');

    const appendNumber = (number) => {
      display.innerText = display.innerText === '0' ? String(number) : display.innerText + number;
    };

    const appendOperator = (operator) => {
      const lastChar = display.innerText.trim().slice(-1);
      if (!'+-/*'.includes(lastChar)) {
        display.innerText += `${operator} `;
      }
    };

    const deleteNumber = () => {
      display.innerText = display.innerText.trim().length > 1
        ? display.innerText.slice(0, -1).trim()
        : '0';
    };

    const resetCalculator = () => {
      display.innerText = '0';
    };

    const calculate = () => {
      try {
        const sanitizedExpression = display.innerText.replace(/x/g, '*');
        const result = Function(`return ${sanitizedExpression}`)();
        display.innerText = result;
      } catch {
        display.innerText = 'Error';
      }
    };