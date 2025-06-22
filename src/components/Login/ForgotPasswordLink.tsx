import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ForgotPasswordLinkProps {
  className?: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ className }) => {
  return (
    <Link
      to="/forgot-password"
      className={cn(
        'text-sm font-normal text-muted-foreground hover:text-primary hover:underline',
        className
      )}
    >
      Forgot Password
    </Link>
  );
};

export default ForgotPasswordLink;
