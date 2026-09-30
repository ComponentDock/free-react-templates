export function OrDivider() {
  return (
    <div data-testid="or-divider" className="flex items-center gap-4">
      <span className="h-px flex-1 bg-divider" />
      <span className="text-sm text-or-text">or</span>
      <span className="h-px flex-1 bg-divider" />
    </div>
  )
}
