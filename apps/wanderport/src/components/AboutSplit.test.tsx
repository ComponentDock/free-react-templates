import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSplit } from './AboutSplit'

describe('AboutSplit', () => {
  it('renders the gradient-clipped three-line headline', () => {
    render(<AboutSplit />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.className).toContain('gradient-text')
    expect(heading.textContent).toMatch(/Did not find your Package\?/)
    expect(heading.textContent).toMatch(/Feel free to ask us\./)
    expect(heading.textContent).toMatch(/make it for you/)
  })

  it('closes the copy with the black pill and pairs it with a full-bleed photo', () => {
    const { container } = render(<AboutSplit />)

    const button = screen.getByRole('button', { name: 'Make Package of your own' })
    expect(button).toHaveAttribute('type', 'button')
    expect(button.className).toContain('bg-ink')

    const photo = container.querySelector('img')!
    expect(photo.getAttribute('src')).toContain('picsum.photos/seed/wanderport-about')
    expect(photo.className).toContain('object-cover')
  })
})
