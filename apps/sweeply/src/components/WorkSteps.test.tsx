import { render, screen } from '@testing-library/react'
import { WorkSteps } from './WorkSteps'
import { describe, expect, it } from 'vitest'

describe('WorkSteps', () => {
  it('renders the heading', () => {
    render(<WorkSteps />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Get Amazing Cleaning/ }),
    ).toBeInTheDocument()
  })

  it('renders all 3 steps', () => {
    render(<WorkSteps />)
    expect(screen.getByText('Pick a suitable plan')).toBeInTheDocument()
    expect(screen.getByText('Set your schedule')).toBeInTheDocument()
    expect(screen.getByText('Get things done')).toBeInTheDocument()
  })
})
