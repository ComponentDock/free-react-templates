import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Background } from './Background'

describe('Background', () => {
  it('renders a full-viewport background image with overlay', () => {
    const { container } = render(<Background />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/regwell-bg/1920/1080')
    expect(img).toHaveAttribute('aria-hidden', 'true')
    expect(img!.parentElement).toHaveClass('fixed', 'inset-0', 'z-0')
  })

  it('applies a dark overlay div', () => {
    const { container } = render(<Background />)
    const overlay = container.querySelector('.bg-black\\/50')
    expect(overlay).toBeInTheDocument()
  })
})
