// Placeholder interface for CardProps
export interface CardProps {
  title: string; // Title of the card
  description?: string; // Optional description of the card
  imageUrl?: string; // Optional image URL for the card
  onClick?: () => void; // Optional click handler
}

// Placeholder interface for ButtonProps
export interface ButtonProps {
  label: string; // Text displayed on the button
  onClick: () => void; // Click handler for the button
  disabled?: boolean; // Optional flag to disable the button
  style?: React.CSSProperties; // Optional inline styles for the button
}
