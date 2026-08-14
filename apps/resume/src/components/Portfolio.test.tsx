import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading, filter tabs, and the active mosaic', () => {
    render(<Portfolio />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'What Services you will Get from me!',
      }),
    ).toBeInTheDocument()
    for (const tab of ['All', 'Branding', 'Logo', 'UI/UX', 'Web Design']) {
      expect(screen.getByRole('tab', { name: tab })).toBeInTheDocument()
    }
    // All pane shows six images, with the first large tile
    expect(screen.getByRole('tabpanel', { name: 'All portfolio items' })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBe(6)
  })

  it('switches the mosaic when a filter tab is activated', () => {
    render(<Portfolio />)

    fireEvent.click(screen.getByRole('tab', { name: 'Branding' }))

    expect(screen.getByRole('tab', { name: 'Branding' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Branding portfolio items' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
    expect(images[0]!).toHaveAttribute('src', 'https://picsum.photos/seed/resume-brand-1/1200/800')
    expect(images[0]!).toHaveAttribute('alt', 'Brand identity system project')
  })

  it('keeps the active tab highlighted with the accent underline', () => {
    render(<Portfolio />)

    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true')
    fireEvent.click(screen.getByRole('tab', { name: 'UI/UX' }))
    expect(screen.getByRole('tab', { name: 'UI/UX' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'false')
  })

  it('keeps image links on the page without navigating', () => {
    render(<Portfolio />)

    const firstImage = screen.getAllByRole('link')[0]!
    firstImage.addEventListener('click', (event) => event.preventDefault(), { once: true })
    firstImage.click()

    expect(window.location.hash).toBe('')
  })
})
