import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Workflow } from './Workflow'

describe('Workflow', () => {
  it('renders the heading and four workflow steps', () => {
    render(<Workflow />)

    expect(
      screen.getByRole('heading', { name: 'This is how we work on Projects' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'This is the first step' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(4)
  })
})
