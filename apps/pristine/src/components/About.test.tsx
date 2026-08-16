import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('shows the Satisfaction Guarantee heading and blurb', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent?.replace(/\s+/g, ' ').trim()).toMatch(/Satisfaction\s*Guarantee/i)
    expect(screen.getByText(/If you are not delighted/i)).toBeInTheDocument()
  })

  it('shows the photo on the right', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /freshly cleaned kitchen/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('sits on a cream background strip', () => {
    const { container } = render(<About />)
    expect(container.querySelector('.bg-cream')).not.toBeNull()
  })
})
