import { render, screen } from '@testing-library/react'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the section title', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Ask Questions')).toBeInTheDocument()
  })

  it('renders 8 FAQ items', () => {
    render(<FAQ />)
    expect(screen.getByText('How do I open a new account?')).toBeInTheDocument()
    expect(screen.getByText('What are the fees for international transfers?')).toBeInTheDocument()
    expect(screen.getByText('Is my money safe with Banknote?')).toBeInTheDocument()
    expect(screen.getByText('How can I contact customer support?')).toBeInTheDocument()
    expect(screen.getByText('Do you offer business accounts?')).toBeInTheDocument()
    expect(screen.getByText('What investment options do you provide?')).toBeInTheDocument()
    expect(screen.getByText('How do I reset my password?')).toBeInTheDocument()
    expect(screen.getByText('Can I set up automatic bill payments?')).toBeInTheDocument()
  })
})
