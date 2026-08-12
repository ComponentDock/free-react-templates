import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders the title and four choose-us items', () => {
    render(<ChooseUs />)

    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us ?' })).toBeInTheDocument()
    for (const title of ['Top Rated', 'Fetured App', 'Easy To Share', 'Best Apps']) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }
  })
})
