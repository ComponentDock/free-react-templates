import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the subtitle and four numbered service cards', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: 'What We Do' })
    expect(within(section).getByText('What We Do')).toBeInTheDocument()

    const headings = within(section).getAllByRole('heading', { level: 3 })
    expect(headings.map((h) => h.textContent)).toEqual([
      'Professional Team',
      'Great Ideas',
      'Quality Building',
      'Quality Works',
    ])
    expect(within(section).getByText('01')).toBeInTheDocument()
    expect(within(section).getByText('02')).toBeInTheDocument()
    expect(within(section).getByText('03')).toBeInTheDocument()
    expect(within(section).getByText('04')).toBeInTheDocument()
    expect(within(section).getAllByRole('listitem')).toHaveLength(4)
  })
})
