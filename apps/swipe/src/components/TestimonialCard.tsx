interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  imageUrl: string
}

export function TestimonialCard({ quote, author, position, imageUrl }: TestimonialCardProps) {
  return (
    <div className="flex flex-col md:flex-row shadow-[0px_10px_40px_-30px_rgba(0,0,0,0.42)]">
      <div
        data-testid="card-image"
        className="w-full md:w-1/2 h-[450px] md:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        data-testid="card-text"
        className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 py-12 md:px-10 md:py-20"
      >
        <div className="w-full text-center">
          <p className="font-serif text-[28px] md:text-[39px] font-bold text-black leading-tight mb-8">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="pt-4">
            <p className="text-brand text-[20px] font-medium mb-0">&mdash; {author}</p>
            <span className="text-gray text-sm">{position}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
