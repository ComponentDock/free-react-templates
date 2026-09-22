import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutCompany } from './AboutCompany'

describe('AboutCompany', () => {
  it('renders the since badge', () => {
    render(<AboutCompany />)
    expect(screen.getByText('Since')).toBeInTheDocument()
    expect(screen.getByText('1992')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<AboutCompany />)
    expect(
      screen.getByRole('heading', {
        name: /We are GoQuest/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the about paragraph', () => {
    render(<AboutCompany />)
    expect(screen.getByText(/world-leading online tour booking platform/i)).toBeInTheDocument()
  })

  it('renders all four check items', () => {
    render(<AboutCompany />)
    expect(screen.getByText('Experience a new way of travel')).toBeInTheDocument()
    expect(screen.getByText('Expert local guides for every tour')).toBeInTheDocument()
    expect(screen.getByText('Best price guarantee on all packages')).toBeInTheDocument()
    expect(screen.getByText('24/7 customer support worldwide')).toBeInTheDocument()
  })

  it('renders the About us button', () => {
    render(<AboutCompany />)
    expect(screen.getByRole('link', { name: /about us/i })).toHaveAttribute('href', '#about-more')
  })

  it('renders the about image', () => {
    render(<AboutCompany />)
    expect(screen.getByRole('img', { name: 'Travel experience' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
