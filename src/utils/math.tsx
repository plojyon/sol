// Box–Muller transform of Math.random (https://stackoverflow.com/a/36481059)
export const randNormal = (mean = 0, stdev = 1) => {
    /**
     * Generate a random number from a normal distribution.
     * Ex. randNormal(0, 1) = 0.5
     */
    const u = 1 - Math.random(); // Converting [0,1) to (0,1]
    const v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * stdev + mean;
}

// Sigmoid (https://en.wikipedia.org/wiki/Sigmoid_function)
export const logisticSigmoid = (x: number) => {
    /**
     * Calculate the logistic value of a number.
     * Ex. logisticSigmoid(0) = 0.5
     */
    return 1 / (1 + Math.exp(-x));
}


export const map = (x: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
    /**
     * Map a value from one range to another.
     * Ex. map(0.5, 0, 1, 0, 100) = 50
     */
    return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
