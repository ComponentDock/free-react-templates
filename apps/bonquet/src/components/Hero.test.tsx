import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /meet, eat & enjoy/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/making a reservation at bonquet/i)).toBeInTheDocument()
  })

  it('renders the Our Menu button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Our Menu' })).toBeInTheDocument()
  })

  it('renders the Watch Video button', () => {
    render(<Hero />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /delicious restaurant/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
