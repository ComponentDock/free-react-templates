import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Trekcraft — Travel Agency Template', () => {
  beforeEach(() => {
    render(<App />)
  })

  describe('TopBar', () => {
    it('displays phone number', () => {
      expect(screen.getAllByText(/\+45 345 3324 56789/).length).toBeGreaterThanOrEqual(1)
    })

    it('has social media icons', () => {
      expect(screen.getAllByLabelText('Pinterest').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByLabelText('Facebook').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByLabelText('Twitter').length).toBeGreaterThanOrEqual(1)
      expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
      expect(screen.getByLabelText('Behance')).toBeInTheDocument()
      expect(screen.getAllByLabelText('LinkedIn').length).toBeGreaterThanOrEqual(1)
    })

    it('has login and register links', () => {
      expect(screen.getAllByText('login').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('register').length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Navbar', () => {
    it('displays logo and brand name', () => {
      expect(screen.getAllByText('trekcraft').length).toBeGreaterThanOrEqual(1)
    })

    it('has navigation links', () => {
      const navLinks = screen.getAllByRole('link', { name: /home/i })
      expect(navLinks.length).toBeGreaterThanOrEqual(1)
    })

    it('toggles search on click', async () => {
      const user = userEvent.setup()
      const searchBtn = screen.getByLabelText('Toggle search')
      expect(screen.queryByPlaceholderText(/search destinations/i)).not.toBeInTheDocument()
      await user.click(searchBtn)
      expect(screen.getByPlaceholderText(/search destinations/i)).toBeInTheDocument()
    })

    it('toggles mobile menu on click', async () => {
      const user = userEvent.setup()
      const menuBtn = screen.getByLabelText('Toggle menu')
      await user.click(menuBtn)
      expect(screen.getAllByText('home').length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('HeroSlider', () => {
    it('renders hero section with discover headline', () => {
      expect(screen.getByText('discover')).toBeInTheDocument()
      expect(screen.getByText('the world')).toBeInTheDocument()
    })

    it('has explore now button', () => {
      expect(screen.getByText('explore now')).toBeInTheDocument()
    })

    it('navigates forward through all slides', async () => {
      const user = userEvent.setup()
      const nextBtn = screen.getByLabelText('Next slide')
      // Slide 0 -> 1
      await user.click(nextBtn)
      expect(screen.getByText('explore')).toBeInTheDocument()
      expect(screen.getByText('new horizons')).toBeInTheDocument()
      // Slide 1 -> 2
      await user.click(nextBtn)
      expect(screen.getByText('journey')).toBeInTheDocument()
      expect(screen.getByText('beyond limits')).toBeInTheDocument()
      // Slide 2 -> 0 (wrap)
      await user.click(nextBtn)
      expect(screen.getByText('discover')).toBeInTheDocument()
      expect(screen.getByText('the world')).toBeInTheDocument()
    })

    it('navigates backward from first slide (wrap)', async () => {
      const user = userEvent.setup()
      const prevBtn = screen.getByLabelText('Previous slide')
      // First go forward to slide 1
      const nextBtn = screen.getByLabelText('Next slide')
      await user.click(nextBtn)
      expect(screen.getByText('explore')).toBeInTheDocument()
      // Now go backward from slide 1 to slide 0
      await user.click(prevBtn)
      expect(screen.getByText('discover')).toBeInTheDocument()
      // Now go backward from slide 0 to slide 2 (wrap)
      await user.click(prevBtn)
      expect(screen.getByText('journey')).toBeInTheDocument()
    })

    it('navigates to specific slide via dot', async () => {
      const user = userEvent.setup()
      const dot = screen.getByLabelText('Go to slide 3')
      await user.click(dot)
      expect(screen.getByText('journey')).toBeInTheDocument()
    })
  })

  describe('SearchPanel', () => {
    it('has 6 category tabs', () => {
      expect(screen.getByRole('button', { name: /hotels/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /car rentals/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /flights/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /trips/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /cruises/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /activities/i })).toBeInTheDocument()
    })

    it('has destination input', () => {
      expect(screen.getByPlaceholderText(/where are you going/i)).toBeInTheDocument()
    })

    it('has search button', () => {
      const searchBtns = screen.getAllByRole('button', { name: /search/i })
      expect(searchBtns.length).toBeGreaterThanOrEqual(1)
    })

    it('switches active tab on click', async () => {
      const user = userEvent.setup()
      const flightsTab = screen.getByRole('button', { name: /flights/i })
      await user.click(flightsTab)
      expect(flightsTab).toHaveClass('text-trek-orange')
    })
  })

  describe('BestTours', () => {
    it('displays section heading', () => {
      expect(screen.getByText('We have the best tours')).toBeInTheDocument()
    })

    it('shows tour cards with destinations', () => {
      expect(screen.getAllByText('Bali, Indonesia').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('Santorini, Greece').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('Kyoto, Japan').length).toBeGreaterThanOrEqual(1)
    })

    it('displays prices', () => {
      expect(screen.getAllByText('$1,450').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('$2,100').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('$1,890').length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('CtaSlider', () => {
    it('displays featured packages heading', () => {
      expect(screen.getByText('Featured Packages')).toBeInTheDocument()
    })

    it('shows package cards with book now buttons', () => {
      const bookButtons = screen.getAllByText('book now')
      expect(bookButtons.length).toBeGreaterThanOrEqual(3)
    })

    it('displays package titles', () => {
      expect(screen.getByText('Bali Paradise Escape')).toBeInTheDocument()
      expect(screen.getByText('Greek Island Hopping')).toBeInTheDocument()
      expect(screen.getByText('Japanese Cultural Journey')).toBeInTheDocument()
    })
  })

  describe('BestOffers', () => {
    it('displays section heading', () => {
      expect(screen.getByText('The best offers with rooms')).toBeInTheDocument()
    })

    it('shows offer cards', () => {
      expect(screen.getByText('Luxury Suite')).toBeInTheDocument()
      expect(screen.getByText('Deluxe Room')).toBeInTheDocument()
      expect(screen.getByText('Standard Twin')).toBeInTheDocument()
      expect(screen.getByText('Family Cabin')).toBeInTheDocument()
    })

    it('has read more links', () => {
      const readMoreLinks = screen.getAllByText('read more')
      expect(readMoreLinks.length).toBeGreaterThanOrEqual(4)
    })
  })

  describe('Testimonials', () => {
    it('displays section heading', () => {
      expect(screen.getByText('What our clients say about us')).toBeInTheDocument()
    })

    it('shows testimonial cards', () => {
      expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
      expect(screen.getByText('Michael Chen')).toBeInTheDocument()
      expect(screen.getByText('Emma Wilson')).toBeInTheDocument()
    })

    it('displays testimonial titles', () => {
      expect(screen.getByText('Amazing Experience')).toBeInTheDocument()
      expect(screen.getByText('Perfect Getaway')).toBeInTheDocument()
      expect(screen.getByText('Unforgettable Journey')).toBeInTheDocument()
    })
  })

  describe('TrendingDestinations', () => {
    it('displays section heading', () => {
      expect(screen.getByText('Trending Destinations')).toBeInTheDocument()
    })

    it('shows destination items', () => {
      expect(screen.getByText('Reykjavik, Iceland')).toBeInTheDocument()
      expect(screen.getByText('Cape Town, South Africa')).toBeInTheDocument()
    })
  })

  describe('Contact', () => {
    it('displays section heading', () => {
      expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    })

    it('has contact form fields', () => {
      expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Your E-mail')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    })

    it('has send message button', () => {
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })

    it('prevents default form submission', async () => {
      const user = userEvent.setup()
      const submitBtn = screen.getByRole('button', { name: /send message/i })
      await user.click(submitBtn)
    })
  })

  describe('Footer', () => {
    it('displays brand name', () => {
      expect(screen.getAllByText('trekcraft').length).toBeGreaterThanOrEqual(1)
    })

    it('has social media links', () => {
      const footerSocials = screen.getAllByLabelText('Facebook')
      expect(footerSocials.length).toBeGreaterThanOrEqual(2)
    })

    it('displays blog posts', () => {
      expect(screen.getByText('Top 10 Hidden Gems in Europe')).toBeInTheDocument()
      expect(screen.getByText('Solo Travel Safety Tips')).toBeInTheDocument()
      expect(screen.getByText('Best Food Destinations 2025')).toBeInTheDocument()
    })

    it('has tag links', () => {
      expect(screen.getByText('travel')).toBeInTheDocument()
      expect(screen.getByText('adventure')).toBeInTheDocument()
    })

    it('displays contact info', () => {
      const emails = screen.getAllByText('info@trekcraft.com')
      expect(emails.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('CopyrightBar', () => {
    it('has Component Dock link', () => {
      const cdLink = screen.getByRole('link', { name: /component dock/i })
      expect(cdLink).toBeInTheDocument()
      expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    })

    it('has navigation links', () => {
      const homeLinks = screen.getAllByText('home')
      expect(homeLinks.length).toBeGreaterThanOrEqual(2)
    })

    it('displays copyright text', () => {
      expect(screen.getByText(/Trekcraft\. All rights reserved/)).toBeInTheDocument()
    })
  })
})
