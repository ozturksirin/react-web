export type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};
