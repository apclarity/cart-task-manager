import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/loginSchema";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import "../styles/login.scss"

type LoginInput = z.infer<typeof loginSchema>;

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const loginMutation = useMutation({
  mutationFn: async (data: LoginInput) => {
    const response = await axiosInstance.post("/login", data);
    return response.data;
  },
  onSuccess: (data) => {
    localStorage.setItem("token", data.token); 
    navigate("/"); 
  },
  onError: (error) => {
    alert("Login failed: " + error);
  }
});

  const onSubmit = (data: LoginInput) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("email")} />
      {errors.email && <p className="text-error">{errors.email.message}</p>}

      <input placeholder="Password" type="password" {...register("password")} />
      {errors.password && <p className="text-error">{errors.password.message}</p>}

      <button type="submit" className="login" disabled={loginMutation.status === 'pending'}>
          {loginMutation.status === 'pending' ? <span className="spinner" /> : "Login"}
        </button>
      <p>Doesn't have any account?</p>
      <button
        type="button"
        className="register-btn"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </form>
  </div>
  );
};

export default Login;
