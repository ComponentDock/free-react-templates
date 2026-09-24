import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('shows the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Services')
  })

  it('renders all 6 service items', () => {
    render(<Services />)
    const services = [
      'Cardiology',
      'Gastroenterology',
      'Medical Lab',
      'Dental Care',
      'Surgery',
      'Neurology',
    ]
    for (const name of services) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('has a Read More button at the bottom', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /read more/i })).toHaveAttribute('href', '#info')
  })
})
