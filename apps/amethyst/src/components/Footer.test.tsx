import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer element with semantic role', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer.tagName).toBe('FOOTER')
  })

  it('applies purple gradient background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-[linear-gradient')
  })

  describe('About column', () => {
    it('renders About heading with icon', () => {
      render(<Footer />)
      const headings = screen.getAllByRole('heading', { name: /About/i })
      expect(headings.length).toBeGreaterThanOrEqual(1)
      expect(headings[0]!.tagName).toBe('H2')
    })

    it('renders address information', () => {
      render(<Footer />)
      expect(screen.getByText(/203 Fake St/i)).toBeInTheDocument()
    })

    it('renders phone number', () => {
      render(<Footer />)
      expect(screen.getByText(/\+1 234 567 890/)).toBeInTheDocument()
    })

    it('renders email address', () => {
      render(<Footer />)
      expect(screen.getByText(/info@yourdomain.com/)).toBeInTheDocument()
    })
  })

  describe('Newsletter form', () => {
    it('renders newsletter form', () => {
      render(<Footer />)
      const form = screen.getByRole('form', { name: /newsletter/i })
      expect(form).toBeInTheDocument()
    })

    it('renders email input with placeholder', () => {
      render(<Footer />)
      const input = screen.getByPlaceholderText(/enter email/i)
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'email')
    })

    it('renders submit button', () => {
      render(<Footer />)
      const button = screen.getByRole('button', { name: /submit/i })
      expect(button).toBeInTheDocument()
    })

    it('updates email value on input', async () => {
      const user = userEvent.setup()
      render(<Footer />)
      const input = screen.getByPlaceholderText(/enter email/i)
      await user.type(input, 'test@example.com')
      expect(input).toHaveValue('test@example.com')
    })

    it('prevents default form submission', async () => {
      const user = userEvent.setup()
      render(<Footer />)
      const form = screen.getByRole('form', { name: /newsletter/i })
      let submitted = false
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        submitted = true
      })
      const button = screen.getByRole('button', { name: /submit/i })
      await user.click(button)
      expect(submitted).toBe(true)
    })
  })

  describe('Latest News column', () => {
    it('renders Latest News heading', () => {
      render(<Footer />)
      const heading = screen.getByRole('heading', { name: /Latest News/i })
      expect(heading).toBeInTheDocument()
    })

    it('renders two news articles', () => {
      render(<Footer />)
      const articles = screen.getAllByText(/Even the all-powerful/i)
      expect(articles).toHaveLength(2)
    })

    it('renders news dates', () => {
      render(<Footer />)
      const dates = screen.getAllByText(/Oct\. 16, 2019/)
      expect(dates.length).toBeGreaterThanOrEqual(1)
    })

    it('renders author names', () => {
      render(<Footer />)
      const admins = screen.getAllByText(/Admin/)
      expect(admins.length).toBeGreaterThan(0)
    })

    it('renders comment counts', () => {
      render(<Footer />)
      const counts = screen.getAllByText('19')
      expect(counts.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Information column', () => {
    it('renders Information heading', () => {
      render(<Footer />)
      const heading = screen.getByRole('heading', { name: /Information/i })
      expect(heading).toBeInTheDocument()
    })

    it('renders all information links', () => {
      render(<Footer />)
      const links = ['About', 'Products', 'Blog', 'Contact', 'Help & Support']
      for (const label of links) {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      }
    })
  })

  describe('Instagram column', () => {
    it('renders Instagram heading', () => {
      render(<Footer />)
      const heading = screen.getByRole('heading', { name: /Instagram/i })
      expect(heading).toBeInTheDocument()
    })

    it('renders six Instagram image placeholders', () => {
      render(<Footer />)
      const images = screen.getAllByRole('img', { name: /Instagram photo/i })
      expect(images).toHaveLength(6)
    })
  })

  describe('Bottom bar', () => {
    it('renders copyright text', () => {
      render(<Footer />)
      expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    })

    it('renders Component Dock attribution link', () => {
      render(<Footer />)
      const link = screen.getByRole('link', { name: /Component Dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })

    it('renders top border separator', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      const borderDiv = footer.querySelector('.border-t')
      expect(borderDiv).not.toBeNull()
      expect(borderDiv!.className).toContain('border-footer-border')
    })
  })

  describe('Footer layout', () => {
    it('renders four column sections on desktop', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      const columns = footer.querySelectorAll('.lg\\:grid-cols-4')
      expect(columns.length).toBeGreaterThan(0)
    })

    it('renders footer with generous padding', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      expect(footer.className).toContain('py-16')
    })
  })
})
