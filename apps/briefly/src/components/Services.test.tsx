import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Services Offered By Us')
  })

  it('renders three service cards', () => {
    render(<Services />)
    const headings = screen.getAllByText('Get to Know Project Estimate?')
    expect(headings).toHaveLength(3)
  })

  it('renders service images', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
