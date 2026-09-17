import { render, screen } from '@testing-library/react'
import { BannerHeader } from './BannerHeader'

describe('BannerHeader', () => {
  it('renders the heading', () => {
    render(<BannerHeader />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('renders the subtitle', () => {
    render(<BannerHeader />)
    expect(screen.getByText(/feel free to drop us a line below/i)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<BannerHeader className="custom-class" />)
    expect(container.firstElementChild).toHaveClass('custom-class')
  })
})
