import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders heading and 6 sponsor placeholders', () => {
    render(<Sponsors />)
    expect(screen.getByText('Sponsors')).toBeInTheDocument()
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByText(`Sponsor ${i}`)).toBeInTheDocument()
    }
  })

  it('renders become a sponsor button', () => {
    render(<Sponsors />)
    expect(screen.getByText('Become a Sponsor')).toBeInTheDocument()
  })
})
