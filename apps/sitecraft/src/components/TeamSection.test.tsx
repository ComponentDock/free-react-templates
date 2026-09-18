import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TeamSection } from './TeamSection'

describe('TeamSection', () => {
  it('renders the section heading', () => {
    render(<TeamSection />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Team' })).toBeInTheDocument()
  })

  it('renders all four team members', () => {
    render(<TeamSection />)

    expect(screen.getByText('Ian Moore')).toBeInTheDocument()
    expect(screen.getByText('Jack Clark')).toBeInTheDocument()
    expect(screen.getByText('Kiven Lewis')).toBeInTheDocument()
    expect(screen.getByText('Charles Scott')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<TeamSection />)

    expect(screen.getByText('Electrician')).toBeInTheDocument()
    expect(screen.getByText('Engineer')).toBeInTheDocument()
    expect(screen.getByText('Architect')).toBeInTheDocument()
    expect(screen.getByText('Assistant Engineer')).toBeInTheDocument()
  })

  it('renders three accordion buttons', () => {
    render(<TeamSection />)

    const buttons = screen.getAllByRole('button')
    const accordionBtns = buttons.filter((b) =>
      ['Who We Are', 'What We Do?', 'Why Choose Us'].some((t) => b.textContent?.includes(t)),
    )
    expect(accordionBtns.length).toBe(3)
  })

  it('defaults to first accordion item open', () => {
    render(<TeamSection />)

    // First accordion content should be visible
    const content = screen.getByText(/Far far away, behind the word mountains/)
    expect(content).toBeInTheDocument()
  })

  it('toggles accordion panels', async () => {
    const user = userEvent.setup()
    render(<TeamSection />)

    // Find the "What We Do?" button by text content
    const allButtons = screen.getAllByRole('button')
    const whatBtn = allButtons.find((b) => b.textContent?.includes('What We Do?'))!
    await user.click(whatBtn)

    expect(whatBtn).toHaveAttribute('aria-expanded', 'true')

    // "Who We Are" should now be collapsed
    const whoBtn = allButtons.find((b) => b.textContent?.includes('Who We Are'))!
    expect(whoBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes an open accordion when clicked again', async () => {
    const user = userEvent.setup()
    render(<TeamSection />)

    const allButtons = screen.getAllByRole('button')
    const whoBtn = allButtons.find((b) => b.textContent?.includes('Who We Are'))!
    expect(whoBtn).toHaveAttribute('aria-expanded', 'true')

    await user.click(whoBtn)
    expect(whoBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders team member images', () => {
    const { container } = render(<TeamSection />)

    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
