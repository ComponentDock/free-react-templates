import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  title: string
  caption?: string
  centered?: boolean
}

/* .section_tittle — H2 36px #060606 w700 + gray 16px w300 caption
   (colorlib.com/wp/template/amor css/style.css). Left by default;
   `centered` for the blog/client sections (text-center in the source). */
export function SectionTitle({ title, caption, centered = false }: SectionTitleProps) {
  return (
    <div className={cn('mb-[70px] max-sm:mb-[50px]', centered && 'text-center')}>
      <h2 className="text-[36px] font-bold leading-[1.2] text-ink">{title}</h2>
      {caption && <p className="mt-4 text-[16px] font-light capitalize leading-[1.9]">{caption}</p>}
    </div>
  )
}
