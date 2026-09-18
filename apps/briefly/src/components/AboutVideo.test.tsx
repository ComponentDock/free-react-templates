import { render, screen } from '@testing-library/react'
import { AboutVideo } from './AboutVideo'

describe('AboutVideo', () => {
  it('renders the heading', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Get to Know Project Estimate/,
    )
  })

  it('renders the description', () => {
    render(<AboutVideo />)
    expect(screen.getByText(/There is a moment in the life/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders the author attribution', () => {
    render(<AboutVideo />)
    expect(screen.getByText('Marvel Maison')).toBeInTheDocument()
    expect(screen.getByText('Chief Executive, Amazon')).toBeInTheDocument()
  })
})
