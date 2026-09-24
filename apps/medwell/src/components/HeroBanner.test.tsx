import { render, screen } from '@testing-library/react'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  it('renders heading and description', () => {
    render(<HeroBanner />)
    expect(
      screen.getByRole('heading', { level: 1, name: /making health care better/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/comprehensive healthcare services/i)).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<HeroBanner />)
    expect(screen.getByText('Make an Appointment')).toHaveAttribute('href', '#contact')
    expect(screen.getByText('View Department')).toHaveAttribute('href', '#services')
  })

  it('has background image styling', () => {
    render(<HeroBanner />)
    const section = screen.getByRole('heading', { level: 1 }).closest('section')!
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('medwell-hero') })
  })
})
