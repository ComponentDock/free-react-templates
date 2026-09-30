export interface PostRowProps {
  title: string
  date: string
  avatarSeed: string
}

export default function PostRow({ title, date, avatarSeed }: PostRowProps) {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="flex-1 min-w-0">
        <h3 className="text-text-primary text-sm font-semibold leading-snug">{title}</h3>
        <p className="text-text-secondary text-xs mt-1">Posted: {date}</p>
      </div>
      <img
        src={`https://picsum.photos/seed/${avatarSeed}/60/60`}
        alt={`Avatar for ${title}`}
        className="w-[60px] h-[60px] rounded-full object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-text-primary text-sm font-semibold leading-snug">{title}</h3>
        <p className="text-text-secondary text-xs mt-1">Posted: {date}</p>
      </div>
    </div>
  )
}
