import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the watermark, headline, and calendar CTA', () => {
    render(<Hero />)
    expect(screen.getByText('CONFERENCE')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Digital Design/)
    expect(heading).toHaveTextContent(/Conference/)
    expect(heading).toHaveTextContent(/2019 NYC/)
    expect(screen.getByRole('link', { name: 'Add to your Calendar' })).toHaveAttribute(
      'href',
      '#schedule',
    )
  })

  it('renders the rainbow gradient background band', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section?.getAttribute('style')).toContain('linear-gradient')
    expect(section?.getAttribute('style')).toContain('rgb(255, 150, 0)')
  })
})
