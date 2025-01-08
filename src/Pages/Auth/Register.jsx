import React, { useState } from "react";

export default function Register() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");

    let newErrors = {};

    // Validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Only letters and spaces allowed.";
    }
    if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(photo)) {
      newErrors.photo = "Enter a valid image URL.";
    }
    if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", { name, photo, email, password });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-3xl font-semibold text-center">Register</h2>

          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="form-control">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
            {errors.photo && <p className="text-red-500">{errors.photo}</p>}
          </div>

          <div className="form-control">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="form-control">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
