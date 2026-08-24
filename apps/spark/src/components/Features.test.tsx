import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Some of the best features Of Our App!',
    )
  })

  it('renders all four feature cards', () => {
    render(<Features />)
    const titles = ['Easy to Customize', 'Extreme Security', 'Customer Support', 'Creative Design']
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Tailor Spark to match/i)).toBeInTheDocument()
    expect(screen.getByText(/enterprise-grade encryption/i)).toBeInTheDocument()
    expect(screen.getByText(/dedicated support team/i)).toBeInTheDocument()
    expect(screen.getByText(/Beautifully designed interfaces/i)).toBeInTheDocument()
  })
})
