import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import LoginForm from './LoginForm';
import SignUpLink from './SignUpLink';

const LoginCard: React.FC = () => {
  return (
    <Card className="w-[300px] bg-card p-6 rounded-md shadow-md">
      <CardHeader className="p-0 text-center">
        <CardTitle className="text-2xl font-bold text-card-foreground">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-8">
        <LoginForm />
      </CardContent>
      <CardFooter className="p-0 mt-6 justify-center">
        <SignUpLink />
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
