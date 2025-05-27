"use client";

import updateUsername from "./updateUsername";

export default function ClientWhoAMIPage({ children, id }) {
  return (
    <div>
      {children}
      <form action={updateUsername}>
        <h2>Enter a new username</h2>
        <input type="text" name="username" placeholder="New username" />
        <input type="hidden" name="id" value={id} />
        <button type="submit">Update username</button>
      </form>
    </div>
  );
}
