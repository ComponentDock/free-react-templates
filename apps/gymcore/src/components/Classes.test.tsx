import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('renders heading and all class cards', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: /unlimited classes/i })).toBeInTheDocument()
    expect(screen.getByText('Yoga')).toBeInTheDocument()
    expect(screen.getByText('Running')).toBeInTheDocument()
    expect(screen.getByText('Personal Training')).toBeInTheDocument()
    expect(screen.getByText('Karate')).toBeInTheDocument()
    expect(screen.getByText('Dance')).toBeInTheDocument()
    expect(screen.getByText('Boxing')).toBeInTheDocument()
  })
})
