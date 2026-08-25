import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Easy Management for Your Businesses',
    )
  })

  it('renders the "Why Choose Us" label', () => {
    render(<Features />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Easy Management')).toBeInTheDocument()
    expect(screen.getByText('Protect Your Profile')).toBeInTheDocument()
    expect(screen.getByText('Private Community')).toBeInTheDocument()
    expect(screen.getByText('24/7 Help Support')).toBeInTheDocument()
  })

  it('has gradient background', () => {
    render(<Features />)
    const section = screen.getByRole('heading', { level: 2 }).closest('section')!
    expect(section.className).toContain('from-brand')
  })
})
