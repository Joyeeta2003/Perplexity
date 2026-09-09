import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const user = useSelector((state) => state.auth.user)
	const loading = useSelector((state) => state.auth.loading)

	const { handleLogin } = useAuth()
	const navigate = useNavigate()

	const submitForm = async (event) => {
		event.preventDefault()

		const payload = {
			email,
			password,
		}

		await handleLogin(payload)
		navigate("/")
	}

	if(!loading && user){
		return <Navigate to='/' replace />
	}

	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0b10] px-4 py-4 text-white">
			<section className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
				<div className="mb-5">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#31b8c6]">
						Welcome back
					</p>

					<h1 className="text-3xl font-bold tracking-tight">
						Sign in to continue
					</h1>

					<p className="mt-2 text-sm leading-5 text-zinc-400">
						Pick up where you left off and keep your ideas moving.
					</p>
				</div>

				<form className="space-y-3" onSubmit={submitForm}>
					{/* Email */}
					<div>
						<label
							htmlFor="login-email"
							className="mb-2 block text-sm font-medium text-zinc-200"
						>
							Email address
						</label>

						<input
							id="login-email"
							type="email"
							placeholder="you@example.com"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
						/>
					</div>

					{/* Password */}
					<div>
						<div className="mb-2 flex items-center justify-between">
							<label
								htmlFor="login-password"
								className="block text-sm font-medium text-zinc-200"
							>
								Password
							</label>

							<button
								type="button"
								className="text-xs font-medium text-[#31b8c6] transition hover:text-[#75d5df]"
							>
								Forgot password?
							</button>
						</div>

						<input
							id="login-password"
							type="password"
							placeholder="Enter your password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
						/>
					</div>

					{/* Submit */}
					<button
						type="submit"
						className="w-full rounded-lg bg-[#31b8c6] px-4 py-2.5 text-sm font-semibold text-[#071014] shadow-lg shadow-black/30 transition hover:bg-[#75d5df] focus:outline-none focus:ring-2 focus:ring-[#31b8c6] focus:ring-offset-2 focus:ring-offset-[#151118]"
					>
						Sign in
					</button>
				</form>

				<p className="mt-5 text-center text-sm text-zinc-400">
					New here?{" "}
					<Link
						to="/register"
						className="font-semibold text-[#31b8c6] transition hover:text-[#75d5df]"
					>
						Create an account
					</Link>
				</p>
			</section>
		</main>
	);
}

export default Login;
