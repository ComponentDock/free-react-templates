import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to Eduforge')
  })

  it('renders all feature titles', () => {
    render(<About />)
    expect(screen.getByText('Online Courses')).toBeInTheDocument()
    expect(screen.getByText('Expert Teachers')).toBeInTheDocument()
    expect(screen.getByText('Community')).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByAltText('About Eduforge')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('eduforge-about'))
  })
})
