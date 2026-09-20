import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Upcoming Events')
  })

  it('renders event titles', () => {
    render(<Events />)
    expect(screen.getByText("The Universe Through A Child's Eyes")).toBeInTheDocument()
    expect(screen.getByText('Future of Online Learning')).toBeInTheDocument()
  })

  it('renders event dates', () => {
    render(<Events />)
    expect(screen.getByText('25th February, 2025')).toBeInTheDocument()
    expect(screen.getByText('15th March, 2025')).toBeInTheDocument()
  })

  it('renders event descriptions', () => {
    render(<Events />)
    expect(screen.getByText(/interactive workshop/i)).toBeInTheDocument()
    expect(screen.getByText(/emerging trends/i)).toBeInTheDocument()
  })
})
