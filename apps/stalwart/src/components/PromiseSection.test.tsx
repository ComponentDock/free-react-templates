import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PromiseSection } from './PromiseSection'

describe('PromiseSection', () => {
  it('renders the section heading with the red slash prefix', () => {
    render(<PromiseSection />)
    const heading = screen.getByRole('heading', { level: 2, name: /Our Promise and Values/i })
    expect(heading).toHaveTextContent('/')
    expect(heading.querySelector('.text-brand')).toHaveTextContent('/')
  })

  it('renders the experience box with a big red 50', () => {
    render(<PromiseSection />)
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })

  it('renders two promise blocks and the outline Learn More button', () => {
    render(<PromiseSection />)
    expect(
      screen.getAllByRole('heading', { level: 3, name: /Our Promise|Our Values/i }),
    ).toHaveLength(2)
    expect(screen.getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', '#about')
  })

  it('uses deterministic placeholder images', () => {
    render(<PromiseSection />)
    const image = document.querySelector('img[alt^="Construction site"]')
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/stalwart-promise'),
    )
  })
})
