import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DestinationCard } from './DestinationCard'

describe('DestinationCard', () => {
  it('renders a linked photo card with its price overlay', () => {
    render(<DestinationCard name="Cinque Terre" price="From $890" seed="trailmark-top-3" />)
    const link = screen.getByRole('link', { name: /cinque terre/i })
    expect(link).toHaveAttribute('href', '#')
    expect(screen.getByText('From $890')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Cinque Terre destination' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/trailmark-top-3/600/700',
    )
  })
})
