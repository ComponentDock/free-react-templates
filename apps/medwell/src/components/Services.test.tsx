import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: /awesome health service/i }),
    ).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Neurology Service')).toBeInTheDocument()
    expect(screen.getByText('Dental Clinic')).toBeInTheDocument()
    expect(screen.getByText('Plastic Surgery')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Services />)
    const links = screen.getAllByText('Learn More')
    expect(links).toHaveLength(3)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#contact')
    })
  })
})
