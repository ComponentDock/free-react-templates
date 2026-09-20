import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UpperBar } from './UpperBar'

describe('UpperBar', () => {
  it('renders social icon links and Apply Now', () => {
    render(<UpperBar />)

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
    expect(screen.getByText('Apply Now')).toBeInTheDocument()
  })

  it('links Apply Now to the apply section', () => {
    render(<UpperBar />)

    const applyLink = screen.getByText('Apply Now')
    expect(applyLink).toHaveAttribute('href', '#apply')
  })
})
