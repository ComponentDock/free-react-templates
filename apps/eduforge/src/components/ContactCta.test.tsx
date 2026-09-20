import { render, screen } from '@testing-library/react'
import { ContactCta } from './ContactCta'

describe('ContactCta', () => {
  it('renders heading', () => {
    render(<ContactCta />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact Us')
  })

  it('renders CTA button', () => {
    render(<ContactCta />)
    expect(screen.getByRole('link', { name: /contact us now/i })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<ContactCta />)
    expect(screen.getByText(/have questions/i)).toBeInTheDocument()
  })
})
