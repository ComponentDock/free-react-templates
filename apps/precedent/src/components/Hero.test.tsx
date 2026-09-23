import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "Don't Feel Helpless We Fight for Justice",
    )
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Our experienced team of attorneys/)).toBeInTheDocument()
  })

  it('renders Contact us button', () => {
    render(<Hero />)
    expect(screen.getByText('Contact us')).toHaveAttribute('href', '#contact')
  })

  it('renders Read more button', () => {
    render(<Hero />)
    expect(screen.getByText('Read more')).toHaveAttribute('href', '#about')
  })

  it('has aria-labelledby on section', () => {
    render(<Hero />)
    expect(
      screen.getByRole('region', { name: /Don't Feel Helpless We Fight for Justice/i }),
    ).toBeInTheDocument()
  })

  it('renders background image', () => {
    const { container } = render(<Hero />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img?.getAttribute('src')).toContain('picsum.photos')
  })
})
