import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Community } from './Community'

describe('Community', () => {
  it('shows community heading and social links', () => {
    render(<Community />)
    expect(screen.getByText('Our Community')).toBeInTheDocument()
    expect(screen.getByLabelText('Google+')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })
})
