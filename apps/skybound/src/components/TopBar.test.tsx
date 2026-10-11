import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the right-aligned gold ghost action link above the hero', () => {
    render(<TopBar />)
    expect(screen.getByRole('region', { name: 'Top action bar' })).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /book a table/i })
    expect(link).toHaveAttribute('href', '#packages')
    expect(link).toHaveClass('main-btn')
  })
})
