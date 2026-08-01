import type { HTMLAttributes } from 'react'
import { cn } from './cn'

function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4 pb-2', className)} {...props} />
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4 pt-2', className)} {...props} />
}

function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4 pt-2', className)} {...props} />
}

// Compound component: <Card.Header>, <Card.Content>, <Card.Footer>
export const Card = Object.assign(
  function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={cn(
          'rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900',
          className,
        )}
        {...props}
      />
    )
  },
  { Header: CardHeader, Content: CardContent, Footer: CardFooter },
)

export { CardHeader, CardContent, CardFooter }
