export function Header({ onSearchTextChange }: { onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="menu"> Menu
      <input type="text" placeholder="Search user" onChange={onSearchTextChange} />
    </div>
  )
}
