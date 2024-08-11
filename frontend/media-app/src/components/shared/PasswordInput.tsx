import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const PasswordInput:React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center">
            <Input
                
                placeholder="Enter Password" 
                className="shad-input pr-10"
            />
            <Button 
                variant="ghost"
                onClick={togglePasswordVisibility}
                className="absolute right-0"
            >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </Button>
        </div>
    );
};

export default PasswordInput;
