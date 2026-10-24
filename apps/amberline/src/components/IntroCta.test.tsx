import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IntroCta } from './IntroCta'

describe('IntroCta', () => {
  it('renders the skewed amber sheet, heading and appointment button', () => {
    const { container } = render(<IntroCta />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('We Build Great Structures')
    expect(screen.getByText('Contact us for construction & renovation work')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make an appointment' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(container.innerHTML).toContain('skewX(20deg)')
  })
})
