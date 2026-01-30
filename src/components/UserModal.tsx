import type { User } from "../types";

export function UserModal({ user, onClose }: { user: User, onClose: () => void }) {
  return (
    <div className="user-modal-container" onClick={onClose}>
      <div className="user-modal-content">
        <div className="user-modal" onClick={(event) => event.stopPropagation()}>
          <button className="user-modal-close" onClick={onClose}>X</button>
          <div className="user-container-info">
            <h3>Name:</h3>
            <p>{user.name}</p>
          </div>
          <div className="user-container-info">
            <h3>Email:</h3>
            <p>{user.email}</p>
          </div>
          <div className="user-container-info">
            <h3>Phone:</h3>
            <p>{user.phone}</p>
          </div>
          <div className="user-container-info">
            <h3>Company:</h3>
            <p>{user.company.name}</p>
          </div>
          <div className="user-container-info">
            <h3>City:</h3>
            <p>{user.address.city}</p>
          </div>
        </div>
      </div>
    </div>
  )
}