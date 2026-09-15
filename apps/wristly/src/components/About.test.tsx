import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByText(/We've made a life/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /wristly smartwatch/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders the Get Started button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })
})
