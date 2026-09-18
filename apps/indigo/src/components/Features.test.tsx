import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { level: 2, name: /awesome soft feature/i }),
    ).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Unique Design')).toBeInTheDocument()
    expect(screen.getByText('Business Solution')).toBeInTheDocument()
    expect(screen.getByText('Customer Support')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/stand out with a clean/i)).toBeInTheDocument()
    expect(screen.getByText(/end-to-end tools/i)).toBeInTheDocument()
    expect(screen.getByText(/dedicated support around/i)).toBeInTheDocument()
  })
})
