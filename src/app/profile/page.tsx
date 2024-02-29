import { getSession } from "@/utils";
import React from "react";

export default async function Profile() {
  const session = await getSession()
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h1>Profile</h1>
        </div>
        <div>
          <h2>
            email: <strong>{session.email}</strong>
          </h2>
        </div>
      </div>
    </div>
  );
}
