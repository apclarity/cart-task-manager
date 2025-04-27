import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import "../styles/register.scss"

type RegisterInput = z.infer<typeof registerSchema>;

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const { mutate, status } = useMutation({
    mutationFn: async (data: RegisterInput) => {
      const response = await axiosInstance.post("/register", data);
      return response.data;
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      alert("Registration failed: " + error);
    }
  });

  const onSubmit = (data: RegisterInput) => {
    mutate(data);
  };

  return (
    <div className="register-container">
      
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">Register</h2>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <p className="text-error">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p className="text-error">{errors.password.message}</p>}

         <button type="submit" className="register" disabled={status === "pending"}>
          {status === "pending" ? "Registering..." : "Register"}
        </button>

        {status === "error" && <p className="text-error">Error, please try again.</p>}

        <p>Already have an account?</p>
        <button type="button" className="login-btn" onClick={()=> navigate("/login")}>
            Login
        </button>
      </form>
    </div>
  );
};

export default Register;
