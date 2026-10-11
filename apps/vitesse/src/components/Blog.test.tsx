import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the title with the orange eyebrow', () => {
    render(<Blog />)
    expect(screen.getByText('Our Recent News')).toHaveClass('text-accent')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Logistics Blog')
  })

  it('renders three blog cards with image, date badge, author, title, excerpt, and read-more', () => {
    const { container } = render(<Blog />)
    expect(container.querySelectorAll('img')).toHaveLength(3)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('OCT')).toBeInTheDocument()
    expect(screen.getByText('21')).toBeInTheDocument()
    expect(screen.getAllByText('SEP')).toHaveLength(2)
    expect(screen.getByText('Omar Haddad')).toBeInTheDocument()
    expect(screen.getByText('What to Know Before Your First Pallet Shipment')).toBeInTheDocument()
    expect(screen.getByText(/Sharing a container with other shippers/)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
