import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Story } from './Story'

describe('Story', () => {
  it('renders the story section with heading and content', () => {
    render(<Story />)
    expect(screen.getByText('Our Untold Story')).toBeInTheDocument()
    expect(screen.getByText('From the part of beginning')).toBeInTheDocument()
    expect(screen.getByText(/usage of the internet/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Story />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
