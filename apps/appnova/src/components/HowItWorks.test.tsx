import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the heading, subtitle, and three steps', () => {
    render(<HowItWorks />)

    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' })).toBeInTheDocument()
    expect(screen.getByText(/Three simple steps/)).toBeInTheDocument()

    for (const title of ['Download the App', 'Set Up Your Profile', 'Start Working']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders step numbers', () => {
    render(<HowItWorks />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
