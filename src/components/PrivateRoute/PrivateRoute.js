 import jwtDecode from "jwt-decode";

export  const Authenticate = ({children}) => {
    const token = localStorage.getItem("token");
    if (token) {
        const user = jwtDecode(token);
        if (user.role === 'doctor' || 'patient' ) {
            return ({ role: user.role })
        }
        return false
    }
    return children;
};











// export default function Index({ props, children, ...rest }) {
//   const loggedIn = Authenticate();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         loggedIn && loggedIn.role === rest.role ? (
//           children
//         ) : (
//           <Navigate 
//             to={{
//               pathname: "/",
//               from: location,
//             }}
//           />
//         )
//       }
//     />
//   );
// }