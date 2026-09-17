export interface CloseButtonProps {
  onClick?: () => void
}

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      type="button"
      aria-label="Close"
      onClick={onClick}
      className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-close-bg text-sm font-bold text-heading transition-colors hover:bg-gray-300"
    >
      ×
    </button>
  )
}
