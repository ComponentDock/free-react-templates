import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Locations } from './Locations'

describe('Locations', () => {
  it('renders the address card and the contact card', () => {
    render(<Locations />)
    expect(screen.getByText('600/D, Kings road, Green lane')).toBeInTheDocument()
    expect(screen.getByText('NewYork-2563')).toBeInTheDocument()
    expect(screen.getByText('+10 672 457 356')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /support@cargonaut.com/i })).toHaveAttribute(
      'href',
      'mailto:support@cargonaut.com',
    )
  })
})
