import type { User } from "../types";
import { UserCard } from "./UserCard";

export function UserList({ users, onCardClick }: { users: User[], onCardClick: (user: User) => void }) {
  return (
    <div className="user-list">
      <div className="user-card-list">
        {users.map((user: User) => (
          <UserCard user={user} onClick={() => onCardClick(user)} />
        ))
        }
      </div>
    </div>
  )
}