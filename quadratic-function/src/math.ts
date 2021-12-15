// quadratic formula is ax ^ 2 + bx + c
export function getYfromX(x: number, a: number, b: number, c: number) {
  return a * x ** 2 + b * x + c;
}

// Commented stuff was used to write my homework so I'll keep it here :D
// const a = -2;
// const b = 5;
// const c = 3;

// function getVariables(a: number, b: number, c: number) {
//   const d = b ** 2 - 4 * a * c;
//   const x1 = (-b - Math.sqrt(d)) / (2 * a);
//   const x2 = (-b + Math.sqrt(d)) / (2 * a);
//   const x0 = -b / (2 * a);
//   const y0 = -d / (4 * a);
//   return { d, x1, x2, x0, y0 };
// }

// function formatToString(a: number, b: number, c: number) {
//   const { d, x1, x2, x0, y0 } = getVariables(a, b, c);
//   return `
//   D = b ** 2 - 4ac = ${b ** 2} - ${4 * a * c} = ${d}
//   x1 = -b - sqrt(d) = ${-b} - ${Math.sqrt(d)} = ${x1}
//   x2 = -b + sqrt(d) = ${-b} + ${Math.sqrt(d)} = ${x2}
//   x0 = -b / 2a = ${-b} / ${2 * a} = ${x0}
//   y0 = - D / 4a = -${d} / ${4 * a} = ${y0}
//   D(y) = R
//   `;
// }
// console.log(formatToString(a, b, c));
