import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Slider } from './Slider'

describe('Slider', () => {
  it('renders a full-width decorative banner with no text content', () => {
    const { container } = render(<Slider />)

    const banner = screen.getByRole('img', { name: 'Decorative banner' })
    expect(banner.className).toContain('h-[300px]')
    expect(banner.textContent).toBe('')
    expect(container.querySelector('h1, h2, p, a')).toBeNull()
  })
})
