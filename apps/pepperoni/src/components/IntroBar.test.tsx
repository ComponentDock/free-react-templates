import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroBar } from './IntroBar'

describe('IntroBar', () => {
  it('shows phone, address, and hours', () => {
    render(<IntroBar />)
    expect(screen.getByText('000 (123) 456 7890')).toBeInTheDocument()
    expect(screen.getByText('198 West 21th Street')).toBeInTheDocument()
    expect(screen.getByText('Open Monday–Friday')).toBeInTheDocument()
  })
})
