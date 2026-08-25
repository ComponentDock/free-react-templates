import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Pulsewave A Digital Agency Company',
    )
  })

  it('renders the "More About us" button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /more about us/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /pulsewave agency team/i })).toBeInTheDocument()
  })

  it('has responsive layout', () => {
    render(<About />)
    const flex = screen.getByText('Pulsewave A Digital Agency Company').closest('.flex')!
    expect(flex.className).toContain('lg:flex-row')
  })
})
