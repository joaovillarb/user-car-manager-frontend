export interface Car {
    year: number;
    licensePlate: string;
    model: string;
    color: string;
}

export const emptyCar: () => Car = () => ({
    year: 0,
    licensePlate: '',
    model: '',
    color: ''
});
