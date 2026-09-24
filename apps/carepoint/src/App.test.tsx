import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Medicine made with care')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('FAQ').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('A great medical team to help your needs')).toBeInTheDocument()
    expect(screen.getByText('Our Medical Departments')).toBeInTheDocument()
    expect(screen.getByText('Our Featured Services')).toBeInTheDocument()
    expect(screen.getByText('Need a personal health plan?')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
