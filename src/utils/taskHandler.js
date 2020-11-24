const calculations = (data) => {
  const { left, right, operation } = data;

  switch (operation) {
    case 'addition':
      return left + right;
    case 'subtraction':
      return left - right;
    case 'multiplication':
      return left * right;
    case 'division':
      return left / right;
    case 'remainder':
      return left % right;
    default:
      console.error('Operation not supported!');
      return null;
  }
};

module.exports = { calculations };
