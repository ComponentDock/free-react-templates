interface DemoCardProps {
  title: string
  image: string
  href: string
}

export function DemoCard({ title, image, href }: DemoCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-t-md border border-gray-200 transition-all duration-500 hover:rounded-md hover:shadow-md dark:border-gray-700"
    >
      <img
        src={image}
        alt={`${title} demo preview`}
        loading="lazy"
        className="aspect-[10/7] w-full object-cover"
      />
      <p className="bg-white px-4 py-6 text-center text-[15px] text-caption transition-colors duration-500 group-hover:bg-primary-500 group-hover:text-white dark:bg-gray-950 dark:text-gray-300 dark:group-hover:bg-primary-500 dark:group-hover:text-white">
        {title}
      </p>
    </a>
  )
}
