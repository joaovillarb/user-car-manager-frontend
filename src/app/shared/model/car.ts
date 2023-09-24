export interface Car {
    year: number | null;
    licensePlate: string;
    model: string;
    color: string;
    active: boolean | null;
}

export const emptyCar: () => Car = () => ({
    year: null,
    licensePlate: '',
    model: '',
    color: '',
    active: null
});
