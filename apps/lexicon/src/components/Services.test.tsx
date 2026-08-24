import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Surrounded by galleries')
  })

  it('renders Find a Room For You link', () => {
    render(<Services />)
    expect(screen.getByText('Find a Room For You')).toBeInTheDocument()
  })

  it('renders View Project button', () => {
    render(<Services />)
    expect(screen.getByText('View Project')).toBeInTheDocument()
  })

  it('renders seasonal specials text', () => {
    render(<Services />)
    expect(screen.getByText('Take Advantage of Our Seasonal Specials')).toBeInTheDocument()
  })

  it('renders image', () => {
    render(<Services />)
    expect(screen.getByRole('img', { name: 'Seasonal specials' })).toBeInTheDocument()
  })
})
