export function Illustration() {
  return (
    <div className="hidden w-1/2 md:block">
      <div
        className="h-full min-h-[600px] w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/logincove-illustration/1200/800")',
        }}
        role="img"
        aria-label="Decorative illustration"
      />
    </div>
  )
}
