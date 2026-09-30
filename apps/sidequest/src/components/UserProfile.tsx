export interface UserProfileProps {
  name: string
  avatarSeed: string
}

export default function UserProfile({ name, avatarSeed }: UserProfileProps) {
  return (
    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
      <img
        src={`https://picsum.photos/seed/${avatarSeed}/40/40`}
        alt={`Avatar for ${name}`}
        className="w-10 h-10 rounded-full object-cover shrink-0"
      />
      <span className="text-text-dark text-sm font-semibold">{name}</span>
    </div>
  )
}
