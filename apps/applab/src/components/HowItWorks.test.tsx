import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading and the three steps in order', () => {
    render(<HowItWorks />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Get started in three simple steps' }),
    ).toBeInTheDocument()

    const steps = ['01', '02', '03']
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
    expect(headings[0]).toHaveTextContent('Sign Up for free')
    expect(headings[1]).toHaveTextContent('Make your profile')
    expect(headings[2]).toHaveTextContent('Enjoy the app')

    for (const number of steps) {
      expect(screen.getByText(number)).toBeInTheDocument()
    }
  })
})
