import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PromoBanner } from './PromoBanner'

describe('PromoBanner', () => {
  it('renders headline', () => {
    render(<PromoBanner />)
    expect(screen.getByText('Season Sale — Up to 50% Off')).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<PromoBanner />)
    expect(screen.getByText(/Refresh your wardrobe/)).toBeInTheDocument()
  })

  it('renders Shop the Sale CTA', () => {
    render(<PromoBanner />)
    expect(screen.getByText('Shop the Sale')).toBeInTheDocument()
  })

  it('has dark background', () => {
    render(<PromoBanner />)
    const section = screen.getByText('Season Sale — Up to 50% Off').closest('section')!
    expect(section.className).toContain('bg-primary-500')
  })

  it('CTA is a link', async () => {
    const user = userEvent.setup()
    render(<PromoBanner />)
    const cta = screen.getByText('Shop the Sale')
    expect(cta.tagName).toBe('A')
    await user.click(cta)
    expect(cta).toBeInTheDocument()
  })
})
