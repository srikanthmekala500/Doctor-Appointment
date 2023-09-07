import jwtDecode from "jwt-decode";

export  const Authenticate = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const user = jwtDecode(token);
        if (user.role === 'doctor' || 'patient' || 'super_admin' || 'admin' || 'manager') {
            return ({ role: user.role })
        }
        return false
    }
    return false;
};

