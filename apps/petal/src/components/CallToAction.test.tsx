import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the CTA heading and buttons', () => {
    render(<CallToAction />)
    expect(screen.getByText(/Let our flowers make your party more perfect/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /order now/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument()
  })
})
