import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the heading and description', () => {
    render(<VideoSection />)
    expect(screen.getByRole('heading', { name: /how we work/i })).toBeInTheDocument()
    expect(screen.getByText(/streamlined process/i)).toBeInTheDocument()
  })

  it('renders three numbered steps', () => {
    render(<VideoSection />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<VideoSection />)
    const btn = screen.getByRole('link', { name: /start a project/i })
    expect(btn).toHaveAttribute('href', '#contact')
  })
})
