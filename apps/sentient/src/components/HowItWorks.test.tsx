import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading and three numbered steps', () => {
    render(<HowItWorks />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'From Data to Intelligence in Minutes' }),
    ).toBeInTheDocument()

    for (const number of ['01', '02', '03']) {
      expect(screen.getByText(number)).toBeInTheDocument()
    }
    for (const step of ['Connect Your Data', 'Train & Fine-tune', 'Deploy & Scale']) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }
  })
})
