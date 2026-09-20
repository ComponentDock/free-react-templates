import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Digital Conference For Designers')).toBeInTheDocument()
    expect(screen.getByText('The Biggest Digital Conference.')).toBeInTheDocument()
    expect(screen.getByText('Program Pricing')).toBeInTheDocument()
    expect(screen.getByText('Our Top General Sponsors.')).toBeInTheDocument()
    expect(screen.getByText('News From Blog')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Confetti — Digital Conference Template')
  })
})
