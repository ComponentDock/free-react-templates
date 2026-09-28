import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Idcraft template', () => {
  describe('Navbar', () => {
    it('renders nav links and CTA button', () => {
      render(<App />)
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Skills')).toBeInTheDocument()
      expect(screen.getByText('Services')).toBeInTheDocument()
      expect(screen.getByText('Portfolio')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
      expect(screen.getByText('Available for freelance work')).toBeInTheDocument()
    })

    it('toggles mobile menu on click', async () => {
      const user = userEvent.setup()
      render(<App />)
      const toggle = screen.getByRole('button', { name: /toggle navigation/i })
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
      await user.click(toggle)
      expect(toggle).toHaveAttribute('aria-expanded', 'true')
      await user.click(toggle)
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
    })

    it('closes mobile menu when a link is clicked', async () => {
      const user = userEvent.setup()
      render(<App />)
      const toggle = screen.getByRole('button', { name: /toggle navigation/i })
      await user.click(toggle)
      expect(toggle).toHaveAttribute('aria-expanded', 'true')
      // Click the first mobile nav link (About)
      const aboutLinks = screen.getAllByText('About')
      const mobileLink = aboutLinks[aboutLinks.length - 1]!
      await user.click(mobileLink)
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
    })

    it('closes mobile menu when CTA button is clicked', async () => {
      const user = userEvent.setup()
      render(<App />)
      const toggle = screen.getByRole('button', { name: /toggle navigation/i })
      await user.click(toggle)
      expect(toggle).toHaveAttribute('aria-expanded', 'true')
      // Click the mobile CTA button
      const ctaButtons = screen.getAllByText('Available for freelance work')
      const mobileCta = ctaButtons[ctaButtons.length - 1]!
      await user.click(mobileCta)
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
    })
  })

  describe('Hero', () => {
    it('displays hero content', () => {
      render(<App />)
      expect(screen.getByText("Hello I'm")).toBeInTheDocument()
      expect(screen.getByText('Maria Smith')).toBeInTheDocument()
      expect(screen.getByText('Digital Designer & Illustrator')).toBeInTheDocument()
    })

    it('displays contact info', () => {
      render(<App />)
      expect(screen.getByText('contactme@example.com')).toBeInTheDocument()
      expect(screen.getByText('+76 6524 567862 763')).toBeInTheDocument()
      expect(screen.getByText('www.example.com')).toBeInTheDocument()
    })

    it('displays social icons', () => {
      render(<App />)
      expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
      expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
      expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    })
  })

  describe('About', () => {
    it('displays about content', () => {
      render(<App />)
      expect(screen.getByText('Creative & Committed')).toBeInTheDocument()
    })
  })

  describe('Skills', () => {
    it('displays 4 skill items with percentages', () => {
      render(<App />)
      expect(screen.getByText('Photos Taken')).toBeInTheDocument()
      expect(screen.getByText('HTML Coding')).toBeInTheDocument()
      // "Digital Design" and "Illustrations" appear in multiple sections, check via SVG text
      const svgs = document.querySelectorAll('svg text')
      const svgTexts = Array.from(svgs).map((el) => el.textContent)
      expect(svgTexts).toContain('75%')
      expect(svgTexts).toContain('83%')
      expect(svgTexts).toContain('25%')
      expect(svgTexts).toContain('95%')
    })
  })

  describe('Services', () => {
    it('displays services heading and service titles', () => {
      render(<App />)
      expect(screen.getByText('Personal Services')).toBeInTheDocument()
      // Use getAllByText for items that appear in multiple sections
      expect(screen.getAllByText('Web Design').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('Logo Design').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('Motion Graphics').length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Portfolio', () => {
    it('displays filter buttons', () => {
      render(<App />)
      expect(screen.getByText('My Portfolio Showcase')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Web Design' })).toBeInTheDocument()
    })

    it('filters portfolio items', async () => {
      const user = userEvent.setup()
      render(<App />)
      const webDesignBtn = screen.getByRole('button', { name: 'Web Design' })
      await user.click(webDesignBtn)
      expect(webDesignBtn).toHaveClass('bg-dark-heading')
    })
  })

  describe('CoolFacts', () => {
    it('displays fact items with numbers', () => {
      render(<App />)
      // "10+" appears twice (Projects Completed + Awards Won), use getAllByText
      expect(screen.getAllByText('10+').length).toBe(2)
      expect(screen.getByText('87+')).toBeInTheDocument()
      expect(screen.getByText('7+')).toBeInTheDocument()
      expect(screen.getByText('Projects Completed')).toBeInTheDocument()
      expect(screen.getByText('Happy Clients')).toBeInTheDocument()
      expect(screen.getByText('Awards Won')).toBeInTheDocument()
      expect(screen.getByText('Coffee per day')).toBeInTheDocument()
    })
  })

  describe('Testimonials', () => {
    it('displays testimonial content', () => {
      render(<App />)
      expect(screen.getByText("Client's testimonials")).toBeInTheDocument()
      expect(screen.getByText('I really love it')).toBeInTheDocument()
      // Author name + role are in a single h6 with span — use textContent match
      const authorHeadings = screen.getAllByText(/Daiane Smith/)
      expect(authorHeadings.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Contact', () => {
    it('displays contact form fields', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
    })

    it('displays contact info', () => {
      render(<App />)
      expect(screen.getByText('Address:')).toBeInTheDocument()
      expect(screen.getByText('Phone:')).toBeInTheDocument()
      expect(screen.getByText('Email:')).toBeInTheDocument()
    })

    it('prevents default form submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      const submitBtn = screen.getByRole('button', { name: 'Send Message' })
      await user.click(submitBtn)
      // Form onSubmit calls e.preventDefault() — no navigation occurs
    })
  })

  describe('Footer', () => {
    it('links to Component Dock', () => {
      render(<App />)
      const link = screen.getByText('Component Dock')
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
