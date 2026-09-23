export function Avatar() {
  return (
    <div
      className="mx-auto mb-5 h-[100px] w-[100px] rounded-full bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://picsum.photos/seed/accessway-avatar/200/200")',
      }}
      role="img"
      aria-label="User avatar"
    />
  )
}
