import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders social links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('displays the date', () => {
    render(<TopBar />)
    const dateStr = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
    expect(screen.getByText(dateStr)).toBeInTheDocument()
  })

  it('shows weather widget text', () => {
    render(<TopBar />)
    expect(screen.getByText(/London/)).toBeInTheDocument()
  })

  it('has 5 social link icons', () => {
    const { container } = render(<TopBar />)
    const svgIcons = container.querySelectorAll('.text-text-body svg')
    expect(svgIcons.length).toBeGreaterThanOrEqual(5)
  })
})
