interface AvatarProps {
  name: string
}

export function Avatar({ name }: AvatarProps) {
  return (
    <div className="mb-5 h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-[var(--color-avatar-ring)] shadow-md">
      <img
        src={`https://picsum.photos/seed/loginaura-avatar/120/120`}
        alt={`${name} avatar`}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
