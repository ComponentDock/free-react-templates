import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the Who We Are label, headline and supporting paragraphs', () => {
    const { container } = render(<About />)

    expect(screen.getByText('Who We Are')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /increase our clients. topline/,
    )
    expect(screen.getByText(/Objectivity since 2013/)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(2)
  })
})
