import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Precedent').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "Don't Feel Helpless We Fight for Justice",
    )
    expect(screen.getAllByText('Expert Attorneys').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Free Consultation')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
