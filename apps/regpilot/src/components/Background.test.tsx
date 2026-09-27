import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Background } from './Background'

describe('Background', () => {
  it('renders a full-viewport background image with light gray fill', () => {
    const { container } = render(<Background />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/regpilot-bg/1920/1080')
    expect(img).toHaveAttribute('aria-hidden', 'true')
    expect(img!.parentElement).toHaveClass('fixed', 'inset-0', 'z-0', 'bg-bg')
  })

  it('applies opacity to the background image', () => {
    const { container } = render(<Background />)
    const img = container.querySelector('img')
    expect(img).toHaveClass('opacity-30')
  })
})
