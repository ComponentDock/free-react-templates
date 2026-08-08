import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Process } from './Process'

describe('Process', () => {
  it('renders the section heading', () => {
    render(<Process />)
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Getting Covered is Easy' }),
    ).toBeInTheDocument()
  })

  it('renders the three numbered steps', () => {
    render(<Process />)
    for (const step of ['Get a Quote', 'Choose Your Plan', "You're Covered"]) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }
    for (const number of ['01', '02', '03']) {
      expect(screen.getByText(number)).toBeInTheDocument()
    }
  })
})
