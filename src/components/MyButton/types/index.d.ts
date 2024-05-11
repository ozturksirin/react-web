export type ButtonProps = {
  title?: string;
  onPress: () => void;
  buttonContainerStyle?: any;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  disabled?: boolean;
  showLoading?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
};
