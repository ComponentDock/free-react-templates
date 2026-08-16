import { render, screen } from '@testing-library/react'
import { WorkSteps } from './WorkSteps'
import { describe, expect, it } from 'vitest'

describe('WorkSteps', () => {
  it('renders the section title and three numbered steps', () => {
    const { container } = render(<WorkSteps />)
    expect(screen.getByText('How it work')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Get Amazing Cleaning In 3 Simple Steps' }),
    ).toBeInTheDocument()

    for (const title of ['Pick a suitable plan', 'Set your schedule', 'Get things done']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(container.querySelectorAll('section#how-it-works span.rounded-full')).toHaveLength(3)
    expect(container.querySelector('section#how-it-works')).toHaveStyle({
      backgroundImage: expect.stringContaining('spotless-work'),
    })
  })
})
