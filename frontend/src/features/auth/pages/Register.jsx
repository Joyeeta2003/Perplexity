import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { handleRegister } = useAuth();
	const navigate = useNavigate();


	const submitForm = async (event) => {
		event.preventDefault();

		const payload = {
			username,
			email,
			password,
		};

		await handleRegister(payload);

		navigate("/login");
	};


	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0b10] px-4 py-4 text-white">
			<section className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">

				<div className="mb-5">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#31b8c6]">
						Join the space
					</p>

					<h1 className="text-3xl font-bold tracking-tight">
						Create your account
					</h1>

					<p className="mt-2 text-sm leading-5 text-zinc-400">
						A fresh start for your questions, ideas, and conversations.
					</p>
				</div>


				<form className="space-y-3" onSubmit={submitForm}>

					{/* Username */}
					<div>
						<label
							htmlFor="register-username"
							className="mb-2 block text-sm font-medium text-zinc-200"
						>
							Username
						</label>

						<input
							id="register-username"
							type="text"
							placeholder="Choose a username"
							required
							value={username}
							onChange={(e)=>setUsername(e.target.value)}
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
						/>
					</div>


					{/* Email */}
					<div>
						<label
							htmlFor="register-email"
							className="mb-2 block text-sm font-medium text-zinc-200"
						>
							Email address
						</label>

						<input
							id="register-email"
							type="email"
							placeholder="you@example.com"
							required
							value={email}
							onChange={(e)=>setEmail(e.target.value)}
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
						/>
					</div>


					{/* Password */}
					<div>
						<label
							htmlFor="register-password"
							className="mb-2 block text-sm font-medium text-zinc-200"
						>
							Password
						</label>

						<input
							id="register-password"
							type="password"
							placeholder="Create a password"
							required
							value={password}
							onChange={(e)=>setPassword(e.target.value)}
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
						/>
					</div>


					<button
						type="submit"
						className="w-full rounded-lg bg-[#31b8c6] px-4 py-2.5 text-sm font-semibold text-[#071014] shadow-lg shadow-black/30 transition hover:bg-[#75d5df] focus:outline-none focus:ring-2 focus:ring-[#31b8c6] focus:ring-offset-2 focus:ring-offset-[#151118]"
					>
						Create account
					</button>

				</form>


				<p className="mt-5 text-center text-sm text-zinc-400">
					Already have an account?{" "}
					<Link
						to="/login"
						className="font-semibold text-[#31b8c6] transition hover:text-[#75d5df]"
					>
						Sign in
					</Link>
				</p>

			</section>
		</main>
	);
}


export default Register;