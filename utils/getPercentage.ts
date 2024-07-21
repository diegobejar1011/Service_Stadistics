export const getPercentage = (max: number, min: number, value: number): string => {
 
    if (value < min) {
        return 'Valor debajo del rango';
    }
    if (value > max) {
        return 'Valor encima del rango';
    }

    const rangeTotal = max - min;
    
    const percentage = ((value - min) / rangeTotal) * 100;
    
    return `${percentage.toFixed(0)}%`;
};
