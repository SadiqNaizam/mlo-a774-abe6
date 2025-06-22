import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A simple layout component that centers its children both vertically 
 * and horizontally within the viewport. This is the main application wrapper.
 * 
 * @param {React.ReactNode} children - The content to be rendered inside the layout.
 * @param {string} [className] - Optional additional class names to apply to the main container.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center h-screen bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
