import { useState } from "react";
import { Link } from "react-router";

function Register() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((currentData) => ({ ...currentData, [name]: value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log("Registration submitted", formData);
	}

	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0b10] px-4 py-4 text-white">
			<section className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
				<div className="mb-5">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#31b8c6]">Join the space</p>
					<h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
					<p className="mt-2 text-sm leading-5 text-zinc-400">A fresh start for your questions, ideas, and conversations.</p>
				</div>

				<form className="space-y-3" onSubmit={handleSubmit}>
					<div>
						<label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="register-username">Username</label>
						<input
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
							id="register-username"
							name="username"
							onChange={handleChange}
							placeholder="Choose a username"
							required
							type="text"
							value={formData.username}
						/>
					</div>

					<div>
						<label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="register-email">Email address</label>
						<input
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
							id="register-email"
							name="email"
							onChange={handleChange}
							placeholder="you@example.com"
							required
							type="email"
							value={formData.email}
						/>
					</div>

					<div>
						<label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="register-password">Password</label>
						<input
							className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/20"
							id="register-password"
							name="password"
							onChange={handleChange}
							placeholder="Create a password"
							required
							type="password"
							value={formData.password}
						/>
					</div>

					<button className="w-full rounded-lg bg-[#31b8c6] px-4 py-2.5 text-sm font-semibold text-[#071014] shadow-lg shadow-black/30 transition hover:bg-[#75d5df] focus:outline-none focus:ring-2 focus:ring-[#31b8c6] focus:ring-offset-2 focus:ring-offset-[#151118]" type="submit">
						Create account
					</button>
				</form>

				<p className="mt-5 text-center text-sm text-zinc-400">
					Already have an account? <Link className="font-semibold text-[#31b8c6] transition hover:text-[#75d5df]" to="/login">Sign in</Link>
				</p>
			</section>
		</main>
	);
}

export default Register;
