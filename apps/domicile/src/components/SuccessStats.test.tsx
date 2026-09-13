import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SuccessStats } from './SuccessStats'

describe('SuccessStats', () => {
  it('renders both success rows', () => {
    render(<SuccessStats />)
    expect(screen.getByText('Road to Success')).toBeInTheDocument()
    expect(screen.getByText('Our Achievements')).toBeInTheDocument()
  })

  it('renders the success images', () => {
    render(<SuccessStats />)
    expect(screen.getByAltText('Road to Success')).toBeInTheDocument()
    expect(screen.getByAltText('Our Achievements')).toBeInTheDocument()
  })
})
