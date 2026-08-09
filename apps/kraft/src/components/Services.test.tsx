import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the four service cards with icons and descriptions', () => {
    render(<Services />)

    for (const title of ['Designing', 'Branding Identity', 'Mobile Application', 'Search Engine']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    const descriptions = screen.getAllByText(/Lorem ipsum dolor sit amet/)
    expect(descriptions).toHaveLength(4)
  })
})
