import { render, screen } from '@testing-library/react'
import { Support } from './Support'

describe('Support', () => {
  it('renders the section heading', () => {
    render(<Support />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Professional who works/ }),
    ).toBeInTheDocument()
  })

  it('renders the Get Started CTA button', () => {
    render(<Support />)
    expect(screen.getByRole('link', { name: /Get Started/ })).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<Support />)
    expect(screen.getByText(/Apply for a business loan today/)).toBeInTheDocument()
  })

  it('renders the support image', () => {
    const { container } = render(<Support />)
    const img = container.querySelector('img[alt="Support"]')
    expect(img).toBeInTheDocument()
  })
})
