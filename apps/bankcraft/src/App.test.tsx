import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Bankcraft').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Banking Solutions')).toBeInTheDocument()
    expect(screen.getAllByText('Money Savings').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Meet Team')).toBeInTheDocument()
    expect(screen.getByText('Our Gallery')).toBeInTheDocument()
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    expect(screen.getByText('Bank Loan')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Bankcraft — Banking Solutions Template')
  })
})
