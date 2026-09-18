import { render, screen } from '@testing-library/react'
import { Solutions } from './Solutions'

describe('Solutions', () => {
  it('renders the heading', () => {
    render(<Solutions />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /simple solutions for complex connections/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Solutions />)
    expect(screen.getByText(/integrate your entire tech stack/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Solutions />)
    expect(screen.getByText('Know More')).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<Solutions />)
    const img = screen.getByAltText('Connected solutions')
    expect(img).toBeInTheDocument()
  })
})
