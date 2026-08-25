import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IntroBlock } from './IntroBlock'

describe('IntroBlock', () => {
  it('renders a centered "Prices" heading and a muted paragraph', () => {
    const { container } = render(<IntroBlock />)
    const heading = screen.getByRole('heading', { level: 3, name: 'Prices' })
    expect(heading).toBeInTheDocument()
    const text = container.textContent ?? ''
    expect(text).toContain('behind the word mountains')
  })

  it('pads and centers the block like the reference p-4 text-center', () => {
    const { container } = render(<IntroBlock />)
    expect(container.firstElementChild?.className).toContain('p-6')
    expect(container.firstElementChild?.className).toContain('text-center')
  })

  it('renders the paragraph muted (secondary gray) like the reference text-muted', () => {
    const { container } = render(<IntroBlock />)
    const paragraph = container.querySelector('p')
    expect(paragraph?.className).toContain('text-[#6c757d]')
  })
})
