import { registerAction } from "@/actions";
import React from "react";

export default function Login() {
  return (
    <div className="mt-10 card">
      <div className="items-center card-body">
        <div className="card-title">
          <h2>Login your account</h2>
        </div>

        <form action={registerAction}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="input input-bordered"
          />
          <label className="label" htmlFor="password">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input input-bordered"
          />
          <div className="card-actions">
            <label className="space-x-2 label" htmlFor="checkbox">
              <input className="checkbox" type="checkbox" name="checkbox" />
              <p>
                Please check our <span className="link link-info">policy</span>
              </p>
            </label>


            <button className="btn btn-primary btn-block" type="submit">
              Login
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
