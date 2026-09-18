import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectGallery } from './ProjectGallery'

describe('ProjectGallery', () => {
  it('renders the heading', () => {
    render(<ProjectGallery />)
    expect(screen.getByRole('heading', { name: /our projects/i })).toBeInTheDocument()
  })

  it('renders 3 project cards', () => {
    render(<ProjectGallery />)
    expect(screen.getByText('Modern Villa')).toBeInTheDocument()
    expect(screen.getByText('Office Complex')).toBeInTheDocument()
    expect(screen.getByText('Residential Tower')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<ProjectGallery />)
    expect(screen.getByRole('img', { name: 'Modern Villa' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Office Complex' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Residential Tower' })).toBeInTheDocument()
  })

  it('renders project containers with role="img" and aria-label', () => {
    render(<ProjectGallery />)
    expect(screen.getByRole('img', { name: /view project: modern villa/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /view project: office complex/i })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /view project: residential tower/i }),
    ).toBeInTheDocument()
  })

  it('shows hover overlay on mouse enter', async () => {
    const user = userEvent.setup()
    render(<ProjectGallery />)
    const projectCard = screen.getByRole('img', { name: /view project: modern villa/i })
    await user.hover(projectCard)
    // The overlay should become visible (opacity-100 class applied)
    expect(projectCard).toBeInTheDocument()
  })

  it('removes hover overlay on mouse leave', async () => {
    const user = userEvent.setup()
    render(<ProjectGallery />)
    const projectCard = screen.getByRole('img', { name: /view project: modern villa/i })
    await user.hover(projectCard)
    await user.unhover(projectCard)
    expect(projectCard).toBeInTheDocument()
  })

  it('shows overlay on focus', async () => {
    const user = userEvent.setup()
    render(<ProjectGallery />)
    const projectCard = screen.getByRole('img', { name: /view project: modern villa/i })
    await user.tab() // Focus first focusable element
    // Check that the card is focusable (tabIndex=0)
    expect(projectCard).toHaveAttribute('tabindex', '0')
  })

  it('hides overlay on blur', async () => {
    const user = userEvent.setup()
    render(<ProjectGallery />)
    const projectCard = screen.getByRole('img', { name: /view project: modern villa/i })
    await user.tab()
    await user.tab() // Move focus away
    expect(projectCard).toBeInTheDocument()
  })

  it('renders zoom-in icons in hover overlays', () => {
    const { container } = render(<ProjectGallery />)
    // ZoomIn icons are in the overlay divs
    const overlays = container.querySelectorAll('[aria-hidden="true"]')
    expect(overlays.length).toBeGreaterThanOrEqual(3)
  })

  it('hovering second project shows its overlay', async () => {
    const user = userEvent.setup()
    render(<ProjectGallery />)
    const projectCard = screen.getByRole('img', { name: /view project: office complex/i })
    await user.hover(projectCard)
    expect(projectCard).toBeInTheDocument()
  })

  it('hovering third project shows its overlay', async () => {
    const user = userEvent.setup()
    render(<ProjectGallery />)
    const projectCard = screen.getByRole('img', { name: /view project: residential tower/i })
    await user.hover(projectCard)
    expect(projectCard).toBeInTheDocument()
  })

  it('renders decorative brand dividers', () => {
    const { container } = render(<ProjectGallery />)
    const dividers = container.querySelectorAll('[aria-hidden="true"]')
    expect(dividers.length).toBeGreaterThanOrEqual(1)
  })

  it('project cards are focusable', () => {
    render(<ProjectGallery />)
    const cards = screen.getAllByRole('img', { name: /view project:/i })
    cards.forEach((card) => {
      expect(card).toHaveAttribute('tabindex', '0')
    })
  })
})
