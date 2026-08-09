import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading, blurb, and four service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What We Can Do for You' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Who are in extremely love with eco friendly system/i),
    ).toBeInTheDocument()
    for (const title of [
      'Beard Trimming',
      'Quality Gel Shave',
      'Effective Body Massage',
      'Stylish Hair Cutting',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByText(title).closest('div')?.textContent).toContain(title)
    }
  })
})
