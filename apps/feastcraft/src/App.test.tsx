import { describe, expect, it } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Feastcraft — Restaurant Template', () => {
  describe('Page shell', () => {
    it('renders the min-h-screen wrapper', () => {
      const { container } = render(<App />)
      const page = container.firstElementChild as HTMLElement
      expect(page.className).toContain('min-h-screen')
    })

    it('renders all major sections', () => {
      render(<App />)
      expect(screen.getByText('Treat Yourself')).toBeInTheDocument()
      expect(screen.getByText('Popular Foods')).toBeInTheDocument()
      expect(screen.getByText('Popular Desserts')).toBeInTheDocument()
      expect(screen.getByText('Satisfied Customers')).toBeInTheDocument()
      expect(screen.getByText('Enjoy Our Events')).toBeInTheDocument()
      expect(screen.getByText('Book A Table Now')).toBeInTheDocument()
    })
  })

  describe('Navbar', () => {
    it('renders the Feastcraft logo with orange dot', () => {
      render(<App />)
      const nav = screen.getByRole('navigation')
      const logo = within(nav).getByRole('link', { name: /feastcraft/i })
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('href', '#home')
    })

    it('renders navigation links', () => {
      render(<App />)
      const nav = screen.getByRole('navigation')
      const homeLinks = within(nav).getAllByRole('link', { name: 'Home' })
      expect(homeLinks.length).toBeGreaterThanOrEqual(1)
      expect(homeLinks[0]).toHaveAttribute('href', '#home')
    })

    it('renders Events, Gallery, About, Contact links in nav', () => {
      render(<App />)
      const nav = screen.getByRole('navigation')
      expect(within(nav).getAllByRole('link', { name: 'Events' }).length).toBeGreaterThanOrEqual(1)
      expect(within(nav).getAllByRole('link', { name: 'Gallery' }).length).toBeGreaterThanOrEqual(1)
      expect(within(nav).getAllByRole('link', { name: 'About' }).length).toBeGreaterThanOrEqual(1)
      expect(within(nav).getAllByRole('link', { name: 'Contact' }).length).toBeGreaterThanOrEqual(1)
    })

    it('renders Book a table button in nav', () => {
      render(<App />)
      const nav = screen.getByRole('navigation')
      const bookLinks = within(nav).getAllByRole('link', { name: /book a table/i })
      expect(bookLinks.length).toBeGreaterThanOrEqual(1)
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
      const nav = screen.getByRole('navigation')
      const mobileLinks = within(nav).getAllByRole('link', { name: 'Home' })
      await user.click(mobileLinks[mobileLinks.length - 1]!)
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
      expect(nav.className).toContain('bg-heading/95')
    })

    it('renders dropdown menu items in mobile view', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /open menu/i }))
      const elementsLinks = screen.getAllByText('Elements')
      expect(elementsLinks.length).toBeGreaterThanOrEqual(1)
      const menuTwoLinks = screen.getAllByText('Menu Two')
      expect(menuTwoLinks.length).toBeGreaterThanOrEqual(1)
      const menuThreeLinks = screen.getAllByText('Menu Three')
      expect(menuThreeLinks.length).toBeGreaterThanOrEqual(1)
    })

    it('closes mobile menu when dropdown link is clicked', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /open menu/i }))
      const elementsLinks = screen.getAllByText('Elements')
      await user.click(elementsLinks[elementsLinks.length - 1]!)
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    })

    it('closes mobile menu when Book a table is clicked', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /open menu/i }))
      const nav = screen.getByRole('navigation')
      const bookLinks = within(nav).getAllByRole('link', { name: /book a table/i })
      await user.click(bookLinks[bookLinks.length - 1]!)
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    })
  })

  describe('Hero', () => {
    it('renders the Treat Yourself heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Treat Yourself')
    })

    it('renders the Explore now CTA', () => {
      render(<App />)
      const ctas = screen.getAllByRole('link', { name: /explore now/i })
      expect(ctas.length).toBeGreaterThanOrEqual(1)
      expect(ctas[0]).toHaveAttribute('href', '#menu')
    })

    it('renders social media icons in hero area', () => {
      render(<App />)
      expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument()
      const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i })
      expect(linkedinLinks.length).toBeGreaterThanOrEqual(1)
      const pinterestLinks = screen.getAllByRole('link', { name: /pinterest/i })
      expect(pinterestLinks.length).toBeGreaterThanOrEqual(1)
    })

    it('renders the subtitle', () => {
      render(<App />)
      expect(screen.getByText('Enjoy Your Healthy Delicious Meal')).toBeInTheDocument()
    })
  })

  describe('Popular Foods', () => {
    it('renders the section heading', () => {
      render(<App />)
      expect(screen.getByText('Popular Foods')).toBeInTheDocument()
    })

    it('renders category tabs', () => {
      render(<App />)
      expect(screen.getByText('Breakfast')).toBeInTheDocument()
      expect(screen.getByText('Lunch')).toBeInTheDocument()
      expect(screen.getByText('Dinner')).toBeInTheDocument()
      expect(screen.getByText('Drinks')).toBeInTheDocument()
    })

    it('shows breakfast items by default', () => {
      render(<App />)
      expect(screen.getByText('Pancake Stack')).toBeInTheDocument()
      expect(screen.getByText('$12.99')).toBeInTheDocument()
    })

    it('switches to lunch items on tab click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByText('Lunch'))
      expect(screen.getByText('Grilled Chicken Salad')).toBeInTheDocument()
      expect(screen.getByText('$18.99')).toBeInTheDocument()
    })

    it('switches to dinner items on tab click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByText('Dinner'))
      expect(screen.getByText('Grilled Salmon')).toBeInTheDocument()
    })

    it('switches to drinks items on tab click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByText('Drinks'))
      expect(screen.getByText('Mango Smoothie')).toBeInTheDocument()
    })

    it('shows page indicator', () => {
      render(<App />)
      expect(screen.getByText('1 / 4')).toBeInTheDocument()
    })

    it('updates page indicator on category switch', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByText('Lunch'))
      expect(screen.getByText('2 / 4')).toBeInTheDocument()
    })
  })

  describe('Popular Desserts', () => {
    it('renders the section heading', () => {
      render(<App />)
      expect(screen.getByText('Popular Desserts')).toBeInTheDocument()
    })

    it('shows 4 dessert items', () => {
      render(<App />)
      expect(screen.getByText('Chocolate Cake')).toBeInTheDocument()
      expect(screen.getByText('Tiramisu')).toBeInTheDocument()
      expect(screen.getByText('Cheesecake')).toBeInTheDocument()
      expect(screen.getByText('Panna Cotta')).toBeInTheDocument()
    })

    it('shows prices for desserts', () => {
      render(<App />)
      expect(screen.getByText('$8.99')).toBeInTheDocument()
      expect(screen.getByText('$9.50')).toBeInTheDocument()
      expect(screen.getByText('$8.50')).toBeInTheDocument()
      expect(screen.getByText('$7.99')).toBeInTheDocument()
    })
  })

  describe('Testimonials', () => {
    it('renders the Satisfied Customers heading', () => {
      render(<App />)
      expect(screen.getByText('Satisfied Customers')).toBeInTheDocument()
    })

    it('shows the first testimonial by default', () => {
      render(<App />)
      expect(screen.getByText('Maxim Smith')).toBeInTheDocument()
    })

    it('navigates to next testimonial', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next testimonial/i }))
      expect(screen.getByText('Geert Green')).toBeInTheDocument()
    })

    it('navigates to previous testimonial', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next testimonial/i }))
      await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
      expect(screen.getByText('Maxim Smith')).toBeInTheDocument()
    })

    it('wraps around from last to first', async () => {
      const user = userEvent.setup()
      render(<App />)
      for (let i = 0; i < 3; i++) {
        await user.click(screen.getByRole('button', { name: /next testimonial/i }))
      }
      expect(screen.getByText('Maxim Smith')).toBeInTheDocument()
    })

    it('wraps around from first to last on prev', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
      const dennis = screen.getAllByText('Dennis Roman')
      expect(dennis.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Photo Gallery', () => {
    it('renders the Photo Galleries heading', () => {
      render(<App />)
      expect(screen.getByText('Photo Galleries')).toBeInTheDocument()
    })

    it('renders gallery images', () => {
      render(<App />)
      const images = screen.getAllByRole('img', { name: /restaurant|plated|fresh|dessert/i })
      expect(images.length).toBeGreaterThanOrEqual(4)
    })

    it('renders More Galleries button', () => {
      render(<App />)
      expect(screen.getByText('More Galleries')).toBeInTheDocument()
    })

    it('opens lightbox on gallery image click', async () => {
      const user = userEvent.setup()
      render(<App />)
      const buttons = screen.getAllByRole('button', {
        name: /view restaurant|plated|fresh|dessert/i,
      })
      await user.click(buttons[0]!)
      expect(screen.getByRole('dialog', { name: /gallery lightbox/i })).toBeInTheDocument()
    })

    it('closes lightbox on close button click', async () => {
      const user = userEvent.setup()
      render(<App />)
      const buttons = screen.getAllByRole('button', {
        name: /view restaurant|plated|fresh|dessert/i,
      })
      await user.click(buttons[0]!)
      await user.click(screen.getByRole('button', { name: /close lightbox/i }))
      expect(screen.queryByRole('dialog', { name: /gallery lightbox/i })).not.toBeInTheDocument()
    })

    it('closes lightbox on backdrop click', async () => {
      const user = userEvent.setup()
      render(<App />)
      const buttons = screen.getAllByRole('button', {
        name: /view restaurant|plated|fresh|dessert/i,
      })
      await user.click(buttons[0]!)
      const dialog = screen.getByRole('dialog', { name: /gallery lightbox/i })
      await user.click(dialog)
      expect(screen.queryByRole('dialog', { name: /gallery lightbox/i })).not.toBeInTheDocument()
    })
  })

  describe('Events', () => {
    it('renders the Enjoy Our Events heading', () => {
      render(<App />)
      expect(screen.getByText('Enjoy Our Events')).toBeInTheDocument()
    })

    it('shows 3 event cards', () => {
      render(<App />)
      expect(screen.getByText('Farm-to-Table Dinner')).toBeInTheDocument()
      expect(screen.getByText('Weekend Brunch Special')).toBeInTheDocument()
      expect(screen.getByText("Chef's Table Experience")).toBeInTheDocument()
    })

    it('shows event prices', () => {
      render(<App />)
      expect(screen.getByText('$89')).toBeInTheDocument()
      expect(screen.getByText('$45')).toBeInTheDocument()
      expect(screen.getByText('$120')).toBeInTheDocument()
    })

    it('shows event checklist items', () => {
      render(<App />)
      expect(screen.getByText('Seasonal ingredients')).toBeInTheDocument()
      expect(screen.getByText('4-course meal')).toBeInTheDocument()
      expect(screen.getByText('Unlimited mimosas')).toBeInTheDocument()
      expect(screen.getByText('Private dining')).toBeInTheDocument()
    })
  })

  describe('Book a Table', () => {
    it('renders the Book A Table Now heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: 'Book A Table Now' })).toBeInTheDocument()
    })

    it('renders the Book a table CTA button', () => {
      render(<App />)
      const ctas = screen.getAllByRole('link', { name: /book a table/i })
      expect(ctas.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Footer', () => {
    it('renders the About Feastcraft heading', () => {
      render(<App />)
      const footer = screen.getByRole('contentinfo')
      expect(within(footer).getByText(/About Feastcraft/)).toBeInTheDocument()
    })

    it('renders Projects column', () => {
      render(<App />)
      const footer = screen.getByRole('contentinfo')
      expect(within(footer).getByText('Projects')).toBeInTheDocument()
      expect(within(footer).getByText('Web Design')).toBeInTheDocument()
      expect(within(footer).getByText('HTML5')).toBeInTheDocument()
    })

    it('renders Services column', () => {
      render(<App />)
      const footer = screen.getByRole('contentinfo')
      expect(within(footer).getByText('Services')).toBeInTheDocument()
      expect(within(footer).getByText('Design')).toBeInTheDocument()
      expect(within(footer).getByText('Front-end')).toBeInTheDocument()
    })

    it('renders Contact column', () => {
      render(<App />)
      const footer = screen.getByRole('contentinfo')
      const contactHeadings = within(footer).getAllByText('Contact')
      expect(contactHeadings.length).toBeGreaterThanOrEqual(1)
      expect(within(footer).getByText(/1234 Restaurant Ave/)).toBeInTheDocument()
    })

    it('renders social media icons in footer', () => {
      render(<App />)
      const footer = screen.getByRole('contentinfo')
      const socialLinks = within(footer).getAllByRole('link')
      expect(socialLinks.length).toBeGreaterThanOrEqual(5)
    })

    it('links to Component Dock', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('shows copyright text in footer', () => {
      render(<App />)
      const footer = screen.getByRole('contentinfo')
      const feastcraftTexts = within(footer).getAllByText(/Feastcraft/)
      expect(feastcraftTexts.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(<App />)
      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1).toBeInTheDocument()
      const h2s = screen.getAllByRole('heading', { level: 2 })
      expect(h2s.length).toBeGreaterThanOrEqual(5)
    })

    it('has aria-labels on icon-only buttons', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /previous testimonial/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next testimonial/i })).toBeInTheDocument()
    })

    it('has aria-labels on social media links', () => {
      render(<App />)
      const whatsapp = screen.getByRole('link', { name: /whatsapp/i })
      expect(whatsapp).toHaveAttribute('aria-label')
      const allPinterest = screen.getAllByRole('link', { name: /pinterest/i })
      expect(allPinterest.length).toBeGreaterThanOrEqual(1)
      expect(allPinterest[0]).toHaveAttribute('aria-label')
      const allLinkedin = screen.getAllByRole('link', { name: /linkedin/i })
      expect(allLinkedin.length).toBeGreaterThanOrEqual(1)
      expect(allLinkedin[0]).toHaveAttribute('aria-label')
    })
  })
})
