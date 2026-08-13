import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsCta } from './StatsCta'
import { statsSection } from '../data'

describe('StatsCta', () => {
  it('shows the hosting-stat headline with the number highlighted in blue', () => {
    render(<StatsCta />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Proudly Hosting Over/)
    expect(screen.getByText('800,000')).toHaveClass('text-primary')
    expect(screen.getByRole('link', { name: statsSection.button })).toBeInTheDocument()
  })
})
