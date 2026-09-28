import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Supper — Restaurant Template', () => {
  describe('Page shell', () => {
    it('renders the min-h-screen wrapper', () => {
      const { container } = render(<App />)
      const page = container.firstElementChild as HTMLElement
      expect(page.className).toContain('min-h-screen')
    })

    it('renders all major sections', () => {
      render(<App />)
      expect(screen.getByText('Welcome to Supper')).toBeInTheDocument()
      expect(screen.getByText('Find your best food')).toBeInTheDocument()
      expect(screen.getByText('The Restaurant')).toBeInTheDocument()
      expect(screen.getByText('Meet The Chefs')).toBeInTheDocument()
      expect(screen.getAllByText('Menu').length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText('Reservation')).toBeInTheDocument()
      expect(screen.getByText('Customer Reviews')).toBeInTheDocument()
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })
  })

  describe('Navbar', () => {
    it('renders the logo letter S', () => {
      render(<App />)
      const logo = screen.getByRole('link', { name: 'S' })
      expect(logo).toBeInTheDocument()
    })

    it('renders navigation links', () => {
      render(<App />)
      const homeLinks = screen.getAllByRole('link', { name: 'Home' })
      expect(homeLinks.length).toBeGreaterThanOrEqual(1)
      expect(homeLinks[0]).toHaveAttribute('href', '#home')
    })

    it('starts with transparent background', () => {
      render(<App />)
      const nav = screen.getByRole('navigation')
      expect(nav.className).toContain('bg-transparent')
    })

    it('has a mobile menu toggle button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    })

    it('opens mobile menu on toggle click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /open menu/i }))
      expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    })

    it('closes mobile menu on second toggle click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /open menu/i }))
      await user.click(screen.getByRole('button', { name: /close menu/i }))
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    })

    it('closes mobile menu when a link is clicked', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /open menu/i }))
      const homeLinks = screen.getAllByRole('link', { name: 'Home' })
      await user.click(homeLinks[homeLinks.length - 1]!)
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    })

    it('adds scrolled class on scroll', () => {
      render(<App />)
      const nav = screen.getByRole('navigation')
      expect(nav.className).toContain('bg-transparent')
      // Simulate scroll
      act(() => {
        Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
        window.dispatchEvent(new Event('scroll'))
      })
      expect(nav.className).toContain('bg-charcoal')
    })
  })

  describe('Hero', () => {
    it('renders the welcome heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Supper')
    })

    it('renders the Reserve A Table CTA', () => {
      render(<App />)
      const ctas = screen.getAllByRole('link', { name: /reserve a table/i })
      expect(ctas.length).toBeGreaterThanOrEqual(1)
      expect(ctas[0]).toHaveAttribute('href', '#reservation')
    })
  })

  describe('Features', () => {
    it('renders the section heading', () => {
      render(<App />)
      expect(screen.getByText('Find your best food')).toBeInTheDocument()
    })

    it('shows 3 food cards', () => {
      render(<App />)
      expect(screen.getByText('Beef Empanadas')).toBeInTheDocument()
      expect(screen.getByText('Buttermilk Chicken Jibaritos')).toBeInTheDocument()
      expect(screen.getByText('Chicken Chimichurri Croquettes')).toBeInTheDocument()
    })

    it('renders Learn More links for each food card', () => {
      render(<App />)
      const learnMoreLinks = screen.getAllByText('Learn More')
      expect(learnMoreLinks).toHaveLength(3)
    })

    it('renders category labels', () => {
      render(<App />)
      expect(screen.getByText('Vegies')).toBeInTheDocument()
    })
  })

  describe('About', () => {
    it('renders The Restaurant heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: 'The Restaurant' })).toBeInTheDocument()
    })

    it('renders descriptive paragraphs', () => {
      render(<App />)
      const farFar = screen.getAllByText(/Far far away, behind the word mountains/)
      expect(farFar.length).toBeGreaterThanOrEqual(1)
      expect(
        screen.getByText(/It is a paradisematic country, in which roasted parts/),
      ).toBeInTheDocument()
    })
  })

  describe('Chefs', () => {
    it('renders the section heading', () => {
      render(<App />)
      expect(screen.getByText('Meet The Chefs')).toBeInTheDocument()
    })

    it('shows 2 chef profiles', () => {
      render(<App />)
      expect(screen.getByText('Daniel Graham')).toBeInTheDocument()
      expect(screen.getByText('Nick Browning')).toBeInTheDocument()
    })

    it('shows chef titles', () => {
      render(<App />)
      const titles = screen.getAllByText('Master Chef')
      expect(titles).toHaveLength(2)
    })
  })

  describe('Menu', () => {
    it('renders menu items', () => {
      render(<App />)
      expect(screen.getByText('Warm Spinach Dip & Chips')).toBeInTheDocument()
      expect(screen.getByText('Key West Machos')).toBeInTheDocument()
      expect(screen.getByText('Crispy Onion Rings')).toBeInTheDocument()
      expect(screen.getByText('Lobster & Shrimp Quesadilla')).toBeInTheDocument()
    })

    it('shows 8 menu items total', () => {
      render(<App />)
      const items = screen.getAllByText(
        /Warm Spinach Dip|Key West Machos|Crispy Onion Rings|Lobster.*Shrimp Quesadilla|Jumbo Lump Crab|Jamaican Chicken|Bahamian Seafood|Grilled Chicken/,
      )
      expect(items).toHaveLength(8)
    })
  })

  describe('Reservation', () => {
    it('renders the Reservation heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: 'Reservation' })).toBeInTheDocument()
    })

    it('renders the reservation form', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: /reservation form/i })).toBeInTheDocument()
    })

    it('has Name, Email, Phone fields', () => {
      render(<App />)
      // Both reservation and contact forms have these fields
      expect(screen.getAllByLabelText('Name').length).toBeGreaterThanOrEqual(2)
      expect(screen.getAllByLabelText('Email').length).toBeGreaterThanOrEqual(2)
      expect(screen.getAllByLabelText('Phone').length).toBeGreaterThanOrEqual(2)
    })

    it('has persons dropdown', () => {
      render(<App />)
      expect(screen.getByLabelText('Number of Persons')).toBeInTheDocument()
    })

    it('has Date and Time fields', () => {
      render(<App />)
      expect(screen.getByLabelText('Date')).toBeInTheDocument()
      expect(screen.getByLabelText('Time')).toBeInTheDocument()
    })

    it('has Message textarea', () => {
      render(<App />)
      expect(screen.getAllByLabelText('Message').length).toBeGreaterThanOrEqual(1)
    })

    it('has a Reserve Now submit button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /reserve now/i })).toBeInTheDocument()
    })

    it('prevents default form submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /reserve now/i }))
      expect(screen.getByRole('heading', { name: 'Reservation' })).toBeInTheDocument()
    })
  })

  describe('Testimonials', () => {
    it('renders the Customer Reviews heading', () => {
      render(<App />)
      expect(screen.getByText('Customer Reviews')).toBeInTheDocument()
    })

    it('shows the first review by default', () => {
      render(<App />)
      expect(
        screen.getByText(
          /A small river named Duden flows by their place and supplies it with the necessary regelialia\. It is a paradisematic country\./,
        ),
      ).toBeInTheDocument()
      expect(screen.getByText('Maxim Smith')).toBeInTheDocument()
    })

    it('navigates to next review', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next review/i }))
      expect(screen.getByText('Geert Green')).toBeInTheDocument()
    })

    it('navigates to previous review', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next review/i }))
      await user.click(screen.getByRole('button', { name: /previous review/i }))
      expect(screen.getByText('Maxim Smith')).toBeInTheDocument()
    })

    it('wraps around from last to first review', async () => {
      const user = userEvent.setup()
      render(<App />)
      // Navigate forward 4 times (4 reviews) to wrap back to first
      for (let i = 0; i < 4; i++) {
        await user.click(screen.getByRole('button', { name: /next review/i }))
      }
      expect(screen.getByText('Maxim Smith')).toBeInTheDocument()
    })

    it('wraps around from first to last review on prev', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /previous review/i }))
      // Should now show last review (Geert Green at index 3)
      const geertElements = screen.getAllByText('Geert Green')
      expect(geertElements.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Contact', () => {
    it('renders the Get In Touch heading', () => {
      render(<App />)
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })

    it('renders the contact form', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: /contact form/i })).toBeInTheDocument()
    })

    it('has a Send Message submit button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })

    it('prevents default contact form submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /send message/i }))
      // Form should still be visible (not navigated away)
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })
  })

  describe('Footer', () => {
    it('renders the About Supper heading', () => {
      render(<App />)
      expect(screen.getByText('About Supper')).toBeInTheDocument()
    })

    it('renders service hours', () => {
      render(<App />)
      expect(screen.getByText('Lunch Service')).toBeInTheDocument()
      expect(screen.getByText('Dinner Service')).toBeInTheDocument()
      expect(screen.getByText(/Booking from 12:00pm/)).toBeInTheDocument()
      expect(screen.getByText(/Booking from 6:00pm/)).toBeInTheDocument()
    })

    it('renders social media links', () => {
      render(<App />)
      expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    })

    it('renders newsletter form', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument()
    })

    it('links to Component Dock', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('shows Made with Component Dock text', () => {
      render(<App />)
      expect(screen.getByText(/Made with/)).toBeInTheDocument()
    })

    it('newsletter form prevents default submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      const emailInput = screen.getByPlaceholderText('Enter Email')
      await user.type(emailInput, 'test@example.com')
      // The form has a submit button (envelope icon)
      const submitBtn = emailInput.closest('form')!.querySelector('button[type="submit"]')!
      await user.click(submitBtn)
      // Form should still be visible
      expect(screen.getByText('Newsletter')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(<App />)
      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1).toBeInTheDocument()
      const h2s = screen.getAllByRole('heading', { level: 2 })
      expect(h2s.length).toBeGreaterThanOrEqual(6)
    })

    it('has aria-labels on icon-only buttons', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /previous review/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next review/i })).toBeInTheDocument()
    })

    it('has aria-labels on social media links', () => {
      render(<App />)
      expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute('aria-label')
      expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute('aria-label')
      expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('aria-label')
    })
  })
})
