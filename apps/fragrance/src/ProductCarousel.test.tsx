import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCarousel } from './components/ProductCarousel'

describe('ProductCarousel', () => {
  it('renders 3 slides', () => {
    render(<ProductCarousel />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('shows product names and categories on hover', async () => {
    const user = userEvent.setup()
    render(<ProductCarousel />)
    const firstSlide = screen.getByText('Wireless Headphone').closest('.group')!
    await user.hover(firstSlide)
    expect(screen.getByText('Wireless Headphone')).toBeInTheDocument()
    expect(screen.getAllByText('Accessories Item').length).toBeGreaterThan(0)
  })
})
