import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CustomerFeedback } from './CustomerFeedback'

describe('CustomerFeedback', () => {
  it('renders testimonials with name, role, and quote', () => {
    render(<CustomerFeedback />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Feedback From Customers')
    expect(screen.getByText(/See what our community/)).toBeInTheDocument()

    const names = screen.getAllByRole('heading', { level: 3 })
    expect(names).toHaveLength(3)
    expect(names[0]?.textContent).toBe('Adame Nesane')
    expect(names[1]?.textContent).toBe('Maria Santos')
    expect(names[2]?.textContent).toBe('James Wilson')

    expect(screen.getAllByText('Chief Customer')).toHaveLength(1)
    expect(screen.getByText('Food Blogger')).toBeInTheDocument()
    expect(screen.getByText('Home Chef')).toBeInTheDocument()

    expect(screen.getByText(/recipes are incredibly detailed/)).toBeInTheDocument()
    expect(screen.getByText(/recipe collection is outstanding/)).toBeInTheDocument()
    expect(screen.getByText(/use this platform daily/)).toBeInTheDocument()
  })
})
