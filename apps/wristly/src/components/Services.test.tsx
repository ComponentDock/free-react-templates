import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByText('Some Features That Made Us Unique')).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Expert Technicians',
      'Professional Service',
      'Great Support',
      'Technical Skills',
      'Highly Recommended',
      'Positive Reviews',
    ]
    titles.forEach((t) => {
      expect(screen.getByText(t)).toBeInTheDocument()
    })
  })
})
