import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, error, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        setError("");
    }, [])

    const redirect_url = location.state?.from || '/';

    const googleSignInHandler = () => {
        signInUsingGoogle()
            .then(result => {
                setError("");
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message)
            });
    }

    return (
        <div className="w-50 mx-auto bg-light border my-4 p-4">
            <h3 className="text-center mb-4">Sign In</h3>
            {
                error && <div className="bg-danger">
                    <p className="text-white p-2 mt-2">{error}</p>
                </div>
            }
            <div className="d-grid w-100 mx-auto mb-3">
                <Button onClick={googleSignInHandler} className="rounded-pill" variant="danger" type="submit"><i className="fab fa-google"></i> Sign in with google</Button>
            </div>
        </div>
    );
};

export default Login;