export interface Car {
  id: number | null;
  year: number | null;
  licensePlate: string;
  model: string;
  color: string;
  usageCount: number | null;
  active: boolean | null;
}

export const emptyCar: () => Car = () => ({
  id: null,
  year: null,
  licensePlate: '',
  model: '',
  color: '',
  usageCount: null,
  active: null
});
