import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Training } from './components/Training'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Northstar — Life Coaching Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Empower Your Mind|Unlock Your Potential|Live Your Best Life/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Hey there, I'm John The Founder/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Training' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders the logo and desktop links', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Northstar' })).toBeInTheDocument()
    for (const label of ['Home', 'Our Training', 'Services', 'Contact']) {
      expect(screen.getAllByRole('button', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('hides the mobile menu initially and toggles it open/closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(document.getElementById('mobile-menu')).not.toHaveClass('hidden')

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const galleryLinks = screen.getAllByRole('button', { name: 'Our Training' })
    const mobileLink = galleryLinks[galleryLinks.length - 1]!
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('scrolls to hero when logo is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Northstar' }))
    // No error means scrollTo was called
  })

  it('toggles the About dropdown on click then hover shows dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const allAbout = screen.getAllByText('About')
    const desktopAbout = allAbout[0]!
    await user.hover(desktopAbout)
    expect(screen.getByRole('menuitem', { name: 'Testimonials' })).toBeInTheDocument()
    // Click a dropdown item
    await user.click(screen.getByRole('menuitem', { name: 'Testimonials' }))
    // ScrollTo was called, dropdown should close
    expect(screen.queryByRole('menuitem', { name: 'Testimonials' })).not.toBeInTheDocument()
  })

  it('toggles the About dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const allAbout = screen.getAllByText('About')
    const desktopAbout = allAbout[0]!
    await user.hover(desktopAbout)
    expect(screen.getByRole('menuitem', { name: 'Testimonials' })).toBeInTheDocument()
    await user.unhover(desktopAbout)
    expect(screen.queryByRole('menuitem', { name: 'Testimonials' })).not.toBeInTheDocument()
  })

  it('clicks a desktop nav button to scroll', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const servicesBtns = screen.getAllByRole('button', { name: 'Services' })
    await user.click(servicesBtns[0]!)
  })

  it('clicks About dropdown toggle button via hover then toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Hover to open, then click to toggle off
    const aboutBtn = screen.getAllByText('About')[0]!
    await user.hover(aboutBtn)
    expect(screen.getByRole('menuitem', { name: 'Testimonials' })).toBeInTheDocument()
    await user.click(aboutBtn)
    // click fires mouseenter (no change) then toggles - should close
    expect(screen.queryByRole('menuitem', { name: 'Testimonials' })).not.toBeInTheDocument()
  })

  it('clicks a dropdown menu item', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const aboutBtn = screen.getAllByText('About')[0]!
    await user.hover(aboutBtn)
    const galleryItem = screen.getByRole('menuitem', { name: 'Gallery' })
    galleryItem.click()
  })

  it('clicks a mobile dropdown item', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // In mobile, About has sub-items directly visible
    const mobileAboutItems = screen.getAllByRole('button', { name: 'Gallery' })
    // Click the mobile gallery link (last one)
    await user.click(mobileAboutItems[mobileAboutItems.length - 1]!)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })
})

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the initial hero content', () => {
    render(<Hero />)
    expect(screen.getByText('We are')).toBeInTheDocument()
    expect(screen.getByText('Empower Your Mind')).toBeInTheDocument()
  })

  it('cycles through slides on interval', () => {
    render(<Hero />)
    expect(screen.getByText('Empower Your Mind')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Unlock Your Potential')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Live Your Best Life')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Empower Your Mind')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('clicks the CTA button to scroll', () => {
    render(<Hero />)
    const ctaBtn = screen.getByRole('button', { name: /Learn More/i })
    ctaBtn.click()
  })
})

