import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the headline, subtext, and Get started button on a blue band', () => {
    render(<CtaBand />)
    const section = screen.getByRole('region', { name: 'Call to action' })
    expect(section.className).toContain('bg-accent')
    expect(
      within(section).getByRole('heading', { level: 2, name: "Let's get to work" }),
    ).toBeInTheDocument()
    expect(within(section).getByText(/behind the word mountains/)).toBeInTheDocument()
    expect(within(section).getByRole('link', { name: 'Get started' })).toBeInTheDocument()
  })
})
