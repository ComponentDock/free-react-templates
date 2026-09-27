import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Background } from './Background'

describe('Background', () => {
  it('renders a full-viewport background image', () => {
    const { container } = render(<Background />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('aria-hidden', 'true')
  })

  it('uses a picsum placeholder image', () => {
    const { container } = render(<Background />)
    const img = container.querySelector('img')
    expect(img?.getAttribute('src')).toContain('picsum.photos')
  })
})
