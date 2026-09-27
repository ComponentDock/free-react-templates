import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('TaskFlow App', () => {
  it('renders the sidebar with logo and navigation', () => {
    render(<App />)
    expect(screen.getByText('Task')).toBeInTheDocument()
    expect(screen.getByText('Flow')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    // Contact appears in both sidebar nav and CTA
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero slider with first slide heading', () => {
    render(<App />)
    expect(screen.getByText('Strategic Design for Brands')).toBeInTheDocument()
    // Learn More appears on each slide
    expect(screen.getAllByText('Learn More').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the about section with introduction', () => {
    render(<App />)
    expect(screen.getByText(/welcome & introduce/i)).toBeInTheDocument()
    expect(screen.getByText(/hola! my name is louie jie!/i)).toBeInTheDocument()
  })

  it('renders the services section with all 6 expertise cards', () => {
    render(<App />)
    expect(screen.getByText(/here are some of my expertise/i)).toBeInTheDocument()
    expect(screen.getAllByText('Branding').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Web Design').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Search Engine Optimization')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('User Interface')).toBeInTheDocument()
    expect(screen.getByText('Help & Support')).toBeInTheDocument()
  })

  it('renders the portfolio section with project cards', () => {
    render(<App />)
    expect(screen.getByText('Recent Work')).toBeInTheDocument()
    expect(screen.getByText('Work 01')).toBeInTheDocument()
    expect(screen.getByText('Work 06')).toBeInTheDocument()
    expect(screen.getByText(/branding, illustration/i)).toBeInTheDocument()
  })

  it('renders the blog section with 3 posts', () => {
    render(<App />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Creative Design Trends for 2026')).toBeInTheDocument()
    expect(screen.getByText('Building Scalable Web Applications')).toBeInTheDocument()
    expect(screen.getByText('The Art of Brand Storytelling')).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<App />)
    expect(screen.getByText('Get in Touch!')).toBeInTheDocument()
    expect(screen.getByText('Contact me!')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const footerLink = screen.getByRole('link', { name: /component dock/i })
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('accordion panels toggle on click', async () => {
    const user = userEvent.setup()
    render(<App />)

    // First panel ("Why choose me?") should be open by default
    const whyBtn = screen.getByRole('button', { name: /why choose me\?/i })
    expect(whyBtn).toHaveAttribute('aria-expanded', 'true')

    // Click "What I do?" to open it — use the button specifically
    const whatBtn = screen.getByRole('button', { name: /what i do\?/i })
    await user.click(whatBtn)
    expect(whatBtn).toHaveAttribute('aria-expanded', 'true')
    expect(whyBtn).toHaveAttribute('aria-expanded', 'false')

    // Click "My Specialties"
    const specialtyBtn = screen.getByRole('button', { name: /my specialties/i })
    await user.click(specialtyBtn)
    expect(specialtyBtn).toHaveAttribute('aria-expanded', 'true')
    expect(whatBtn).toHaveAttribute('aria-expanded', 'false')

    // Click "My Specialties" again to close it (covers the close branch)
    await user.click(specialtyBtn)
    expect(specialtyBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('mobile sidebar toggle works', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })
})
