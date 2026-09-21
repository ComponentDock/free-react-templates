export interface AccordionItemProps {
  tag: string
  title: string
  authorName: string
  authorAvatar: string
  image: string
  isExpanded: boolean
  onToggle: () => void
}

export function AccordionItem({
  tag,
  title,
  authorName,
  authorAvatar,
  image,
  isExpanded,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden transition-all duration-500 ${
        isExpanded ? 'h-96' : 'h-20'
      }`}
      onClick={onToggle}
      role="button"
      aria-expanded={isExpanded}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content overlay - shown when expanded */}
      {isExpanded && (
        <div className="relative z-10 flex h-full flex-col justify-end p-8">
          {/* Category tag */}
          <span className="mb-3 inline-block w-fit rounded-sm bg-tag-bg px-3 py-1 text-xs font-semibold uppercase text-tag-text">
            {tag}
          </span>

          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold text-white">{title}</h2>

          {/* Author block */}
          <div className="flex items-center space-x-3">
            <img
              src={authorAvatar}
              alt={authorName}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-white">{authorName}</span>
          </div>
        </div>
      )}
    </div>
  )
}
