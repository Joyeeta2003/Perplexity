import { useState } from "react";
import { Link } from "react-router";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((currentData) => ({ ...currentData, [name]: value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log("Login submitted", formData);
	}

	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0b10] px-4 py-4 text-white">
			<section className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
				<div className="mb-5">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#31b8c6]">Welcome back</p>
					<h1 className="text-3xl font-bold tracking-tight">Sign in to continue</h1>
					<p className="mt-2 text-sm leading-5 text-zinc-400">Pick up where you left off and keep your ideas moving.</p>
				</div>

				<form className="space-y-3" onSubmit={handleSubmit}>
					<div>
						<label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="login-email">Email address</label>
						<input
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
							id="login-email"
							name="email"
							onChange={handleChange}
							placeholder="you@example.com"
							required
							type="email"
							value={formData.email}
						/>
					</div>

					<div>
						<div className="mb-2 flex items-center justify-between">
							<label className="block text-sm font-medium text-zinc-200" htmlFor="login-password">Password</label>
							<button className="text-xs font-medium text-[#31b8c6] transition hover:text-[#75d5df]" type="button">Forgot password?</button>
						</div>
						<input
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
							id="login-password"
							name="password"
							onChange={handleChange}
							placeholder="Enter your password"
							required
							type="password"
							value={formData.password}
						/>
					</div>

					<button className="w-full rounded-lg bg-[#31b8c6] px-4 py-2.5 text-sm font-semibold text-[#071014] shadow-lg shadow-black/30 transition hover:bg-[#75d5df] focus:outline-none focus:ring-2 focus:ring-[#31b8c6] focus:ring-offset-2 focus:ring-offset-[#151118]" type="submit">
						Sign in
					</button>
				</form>

				<p className="mt-5 text-center text-sm text-zinc-400">
					New here? <Link className="font-semibold text-[#31b8c6] transition hover:text-[#75d5df]" to="/register">Create an account</Link>
				</p>
			</section>
		</main>
	);
}

export default Login;
