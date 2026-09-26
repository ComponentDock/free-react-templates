import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders social icon links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('renders phone and email links', () => {
    render(<TopBar />)
    expect(screen.getByText('(123) 456 7890')).toHaveAttribute('href', 'tel:+11234567890')
    expect(screen.getByText('info@example.com')).toHaveAttribute('href', 'mailto:info@example.com')
  })
})
