import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Biography } from './Biography'

describe('Biography', () => {
  it('renders the biography heading, portrait, and skill lists', () => {
    const { container } = render(<Biography />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Biography')
    expect(screen.getByAltText('Portrait of the photographer')).toBeInTheDocument()
    expect(screen.getByText("Hi, I'm Jed")).toBeInTheDocument()
    expect(screen.getByText('Photographer for 10 years')).toBeInTheDocument()

    // Two checkmark lists with 3 items each — check icons are present
    const checkIcons = container.querySelectorAll('svg.text-check-green')
    expect(checkIcons.length).toBeGreaterThanOrEqual(6)
  })

  it('has a dark background section', () => {
    const { container } = render(<Biography />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-dark-bg')
  })
})
