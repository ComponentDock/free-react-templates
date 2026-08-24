import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the CTA heading', () => {
    render(<Cta />)
    expect(screen.getByText(/Begin your adventurous journey here/)).toBeInTheDocument()
  })

  it('renders the Get started button', () => {
    render(<Cta />)
    expect(screen.getByText('Get started')).toBeInTheDocument()
  })

  it('renders the Get started link', () => {
    render(<Cta />)
    const link = screen.getByText('Get started')
    expect(link).toHaveAttribute('href', '#home')
  })

  it('has the contact section with correct id', () => {
    render(<Cta />)
    const section = document.getElementById('contact')
    expect(section).toBeInTheDocument()
  })
})
