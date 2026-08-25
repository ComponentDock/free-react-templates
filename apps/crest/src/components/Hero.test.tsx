import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Get the help you need, every step of the way',
    )
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(
      screen.getByText('Design better websites and spend less with Essentials.'),
    ).toBeInTheDocument()
  })

  it('renders the Get Started button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Get Started/ })).toHaveAttribute('href', '#about')
  })

  it('renders the hero section', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('has a hero shape image', () => {
    const { container } = render(<Hero />)
    const shapeImg = container.querySelector('img[alt=""]')
    expect(shapeImg).toBeInTheDocument()
  })
})
