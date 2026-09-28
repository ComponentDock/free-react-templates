import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Zing — Restaurant Template', () => {
  describe('Page shell', () => {
    it('renders the min-h-screen wrapper', () => {
      const { container } = render(<App />)
      const page = container.firstElementChild as HTMLElement
      expect(page.className).toContain('min-h-screen')
    })

    it('renders all major sections', () => {
      render(<App />)
      expect(screen.getByText('Cooking Since Best Quality')).toBeInTheDocument()
      expect(screen.getByText('Welcome to Zing')).toBeInTheDocument()
      expect(screen.getByText('Private Dinners & Happy Hours')).toBeInTheDocument()
      expect(screen.getAllByText('Our Menu').length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText('Happy Customer')).toBeInTheDocument()
      expect(screen.getByText('Our Master Chef')).toBeInTheDocument()
      expect(screen.getByText('Perfect Ingredients')).toBeInTheDocument()
      expect(screen.getByText('Recent Blog')).toBeInTheDocument()
      expect(screen.getByText(/We Make Delicious/)).toBeInTheDocument()
    })
  })

  describe('Navbar', () => {
    it('renders the logo text Zing', () => {
      render(<App />)
      const logo = screen.getByRole('link', { name: 'Zing' })
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('href', '#home')
    })

    it('renders navigation links', () => {
      render(<App />)
      const homeLinks = screen.getAllByRole('link', { name: 'Home' })
      expect(homeLinks.length).toBeGreaterThanOrEqual(1)
      expect(homeLinks[0]).toHaveAttribute('href', '#home')
      expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByRole('link', { name: 'Menu' }).length).toBeGreaterThanOrEqual(1)
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
      const aboutLinks = screen.getAllByRole('link', { name: 'About' })
      await user.click(aboutLinks[aboutLinks.length - 1]!)
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    })

    it('adds scrolled class on scroll', () => {
      render(<App />)
      const nav = screen.getByRole('navigation')
      expect(nav.className).toContain('bg-transparent')
      act(() => {
        Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
        window.dispatchEvent(new Event('scroll'))
      })
      expect(nav.className).toContain('bg-brand-dark')
    })
  })

  describe('Hero', () => {
    it('renders the combined heading', () => {
      render(<App />)
      expect(screen.getByText('Cooking Since Best Quality')).toBeInTheDocument()
    })

    it('renders the Book Your Table CTA', () => {
      render(<App />)
      const ctas = screen.getAllByRole('link', { name: /book your table/i })
      expect(ctas.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('About', () => {
    it('renders the Welcome to Zing heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: 'Welcome to Zing' })).toBeInTheDocument()
    })

    it('renders the reservation form', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: /reservation form/i })).toBeInTheDocument()
    })

    it('has Name, Phone, Email fields', () => {
      render(<App />)
      expect(screen.getByLabelText('Name')).toBeInTheDocument()
      expect(screen.getByLabelText('Phone')).toBeInTheDocument()
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
    })

    it('has a Book Now submit button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /book now/i })).toBeInTheDocument()
    })

    it('prevents default form submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /book now/i }))
      expect(screen.getByRole('heading', { name: 'Welcome to Zing' })).toBeInTheDocument()
    })
  })

  describe('CtaBanner', () => {
    it('renders the private dinners heading', () => {
      render(<App />)
      expect(screen.getByText('Private Dinners & Happy Hours')).toBeInTheDocument()
    })

    it('renders the Reservation CTA link', () => {
      render(<App />)
      const links = screen.getAllByRole('link', { name: /reservation/i })
      expect(links.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Menu', () => {
    it('renders menu tabs', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: 'Breakfast' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Lunch' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Dinner' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Desserts' })).toBeInTheDocument()
    })

    it('shows breakfast items by default', () => {
      render(<App />)
      expect(screen.getByText('Beef Roast Source')).toBeInTheDocument()
      expect(screen.getByText('Butterfly Brioche')).toBeInTheDocument()
    })

    it('switches to lunch tab on click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: 'Lunch' }))
      expect(screen.getByText('Grilled Chicken Salad')).toBeInTheDocument()
      expect(screen.getByText('Pasta Primavera')).toBeInTheDocument()
    })

    it('switches to dinner tab on click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: 'Dinner' }))
      expect(screen.getByText('Filet Mignon')).toBeInTheDocument()
      expect(screen.getByText('Lobster Thermidor')).toBeInTheDocument()
    })

    it('switches to desserts tab on click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: 'Desserts' }))
      expect(screen.getByText('Chocolate Lava Cake')).toBeInTheDocument()
      expect(screen.getByText('Tiramisu')).toBeInTheDocument()
    })
  })

  describe('Testimonials', () => {
    it('renders the Happy Customer heading', () => {
      render(<App />)
      expect(screen.getByText('Happy Customer')).toBeInTheDocument()
    })

    it('shows the first review by default', () => {
      render(<App />)
      const johnElements = screen.getAllByText('John Gustavo')
      expect(johnElements.length).toBeGreaterThanOrEqual(1)
    })

    it('navigates to next review', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next review/i }))
      const michelleElements = screen.getAllByText('Michelle Fraulen')
      expect(michelleElements.length).toBeGreaterThanOrEqual(1)
    })

    it('navigates to previous review', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next review/i }))
      await user.click(screen.getByRole('button', { name: /previous review/i }))
      const johnElements = screen.getAllByText('John Gustavo')
      expect(johnElements.length).toBeGreaterThanOrEqual(1)
    })

    it('wraps around from first to last review on prev', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /previous review/i }))
      const sarahElements = screen.getAllByText('Sarah Mitchell')
      expect(sarahElements.length).toBeGreaterThanOrEqual(1)
    })

    it('wraps around from last to first review', async () => {
      const user = userEvent.setup()
      render(<App />)
      for (let i = 0; i < 3; i++) {
        await user.click(screen.getByRole('button', { name: /next review/i }))
      }
      const johnElements = screen.getAllByText('John Gustavo')
      expect(johnElements.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Chefs', () => {
    it('renders the Our Master Chef heading', () => {
      render(<App />)
      expect(screen.getByText('Our Master Chef')).toBeInTheDocument()
    })

    it('shows chef profiles', () => {
      render(<App />)
      const johnElements = screen.getAllByText('John Gustavo')
      expect(johnElements.length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText('Michelle Fraulen')).toBeInTheDocument()
      expect(screen.getByText('Daniel Graham')).toBeInTheDocument()
    })

    it('shows chef titles', () => {
      render(<App />)
      const titles = screen.getAllByText('Master Chef')
      expect(titles.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe('Ingredients', () => {
    it('renders the Perfect Ingredients heading', () => {
      render(<App />)
      expect(screen.getByText('Perfect Ingredients')).toBeInTheDocument()
    })

    it('shows feature list items', () => {
      render(<App />)
      expect(screen.getByText('Fresh, locally sourced ingredients')).toBeInTheDocument()
      expect(screen.getByText('Prepared by award-winning chefs')).toBeInTheDocument()
    })

    it('has a Learn more link', () => {
      render(<App />)
      expect(screen.getByText('Learn more')).toBeInTheDocument()
    })
  })

  describe('Blog', () => {
    it('renders the Recent Blog heading', () => {
      render(<App />)
      expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    })

    it('shows 3 blog cards with Read more links', () => {
      render(<App />)
      const readMoreLinks = screen.getAllByText('Read more')
      expect(readMoreLinks).toHaveLength(3)
    })
  })

  describe('Newsletter', () => {
    it('renders the newsletter heading', () => {
      render(<App />)
      expect(screen.getByText(/We Make Delicious/)).toBeInTheDocument()
    })

    it('renders the newsletter form', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Your Email Address')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
    })

    it('prevents default newsletter submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      const emailInput = screen.getByPlaceholderText('Your Email Address')
      await user.type(emailInput, 'test@example.com')
      await user.click(screen.getByRole('button', { name: /subscribe/i }))
      expect(screen.getByText(/We Make Delicious/)).toBeInTheDocument()
    })
  })

  describe('Footer', () => {
    it('renders the About Zing heading', () => {
      render(<App />)
      expect(screen.getByText('About Zing')).toBeInTheDocument()
    })

    it('renders service hours', () => {
      render(<App />)
      expect(screen.getByText('Open Hours')).toBeInTheDocument()
      expect(screen.getByText('Monday')).toBeInTheDocument()
      const hours = screen.getAllByText('9:00 - 24:00')
      expect(hours.length).toBeGreaterThanOrEqual(1)
    })

    it('renders newsletter form in footer', () => {
      render(<App />)
      const footerEmailInputs = screen.getAllByPlaceholderText('Enter Email')
      expect(footerEmailInputs.length).toBeGreaterThanOrEqual(1)
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

    it('footer newsletter form prevents default submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      const emailInputs = screen.getAllByPlaceholderText('Enter Email')
      const footerEmail = emailInputs[emailInputs.length - 1]!
      await user.type(footerEmail, 'test@example.com')
      const submitBtn = footerEmail.closest('form')!.querySelector('button[type="submit"]')!
      await user.click(submitBtn)
      expect(screen.getByText('Newsletter')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(<App />)
      const h1s = screen.getAllByRole('heading', { level: 1 })
      expect(h1s.length).toBeGreaterThanOrEqual(1)
      const h2s = screen.getAllByRole('heading', { level: 2 })
      expect(h2s.length).toBeGreaterThanOrEqual(6)
    })

    it('has aria-labels on icon-only buttons', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /previous review/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next review/i })).toBeInTheDocument()
    })
  })
})
