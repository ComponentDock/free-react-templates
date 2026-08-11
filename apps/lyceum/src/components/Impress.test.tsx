import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Impress } from './Impress'
import { impressCtaLabel, impressHeading, impressParagraph, impressSeed } from '../data'

describe('Impress', () => {
  it('renders the CTA band over the background image', () => {
    const { container } = render(<Impress />)

    const section = container.querySelector('section')!
    expect(section.getAttribute('style')).toContain(`picsum.photos/seed/${impressSeed}/1600/700`)
    expect(screen.getByRole('heading', { level: 2, name: impressHeading })).toBeInTheDocument()
    expect(screen.getByText(impressParagraph)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: impressCtaLabel })
    expect(cta).toHaveAttribute('href', '#')
    expect(cta.getAttribute('class')).toContain('bg-white')
    expect(cta.getAttribute('class')).toContain('hover:bg-brand')
    expect(cta.getAttribute('class')).toContain('hover:text-white')
  })
})
