import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('How it works')
  })

  it('renders all 3 steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Evaluate Your Property')).toBeInTheDocument()
    expect(screen.getByText('Meet Your Agent')).toBeInTheDocument()
    expect(screen.getByText('Close the Deal')).toBeInTheDocument()
  })
})
