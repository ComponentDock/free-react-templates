import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClosingCta } from './ClosingCta'

describe('ClosingCta', () => {
  it('renders the heading, the line and the two calls to action', () => {
    render(<ClosingCta />)

    expect(
      screen.getByRole('heading', { name: 'Warm rooms in July, cold ones in January?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Pick a window and a technician will be there inside it.'),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Book a visit' })).toHaveAttribute('href', '#book')
    expect(screen.getByRole('link', { name: 'Call (555) 020-0200' })).toHaveAttribute(
      'href',
      'tel:+15550200200',
    )
  })
})
