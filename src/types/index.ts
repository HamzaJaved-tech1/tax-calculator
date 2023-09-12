export type TableBodyProps = {
  id?: number;
  name: string;
  monthly: number;
  yearly: number;
};

export type ButtonProps = {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
  style?: string;
};

export type InputFieldProps = {
  label: string;
  value: number;
  setValue: (value: number) => void;
  isDisabled?: boolean;
};
