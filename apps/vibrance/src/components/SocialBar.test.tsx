import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialBar } from './SocialBar'

describe('SocialBar', () => {
  it('renders social media text and links', () => {
    render(<SocialBar />)
    expect(screen.getByText(/follow us on social media/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })
})
