import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Illustration } from './Illustration'

describe('Illustration', () => {
  it('renders with background image', () => {
    render(<Illustration />)
    const img = screen.getByRole('img', { name: /decorative illustration/i })
    expect(img).toBeInTheDocument()
  })

  it('has aria-label for accessibility', () => {
    render(<Illustration />)
    const img = screen.getByRole('img', { name: /decorative illustration/i })
    expect(img).toHaveAttribute('aria-label', 'Decorative illustration')
  })

  it('is hidden on mobile via wrapper', () => {
    const { container } = render(<Illustration />)
    const wrapper = container.firstElementChild
    expect(wrapper).not.toBeNull()
    expect(wrapper!.className).toContain('hidden')
  })
})
