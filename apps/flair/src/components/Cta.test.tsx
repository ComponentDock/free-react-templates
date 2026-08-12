import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'
import { CTA, IMAGES } from '../data'

describe('Cta', () => {
  it('renders the heading, paragraph and Work with us button over the photo', () => {
    const { container } = render(<Cta />)
    const section = screen.getByRole('region', { name: 'Call to action' })
    expect(section.style.backgroundImage).toContain(IMAGES.cta)

    const overlay = Array.from(container.querySelectorAll('div')).find((el) =>
      el.className.includes('rgba(4,8,29,0.7)'),
    )
    expect(overlay).toBeDefined()

    expect(screen.getByRole('heading', { level: 2, name: CTA.heading })).toBeInTheDocument()
    expect(screen.getByText(CTA.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CTA.ctaLabel })).toHaveAttribute('href', '#contact')
  })
})
