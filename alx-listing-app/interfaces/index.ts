// Placeholder interface for CardProps
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
  children?: React.ReactNode; // Add this line
}

// Placeholder interface for ButtonProps
export interface ButtonProps {
  label: string; // Text displayed on the button
  onClick: () => void; // Click handler for the button
  disabled?: boolean; // Optional flag to disable the button
  style?: React.CSSProperties; // Optional inline styles for the button
}
