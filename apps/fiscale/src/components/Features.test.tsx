import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading with subtext and three alternating rows', () => {
    render(<Features />)
    const section = screen.getByRole('region', { name: 'Features' })
    expect(within(section).getByRole('heading', { level: 2, name: 'Features' })).toBeInTheDocument()
    expect(within(section).getAllByText(/behind the word mountains/).length).toBeGreaterThanOrEqual(
      1,
    )

    const rows = within(section).getAllByTestId('feature-row')
    expect(rows).toHaveLength(3)

    const titles = [
      'How is your site performing?',
      'Smart Site Conversion',
      'Speed Site Increase Ranks',
    ]
    for (const [index, title] of titles.entries()) {
      expect(
        within(rows[index]!).getByRole('heading', { level: 3, name: title }),
      ).toBeInTheDocument()
      expect(within(rows[index]!).getByText(String(index + 1))).toBeInTheDocument()
      expect(within(rows[index]!).getByRole('link', { name: /Read more/ })).toBeInTheDocument()
      expect(within(rows[index]!).getAllByRole('img')).toHaveLength(1)
    }
  })

  it('alternates image position (row two reversed) and numbers the circles', () => {
    render(<Features />)
    const rows = screen.getAllByTestId('feature-row')
    expect(rows[0]!.className).not.toContain('lg:flex-row-reverse')
    expect(rows[1]!.className).toContain('lg:flex-row-reverse')
    expect(rows[2]!.className).not.toContain('lg:flex-row-reverse')
  })
})
