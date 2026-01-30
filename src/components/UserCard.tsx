import type { User } from "../types";
import { getUserImage } from "../utils/userImage";

export function UserCard({ user, onClick }: { user: User, onClick: () => void }) {
  const userImage = getUserImage(user);

  return (
    <div className="user-card" onClick={onClick}>
      <img src={userImage} className="user-card-image" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}