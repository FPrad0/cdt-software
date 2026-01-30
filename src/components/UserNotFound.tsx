import userNotFoundImage from "../assets/image/user-not-found.svg";

export function UserNotFound() {
    return (
        <div className="user-not-found">
            <img src={userNotFoundImage} alt="User not found" />
            <h2>No users found</h2>
        </div>
    )
}