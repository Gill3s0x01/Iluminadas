// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { LayoutComponents } from '../../componentes/LayoutComponents';
// import Header from '../../componentes/Header'; /* IMPORTAÇÃO DO COMPONENTE HEADER NA TELA DE CADASTRO */
// import axios from "axios";
// import { useForm } from "react-hook-form";


/* FORMULARIO PARA CADASTRAR OS DADOS DO CLIENTE */
// export default function Register () {
//   const { register, handleSubmit } = useForm();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const onSubmit = data =>{
//     alert(data);
//     axios.post('http://10.68.22.240:3000/cliente/cadastrarCliente')
//     .then(function(data){
//       console.log(data);

//     }).catch(function(e){
//       console.log(e)
//     });
//     //
//   }

//   return (
    
//     <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
//       <Header/>
//         <LayoutComponents >
//         <span className="login-form-title"> Cadastre-se </span>
//         <span className="login-form-title">
//         </span>
        
         
//         <div className="wrap-input">
//           <input
//           {...register("name")}
//             className={name !== "" ? "has-val input" : "input"}
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
            
//           />
//           <span className="focus-input" data-placeholder="name"></span>
//         </div>
         
       
//         <div className="wrap-input">
//           <input
//             {...register("email")}
//             className={email !== "" ? "has-val input" : "input"}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
            
//           />
//           <span className="focus-input" data-placeholder="Email"></span>
//         </div>

//         <div className="wrap-input">
//           <input
//           {...register("password")}
//             className={password !== "" ? "has-val input" : "input"}
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
            
//           />
//           <span className="focus-input" data-placeholder="Password"></span>
//         </div>

//         <div className="container-login-form-btn">
//           <input type="submit" className="login-form-btn">Cadastrar</input>
//         </div>

//         <div className="text-center">
//           <span className="txt1">Já possui conta? </span>
//           <Link className="txt2" to="/login">
//             Acessar com Email e Senha.
//           </Link>
//         </div>
//     </LayoutComponents>
//       </form>
//       //FIM DO FORMULARIO DE CADASTRO
//   )
// }