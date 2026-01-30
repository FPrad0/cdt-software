import logo from "../assets/image/cdt-software-logo.svg";

export function Header({ onSearchTextChange }: { onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="header-menu">
      <div className="header-menu-logo">
        <img src={logo} alt="CDT Software Test" className="header-logo" />
        <h3>CDT Software Test</h3>
      </div>
      <input type="text" placeholder="Search user" onChange={onSearchTextChange} />
    </div>
  )
}
