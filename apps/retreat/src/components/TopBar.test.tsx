import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('(123) 456-789-1230')).toBeInTheDocument()
    expect(screen.getByText('info@retreat.com')).toBeInTheDocument()
  })

  it('shows social media icons', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
