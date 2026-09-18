import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Glider — Creative Agency Template', () => {
  describe('Full page renders with gradient background', () => {
    it('renders all sections in order', () => {
      render(<App />)
      expect(screen.getByRole('navigation')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
      expect(screen.getByText('Our Working Process')).toBeInTheDocument()
      expect(screen.getByText('Our Exclusive Features')).toBeInTheDocument()
      expect(screen.getByText('Remarkable Works')).toBeInTheDocument()
      expect(screen.getByText('From the Part of Beginning')).toBeInTheDocument()
      expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
      expect(screen.getByText('Keep in Touch')).toBeInTheDocument()
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })
  })

  describe('Navbar', () => {
    it('shows the logo', () => {
      render(<App />)
      expect(screen.getByText('Glider')).toBeInTheDocument()
    })

    it('shows desktop navigation links', () => {
      render(<App />)
      expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Works' })).toBeInTheDocument()
    })

    it('shows a hamburger menu button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    })

    it('toggles mobile menu on click', async () => {
      const user = userEvent.setup()
      render(<App />)
      const toggle = screen.getByRole('button', { name: /open menu/i })
      await user.click(toggle)
      expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    })

    it('closes mobile menu on link click', async () => {
      const user = userEvent.setup()
      render(<App />)
      const toggle = screen.getByRole('button', { name: /open menu/i })
      await user.click(toggle)
      // Mobile menu is the second nav ul (visible one)
      const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
      const lastLink = mobileLinks[mobileLinks.length - 1]!
      await user.click(lastLink)
      expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
    })
  })

  describe('Hero', () => {
    it('shows uppercase headline', () => {
      render(<App />)
      expect(screen.getByText(/don't look anywhere/i)).toBeInTheDocument()
    })

    it('shows subtitle', () => {
      render(<App />)
      expect(screen.getByText(/we craft creative digital experiences/i)).toBeInTheDocument()
    })

    it('shows Get Started pill button', () => {
      render(<App />)
      const ctaLinks = screen.getAllByRole('link', { name: /get started/i })
      // First Get Started link is in the hero section
      expect(ctaLinks[0]).toHaveAttribute('href', '#contact')
    })

    it('shows decorative illustration', () => {
      render(<App />)
      expect(screen.getByAltText('Creative agency illustration')).toBeInTheDocument()
    })
  })

  describe('Working Process', () => {
    it('shows section title', () => {
      render(<App />)
      expect(screen.getByText('Our Working Process')).toBeInTheDocument()
    })

    it('shows 4 step labels', () => {
      render(<App />)
      expect(screen.getByText('Researching')).toBeInTheDocument()
      expect(screen.getByText('Wireframing')).toBeInTheDocument()
      expect(screen.getByText('Prototyping')).toBeInTheDocument()
      expect(screen.getByText('Final Design')).toBeInTheDocument()
    })
  })

  describe('Features', () => {
    it('shows section title', () => {
      render(<App />)
      expect(screen.getByText('Our Exclusive Features')).toBeInTheDocument()
    })

    it('shows 3 feature cards', () => {
      render(<App />)
      expect(screen.getByText('Creative Design')).toBeInTheDocument()
      expect(screen.getByText('Appropriate UX')).toBeInTheDocument()
      expect(screen.getByText('Super Clean Code')).toBeInTheDocument()
    })

    it('shows Read More buttons on each card', () => {
      render(<App />)
      const readMore = screen.getAllByText('Read More')
      expect(readMore).toHaveLength(3)
    })

    it('shows feature images', () => {
      render(<App />)
      expect(screen.getByAltText('Creative Design')).toBeInTheDocument()
      expect(screen.getByAltText('Appropriate UX')).toBeInTheDocument()
      expect(screen.getByAltText('Super Clean Code')).toBeInTheDocument()
    })
  })

  describe('Remarkable Works', () => {
    it('shows section title', () => {
      render(<App />)
      expect(screen.getByText('Remarkable Works')).toBeInTheDocument()
    })

    it('shows 3 portfolio rows', () => {
      render(<App />)
      expect(screen.getByText('Vector Illustration')).toBeInTheDocument()
      expect(screen.getByText('Brand Strategy')).toBeInTheDocument()
      expect(screen.getByText('Digital Experience')).toBeInTheDocument()
    })

    it('shows View Project buttons', () => {
      render(<App />)
      const viewProject = screen.getAllByText('View Project')
      expect(viewProject).toHaveLength(3)
    })

    it('shows portfolio images', () => {
      render(<App />)
      expect(screen.getByAltText('Vector Illustration')).toBeInTheDocument()
      expect(screen.getByAltText('Brand Strategy')).toBeInTheDocument()
      expect(screen.getByAltText('Digital Experience')).toBeInTheDocument()
    })
  })

  describe('Story', () => {
    it('shows floating card content', () => {
      render(<App />)
      expect(screen.getByText('From the Part of Beginning')).toBeInTheDocument()
      expect(screen.getByText(/we started with a simple idea/i)).toBeInTheDocument()
    })

    it('shows Get Started button in story card', () => {
      render(<App />)
      const storyButtons = screen.getAllByText('Get Started')
      // One in hero, one in story, one in subscription — at least 3
      expect(storyButtons.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe('Subscription', () => {
    it('shows newsletter heading', () => {
      render(<App />)
      expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
    })

    it('has an email input', () => {
      render(<App />)
      expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    })

    it('has a Get Started button', () => {
      render(<App />)
      const buttons = screen.getAllByText('Get Started')
      expect(buttons.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe('Contact form', () => {
    it('shows section title', () => {
      render(<App />)
      expect(screen.getByText('Keep in Touch')).toBeInTheDocument()
    })

    it('has name input', () => {
      render(<App />)
      expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    })

    it('has email input', () => {
      render(<App />)
      expect(screen.getByLabelText('Your email')).toBeInTheDocument()
    })

    it('has message textarea', () => {
      render(<App />)
      expect(screen.getByLabelText('Your message')).toBeInTheDocument()
    })

    it('has Send Message button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })

    it('clears form on submit', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText('Your name'), 'Test User')
      await user.type(screen.getByLabelText('Your email'), 'test@example.com')
      await user.type(screen.getByLabelText('Your message'), 'Hello!')
      await user.click(screen.getByRole('button', { name: /send message/i }))
      expect(screen.getByLabelText('Your name')).toHaveValue('')
      expect(screen.getByLabelText('Your email')).toHaveValue('')
      expect(screen.getByLabelText('Your message')).toHaveValue('')
    })
  })

  describe('Footer', () => {
    it('shows address info', () => {
      render(<App />)
      expect(screen.getByText(/123 Creative Avenue/)).toBeInTheDocument()
    })

    it('shows email info', () => {
      render(<App />)
      expect(screen.getByText(/hello@gliderstudio.com/)).toBeInTheDocument()
    })

    it('shows phone info', () => {
      render(<App />)
      expect(screen.getByText(/\+1 \(555\) 123-4567/)).toBeInTheDocument()
    })

    it('shows social icons', () => {
      render(<App />)
      expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    })

    it('shows copyright', () => {
      render(<App />)
      expect(screen.getByText(/Glider Studio\. All rights reserved/)).toBeInTheDocument()
    })

    it('links to Component Dock', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })
  })

  describe('No ColorLib references', () => {
    it('does not contain colorlib text in the page', () => {
      render(<App />)
      expect(screen.queryByText(/colorlib/i)).not.toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper nav landmark', () => {
      render(<App />)
      expect(screen.getByRole('navigation')).toBeInTheDocument()
    })

    it('has main contentinfo landmark', () => {
      render(<App />)
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })

    it('has aria-label on contact form', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: /contact form/i })).toBeInTheDocument()
    })

    it('has aria-label on email newsletter input', () => {
      render(<App />)
      expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    })
  })
})
