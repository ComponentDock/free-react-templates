import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders section heading', () => {
    render(<Features />)
    expect(screen.getByText(/why/i)).toBeInTheDocument()
    expect(screen.getByText(/learnhub/i)).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Flexible Learning')).toBeInTheDocument()
    expect(screen.getByText('Expert Instructors')).toBeInTheDocument()
    expect(screen.getByText('Career Support')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/study at your own pace/i)).toBeInTheDocument()
    expect(screen.getByText(/learn from industry professionals/i)).toBeInTheDocument()
    expect(screen.getByText(/career guidance/i)).toBeInTheDocument()
  })

  it('renders Learn More link', () => {
    render(<Features />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })
})
