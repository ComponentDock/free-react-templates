import { render, screen } from '@testing-library/react'
import { WizardHeader } from './WizardHeader'

describe('WizardHeader', () => {
  it('displays the heading text', () => {
    render(<WizardHeader />)
    expect(screen.getByRole('heading', { name: 'Sign Up To Financial' })).toBeInTheDocument()
  })

  it('displays the description text', () => {
    render(<WizardHeader />)
    expect(screen.getByText('Fill all form field to go next step')).toBeInTheDocument()
  })

  it('renders heading as h1 element', () => {
    render(<WizardHeader />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.tagName).toBe('H1')
  })
})
