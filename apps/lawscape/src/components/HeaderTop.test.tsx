import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderTop } from './HeaderTop'

describe('HeaderTop', () => {
  it('displays phone number and email', () => {
    render(<HeaderTop />)
    expect(screen.getByText('+014 321 523 23')).toBeInTheDocument()
    expect(screen.getByText('Info@lawscape.com')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<HeaderTop />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
