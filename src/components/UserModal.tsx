import type { User } from "../types";
import { getUserImage } from "../utils/userImage";

export function UserModal({ user, onClose }: { user: User, onClose: () => void }) {
  const userImage = getUserImage(user);

  return (
    <div className="user-modal-container" onClick={onClose}>
      <div className="user-modal-content">
        <div className="user-modal" onClick={(event) => event.stopPropagation()}>
          <button className="user-modal-close" onClick={onClose}>X</button>
          <div className="user-modal-header">
            <img src={userImage} className="user-modal-image" />
            <h2>{user.name}</h2>
          </div>
          <div className="user-container-info">
            <p><strong>Email: </strong>{user.email}</p>
          </div>
          <div className="user-container-info">
            <p><strong>Phone: </strong>{user.phone}</p>
          </div>
          <div className="user-container-info">
            <p><strong>Company: </strong>{user.company.name}</p>
          </div>
          <div className="user-container-info">
            <p><strong>City: </strong>{user.address.city}</p>
          </div>
        </div>
      </div>
    </div>
  )
}