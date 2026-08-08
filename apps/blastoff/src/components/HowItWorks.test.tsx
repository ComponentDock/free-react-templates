import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('shows the eyebrow, heading and subcopy', () => {
    render(<HowItWorks />)

    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'From idea to production in minutes' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Three simple steps/)).toBeInTheDocument()
  })

  it('shows the three numbered steps', () => {
    render(<HowItWorks />)

    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Connect' })).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Build' })).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Deploy' })).toBeInTheDocument()

    expect(screen.getByText(/Link your repository/)).toBeInTheDocument()
    expect(screen.getByText(/Push code and watch previews/)).toBeInTheDocument()
    expect(screen.getByText(/Ship to production with one click/)).toBeInTheDocument()
  })
})
