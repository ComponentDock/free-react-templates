import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Packages } from './Packages'

describe('Packages', () => {
  it('renders the section header and three package cards', () => {
    render(<Packages />)

    expect(screen.getByText("We're Offering these Trip Packages")).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Famous Trips Packages' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('shows the gradient date badge, trip meta, serif title and gradient button per card', () => {
    render(<Packages />)

    const badge = screen.getByTestId('date-badge-outpost-package-1')
    expect(badge).toHaveClass('brand-gradient', 'group-hover:date-gradient')
    expect(badge).toHaveTextContent('18')
    expect(badge).toHaveTextContent('December')

    expect(screen.getByText('Stockholmes')).toBeInTheDocument()
    expect(screen.getByText('5 days 6 nights')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: 'Desert Riding Turning So much Flowery' }),
    ).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/outpost-package-1/600/420')

    const readMore = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMore).toHaveLength(3)
    expect(readMore[0]).toHaveAttribute('href', '#newsletter')
  })
})
