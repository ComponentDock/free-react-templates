import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone and location info', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 234 456 78910')).toBeInTheDocument()
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
  })

  it('renders brand name and tagline', () => {
    render(<TopBar />)
    expect(screen.getByText('Advocat')).toBeInTheDocument()
    expect(screen.getByText('Lawfirm Agency')).toBeInTheDocument()
  })

  it('links to #top', () => {
    render(<TopBar />)
    const link = screen.getByText('Advocat').closest('a')
    expect(link).toHaveAttribute('href', '#top')
  })
})