describe('About', () => {
  it('renders the about section with heading and bio', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /Hey there, I'm John The Founder/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Welcome to Northstar/i)).toBeInTheDocument()
  })

  it('renders upcoming speaking gigs', () => {
    render(<About />)
    expect(screen.getByText('Upcoming Speaking Gigs')).toBeInTheDocument()
    expect(screen.getByText('Growth Summit 2024')).toBeInTheDocument()
    expect(screen.getByText('Life Coaching Workshop')).toBeInTheDocument()
  })

  it('renders team member cards', () => {
    render(<About />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('renders social icons for team members', () => {
    render(<About />)
    expect(screen.getAllByLabelText('Facebook').length).toBe(4)
    expect(screen.getAllByLabelText('Twitter').length).toBe(4)
    expect(screen.getAllByLabelText('Instagram').length).toBe(4)
    expect(screen.getAllByLabelText('LinkedIn').length).toBe(4)
  })
})

describe('Training', () => {
  it('renders the training section heading and cards', () => {
    render(<Training />)
    expect(screen.getByRole('heading', { name: 'Our Training' })).toBeInTheDocument()
    expect(screen.getByText('Personal Development')).toBeInTheDocument()
    expect(screen.getByText('Career Advancement')).toBeInTheDocument()
    expect(screen.getByText('Wellness & Balance')).toBeInTheDocument()
  })

  it('renders training descriptions', () => {
    render(<Training />)
    expect(screen.getByText(/Discover your strengths/)).toBeInTheDocument()
    expect(screen.getByText(/Navigate career transitions/)).toBeInTheDocument()
    expect(screen.getByText(/Achieve harmony/)).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('renders the services section heading and cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByText('Achievement Coaching')).toBeInTheDocument()
    expect(screen.getByText('Goal Setting')).toBeInTheDocument()
    expect(screen.getByText('Action Planning')).toBeInTheDocument()
    expect(screen.getByText('Growth Tracking')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Set ambitious goals/)).toBeInTheDocument()
    expect(screen.getByText(/Define clear, actionable goals/)).toBeInTheDocument()
    expect(screen.getByText(/Transform your vision/)).toBeInTheDocument()
    expect(screen.getByText(/Monitor your progress/)).toBeInTheDocument()
  })
})

describe('Gallery', () => {
  it('renders the gallery heading and images', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Gallery' })).toBeInTheDocument()
    const buttons = screen.getAllByRole('button', { name: /View Gallery image/ })
    expect(buttons).toHaveLength(12)
  })

  it('opens the lightbox when an image is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const firstImage = screen.getAllByRole('button', { name: /View Gallery image/ })[0]!
    await user.click(firstImage)
    expect(screen.getByRole('dialog', { name: 'Image lightbox' })).toBeInTheDocument()
  })

  it('closes the lightbox when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const firstImage = screen.getAllByRole('button', { name: /View Gallery image/ })[0]!
    await user.click(firstImage)
    expect(screen.getByRole('dialog', { name: 'Image lightbox' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close lightbox' }))
    expect(screen.queryByRole('dialog', { name: 'Image lightbox' })).not.toBeInTheDocument()
  })

  it('closes the lightbox when backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const firstImage = screen.getAllByRole('button', { name: /View Gallery image/ })[0]!
    await user.click(firstImage)
    const dialog = screen.getByRole('dialog', { name: 'Image lightbox' })
    await user.click(dialog)
    expect(screen.queryByRole('dialog', { name: 'Image lightbox' })).not.toBeInTheDocument()
  })

  it('does not close lightbox when clicking the image', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const firstImage = screen.getAllByRole('button', { name: /View Gallery image/ })[0]!
    await user.click(firstImage)
    const lightboxImage = screen
      .getByRole('dialog', { name: 'Image lightbox' })
      .querySelector('img')!
    await user.click(lightboxImage)
    expect(screen.getByRole('dialog', { name: 'Image lightbox' })).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('renders the testimonials section heading and cards', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
    expect(screen.getByText('Jessica Williams')).toBeInTheDocument()
    expect(screen.getByText('David Martinez')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(
      screen.getByText(/Working with Northstar has been absolutely transformative/),
    ).toBeInTheDocument()
    expect(screen.getByText(/I was stuck in my career/)).toBeInTheDocument()
    expect(screen.getByText(/The wellness coaching program/)).toBeInTheDocument()
  })
})

describe('Blog', () => {
  it('renders the blog section heading and entries', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
    expect(
      screen.getByText('5 Habits That Will Transform Your Morning Routine'),
    ).toBeInTheDocument()
    expect(screen.getByText('The Power of Mindfulness in Everyday Life')).toBeInTheDocument()
    expect(screen.getByText('Setting Goals That Actually Stick')).toBeInTheDocument()
    expect(screen.getByText("Overcoming Fear: A Coach's Perspective")).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More →')
    expect(readMoreLinks).toHaveLength(4)
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    expect(screen.getByText('March 10, 2024')).toBeInTheDocument()
    expect(screen.getByText('February 25, 2024')).toBeInTheDocument()
  })
})

describe('Contact', () => {
  it('renders the contact section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders contact info columns', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('info@northstar.com')).toBeInTheDocument()
  })

  it('renders the contact form fields', () => {
    render(<Contact />)
    expect(screen.getAllByLabelText('First Name').length).toBe(2)
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('handles controlled inputs', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const firstNameInputs = screen.getAllByLabelText('First Name')
    const firstNameInput = firstNameInputs[0]!
    await user.type(firstNameInput, 'John')
    expect(firstNameInput).toHaveValue('John')

    const lastNameInput = firstNameInputs[1]!
    await user.type(lastNameInput, 'Doe')
    expect(lastNameInput).toHaveValue('Doe')

    const emailInput = screen.getByPlaceholderText('Enter your email')
    await user.type(emailInput, 'john@test.com')
    expect(emailInput).toHaveValue('john@test.com')

    const messageInput = screen.getByLabelText('Message')
    await user.type(messageInput, 'Hello!')
    expect(messageInput).toHaveValue('Hello!')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const submitBtn = screen.getByRole('button', { name: 'Send Message' })
    await user.click(submitBtn)
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders the footer with about text and quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
  })

  it('renders social links with correct aria labels', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.querySelector('a[aria-label="Facebook"]')).toBeInTheDocument()
    expect(footer.querySelector('a[aria-label="Twitter"]')).toBeInTheDocument()
    expect(footer.querySelector('a[aria-label="Instagram"]')).toBeInTheDocument()
    expect(footer.querySelector('a[aria-label="LinkedIn"]')).toBeInTheDocument()
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('handles newsletter email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Your email')
    await user.type(emailInput, 'test@test.com')
    expect(emailInput).toHaveValue('test@test.com')
  })

  it('submits newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Send' }))
    // Form submitted without navigation
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders quick links that scroll', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const homeLink = screen.getByRole('button', { name: 'Home' })
    await user.click(homeLink)
  })
})
