import type { User } from "../types";

export function UserCard({ user, onClick }: { user: User, onClick: () => void }) {
  return (
    <div className="user-card" onClick={onClick}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}