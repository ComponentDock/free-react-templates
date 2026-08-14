import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Properties } from './Properties'

describe('Properties', () => {
  it('renders the section title and three property cards', () => {
    render(<Properties />)
    expect(screen.getByRole('heading', { name: 'Recently Add Homes' })).toBeInTheDocument()
    expect(screen.getByText('$469,000')).toBeInTheDocument()
    expect(screen.getByText('$369,000')).toBeInTheDocument()
    expect(screen.getByText('$560,000')).toBeInTheDocument()
    expect(screen.getAllByText('3 Bedrooms Townhouse')).toHaveLength(3)
    expect(screen.getAllByText('Find out more')).toHaveLength(3)
  })

  it('shows the New badge twice and the Offer badge once', () => {
    render(<Properties />)
    expect(screen.getAllByText('New')).toHaveLength(2)
    expect(screen.getByText('Offer')).toBeInTheDocument()
  })

  it('renders a photo for each card', () => {
    const { container } = render(<Properties />)
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
