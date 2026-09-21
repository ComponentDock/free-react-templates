import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading.textContent).toContain('What')
    expect(heading.textContent).toContain('Offer')
  })

  it('renders all four services', () => {
    render(<Services />)
    expect(screen.getByText('Nature Photography')).toBeDefined()
    expect(screen.getByText('Property Tours')).toBeDefined()
    expect(screen.getByText('Event Coverage')).toBeDefined()
    expect(screen.getByText('Wedding Photography')).toBeDefined()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/raw beauty of natural/)).toBeDefined()
  })
})
