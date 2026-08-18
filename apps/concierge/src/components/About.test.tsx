import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the photo with the teal panel bleeding behind it', () => {
    const { container } = render(<About />)
    expect(
      screen.getByRole('img', { name: 'Heritage tram tour through the old town' }),
    ).toHaveAttribute('src', expect.stringContaining('concierge-about'))
    const panel = container.querySelector('[data-about-panel]')!
    expect(panel).not.toBeNull()
    expect(panel.className).toContain('bg-brand')
    expect(panel.className).toContain('-left-[150%]')
    expect(panel.className).toContain('w-[200%]')
    expect(panel.className).toContain('-z-10')
  })

  it('renders the heading and two paragraphs', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Concierge' })).toBeInTheDocument()
    const paragraphs = screen.getAllByText(/Concierge began|Whether you travel/, {
      selector: 'p',
    })
    expect(paragraphs).toHaveLength(2)
    expect(screen.getByText(/effortless from the moment you land/)).toBeInTheDocument()
    expect(screen.getByText(/every stay includes/)).toBeInTheDocument()
  })
})
