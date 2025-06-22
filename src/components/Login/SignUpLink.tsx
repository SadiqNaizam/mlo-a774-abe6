import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SignUpLinkProps {
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ className }) => {
  return (
    <p className={cn('text-center text-sm text-muted-foreground', className)}>
      Don't have an account?{' '}
      <Link
        to="/signup"
        className="font-semibold text-primary hover:underline"
      >
        SignUp
      </Link>
    </p>
  );
};

export default SignUpLink;
