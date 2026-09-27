import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('How it Works')
  })

  it('shows four steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Evaluate Property')).toBeInTheDocument()
    expect(screen.getByText('Meet Your Agent')).toBeInTheDocument()
    expect(screen.getByText('Close the Deal')).toBeInTheDocument()
    expect(screen.getByText('Get Your Keys')).toBeInTheDocument()
  })

  it('shows step numbers', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Step 01')).toBeInTheDocument()
    expect(screen.getByText('Step 04')).toBeInTheDocument()
  })
})
