// Type

export function calculate(option_input: number, option_output: number, inputvalue: number): number {
  let result: number;
  if (option_input === option_output) {
    return inputvalue;
  } else if (option_input < option_output) {
    result = inputvalue * (option_output / option_input);
  } else {
    result = inputvalue / (option_input / option_output);
  }

  return result;
}
