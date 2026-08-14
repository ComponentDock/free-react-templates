import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the gradient band with the four service cards', () => {
    render(<Services />)
    const section = screen.getByText('Search Millions of Jobs').closest('section')
    expect(section?.className).toContain('bg-gradient-to-r')

    for (const title of [
      'Search Millions of Jobs',
      'Easy To Manage Jobs',
      'Top Careers',
      'Search Expert Candidates',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(
      screen.getAllByText(/A small river named Duden flows by their place and supplies/),
    ).toHaveLength(4)
  })
})
