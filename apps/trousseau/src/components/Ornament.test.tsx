import { render, screen } from '@testing-library/react'
import { Ornament } from './Ornament'
import { BrandMark } from './BrandMark'
import { SectionTitle } from './SectionTitle'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the page ornaments', () => {
  it('draws the flourish as decoration only', () => {
    const { container } = render(<Ornament className="h-[24px] w-[220px] text-white" />)

    const flourish = container.querySelector('[data-ornament]') as SVGElement

    expect(flourish).toHaveAttribute('aria-hidden', 'true')
    expect(flourish.getAttribute('class')).toContain('text-white')
    expect(flourish.querySelectorAll('path').length).toBeGreaterThan(3)
  })

  it('draws the wordmark as decoration only', () => {
    const { container } = render(<BrandMark className="h-[34px] w-[34px] text-brand" />)

    const mark = container.querySelector('[data-brand-mark]') as SVGElement

    expect(mark).toHaveAttribute('aria-hidden', 'true')
    expect(mark.getAttribute('class')).toContain('text-brand')
    expect(mark.querySelectorAll('circle')).toHaveLength(2)
  })
})

describe('the band title', () => {
  it('sets a display-serif heading over a light intro', () => {
    render(<SectionTitle heading="A band" intro="What the band is about." />)

    const heading = screen.getByRole('heading', { level: 2, name: 'A band' })

    expect(tokens(heading)).toContain('text-[30px]')
    expect(tokens(heading)).toContain('md:text-[36px]')
    expect(screen.getByText('What the band is about.')).toBeInTheDocument()
  })
})
