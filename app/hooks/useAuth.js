'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";

export function useAuth(requiredRole = null) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setIsAuthenticated(false);
                setUserRole(null);
                if (requiredRole) {
                    router.push('/login');
                }
                return;
            }

            try {
                const decoded = jwtDecode(token);
                const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                setUserRole(role);
                setIsAuthenticated(true);

                if (requiredRole && role !== requiredRole) {
                    router.push('/unauthorized');
                }
            } catch (error) {
                console.error('Invalid token:', error);
                localStorage.removeItem('token');
                setIsAuthenticated(false);
                setUserRole(null);
                if (requiredRole) {
                    router.push('/login');
                }
            }
        };

        checkAuth();
        setIsLoading(false);
    }, [requiredRole, router]);

    return { isAuthenticated, userRole, isLoading };
} 