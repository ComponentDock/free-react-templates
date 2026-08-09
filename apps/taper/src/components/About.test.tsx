import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the experience heading and lead paragraphs', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { name: '52 Years Of Experience In Hair cut!' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThanOrEqual(2)
  })

  it('shows the years badge', () => {
    render(<About />)
    expect(screen.getByText('52')).toBeInTheDocument()
    expect(screen.getByText('Years')).toBeInTheDocument()
  })
})
