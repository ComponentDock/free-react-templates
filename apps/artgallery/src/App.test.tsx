import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

beforeEach(() => {
  Object.defineProperty(Window.prototype, 'scrollY', {
    value: 0,
    writable: true,
    configurable: true,
  })
})
afterEach(() => {
  vi.restoreAllMocks()
})

describe('TopBar', () => {
  it('renders Visit Us link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /visit us/i })).toHaveAttribute('href', '#visit')
  })

  it('renders Buy Ticket link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /buy ticket/i })).toHaveAttribute('href', '#ticket')
  })

  it('renders social icons in top bar', () => {
    render(<App />)
    // TopBar is the first child of the page wrapper; find it via the Visit Us link
    const visitLink = screen.getByRole('link', { name: /visit us/i })
    const topBarRow = visitLink.closest('div')!.parentElement!
    const socialRow = topBarRow.querySelector('.flex.items-center.gap-3')!
    expect(
      within(socialRow as HTMLElement).getByRole('link', { name: /facebook/i }),
    ).toBeInTheDocument()
    expect(
      within(socialRow as HTMLElement).getByRole('link', { name: /twitter/i }),
    ).toBeInTheDocument()
    expect(
      within(socialRow as HTMLElement).getByRole('link', { name: /instagram/i }),
    ).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders the ArtGallery brand in navbar', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(within(nav).getByText('ArtGallery')).toBeInTheDocument()
  })

  it('renders navigation links in navbar', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(within(nav).getByText('Home')).toBeInTheDocument()
    expect(within(nav).getByText('About')).toBeInTheDocument()
    expect(within(nav).getByText('Gallery')).toBeInTheDocument()
    expect(within(nav).getByText('Events')).toBeInTheDocument()
    expect(within(nav).getByText('Ticket')).toBeInTheDocument()
    expect(within(nav).getByText('Blog')).toBeInTheDocument()
    expect(within(nav).getByText('Contact')).toBeInTheDocument()
  })

  it('renders the AG logo', () => {
    render(<App />)
    expect(screen.getByText('AG')).toBeInTheDocument()
  })

  it('renders a hamburger menu button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('opens mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu on second click', async () => {
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
    // Click a link in the mobile drawer
    const nav = screen.getByRole('navigation')
    const mobileLinks = within(nav).getAllByText('About')
    // The last one is in the mobile drawer
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has transparent background initially', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-transparent')
  })

  it('becomes solid on scroll past hero', () => {
    // jsdom's scrollY is a getter; override it on the instance before render
    let mockScrollY = 200
    Object.defineProperty(window, 'scrollY', {
      get: () => mockScrollY,
      configurable: true,
    })
    render(<App />)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-navy')
    // Restore
    mockScrollY = 0
    Object.defineProperty(window, 'scrollY', {
      get: () => 0,
      configurable: true,
    })
  })
})

describe('Hero', () => {
  it('renders the hero section heading', () => {
    render(<App />)
    expect(screen.getByText(/exhibition on/i)).toBeInTheDocument()
    expect(screen.getByText(/modern era/i)).toBeInTheDocument()
  })

  it('renders the opening date subheading', () => {
    render(<App />)
    expect(screen.getByText(/opening on 21st february/i)).toBeInTheDocument()
  })

  it('renders the hero description paragraph', () => {
    render(<App />)
    const heroDesc = screen.getAllByText(/experience the finest collection/i)
    expect(heroDesc.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Get Started CTA button', () => {
    render(<App />)
    const btn = screen.getByRole('link', { name: /get started/i })
    expect(btn).toHaveAttribute('href', '#ticket')
  })
})

describe('InfoCards', () => {
  it('renders three info cards', () => {
    render(<App />)
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    expect(screen.getByText('Ongoing Exhibitions')).toBeInTheDocument()
    expect(screen.getByText('Opening Events')).toBeInTheDocument()
  })

  it('renders opening hours details', () => {
    render(<App />)
    expect(screen.getByText(/monday/i)).toBeInTheDocument()
  })

  it('renders exhibition details', () => {
    render(<App />)
    expect(screen.getByText('Modern Art Showcase — Gallery A')).toBeInTheDocument()
  })

  it('renders event details', () => {
    render(<App />)
    expect(screen.getByText('Grand Opening Gala — Feb 21')).toBeInTheDocument()
  })
})

describe('Quote', () => {
  it('renders the decorative quote', () => {
    render(<App />)
    expect(screen.getByText(/music gives soul to the universe/i)).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<App />)
    expect(screen.getByText(/art has the power to transform/i)).toBeInTheDocument()
  })

  it('renders the attribution', () => {
    render(<App />)
    expect(screen.getByText('— Plato')).toBeInTheDocument()
  })
})

describe('Gallery', () => {
  it('renders the Our Gallery heading', () => {
    render(<App />)
    expect(screen.getByText('Our Gallery')).toBeInTheDocument()
  })

  it('renders 6 gallery images', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button', { name: /view artwork/i })
    expect(buttons).toHaveLength(6)
  })

  it('opens lightbox on image click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const buttons = screen.getAllByRole('button', { name: /view artwork/i })
    await user.click(buttons[0]!)
    expect(screen.getByRole('dialog', { name: /image lightbox/i })).toBeInTheDocument()
  })

  it('closes lightbox on X button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const buttons = screen.getAllByRole('button', { name: /view artwork/i })
    await user.click(buttons[0]!)
    await user.click(screen.getByRole('button', { name: /close lightbox/i }))
    expect(screen.queryByRole('dialog', { name: /image lightbox/i })).not.toBeInTheDocument()
  })

  it('closes lightbox on backdrop click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const buttons = screen.getAllByRole('button', { name: /view artwork/i })
    await user.click(buttons[0]!)
    const dialog = screen.getByRole('dialog', { name: /image lightbox/i })
    await user.click(dialog)
    expect(screen.queryByRole('dialog', { name: /image lightbox/i })).not.toBeInTheDocument()
  })

  it('does not close lightbox when clicking the image', async () => {
    const user = userEvent.setup()
    render(<App />)
    const buttons = screen.getAllByRole('button', { name: /view artwork/i })
    await user.click(buttons[0]!)
    const dialog = screen.getByRole('dialog', { name: /image lightbox/i })
    const img = dialog.querySelector('img')!
    await user.click(img)
    expect(screen.getByRole('dialog', { name: /image lightbox/i })).toBeInTheDocument()
  })
})

describe('Events', () => {
  it('renders the Upcoming Events heading', () => {
    render(<App />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders three event cards', () => {
    render(<App />)
    expect(screen.getByText('Grand Opening Gala')).toBeInTheDocument()
    expect(screen.getByText('Artist Meet & Greet')).toBeInTheDocument()
    expect(screen.getByText('Sculpture Garden Tour')).toBeInTheDocument()
  })

  it('renders event dates', () => {
    render(<App />)
    expect(screen.getByText('Feb 21')).toBeInTheDocument()
    expect(screen.getByText('Feb 22')).toBeInTheDocument()
    expect(screen.getByText('Mar 1')).toBeInTheDocument()
  })

  it('renders event locations', () => {
    render(<App />)
    expect(screen.getByText('Main Gallery Hall')).toBeInTheDocument()
    expect(screen.getByText('Gallery B')).toBeInTheDocument()
    expect(screen.getByText('Outdoor Wing')).toBeInTheDocument()
  })
})

describe('Ticket', () => {
  it('renders the Ticket Pricing heading', () => {
    render(<App />)
    expect(screen.getByText('Ticket Pricing')).toBeInTheDocument()
  })

  it('renders three ticket types', () => {
    render(<App />)
    expect(screen.getByText('General')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('VIP')).toBeInTheDocument()
  })

  it('renders ticket prices', () => {
    render(<App />)
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('$25')).toBeInTheDocument()
    expect(screen.getByText('$60')).toBeInTheDocument()
  })

  it('renders Buy Now buttons', () => {
    render(<App />)
    const buttons = screen.getAllByRole('link', { name: /buy now/i })
    expect(buttons).toHaveLength(3)
  })

  it('renders Premium as featured with ring', () => {
    render(<App />)
    const premiumCard = screen.getByText('Premium').closest('div')!
    expect(premiumCard.className).toContain('ring-2')
  })
})

describe('Blog', () => {
  it('renders the Latest News heading', () => {
    render(<App />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders three blog post cards', () => {
    render(<App />)
    expect(screen.getByText('Exploring Modern Art Movements')).toBeInTheDocument()
    expect(screen.getByText('Behind the Scenes: Curating an Exhibition')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Must-See Artworks This Season')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<App />)
    const links = screen.getAllByRole('link', { name: /read more/i })
    expect(links).toHaveLength(3)
  })

  it('renders post dates', () => {
    render(<App />)
    expect(screen.getByText('Feb 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('Feb 10, 2025')).toBeInTheDocument()
    expect(screen.getByText('Feb 5, 2025')).toBeInTheDocument()
  })
})

describe('Contact', () => {
  it('renders the Contact Us heading', () => {
    render(<App />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<App />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders Send Message button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<App />)
    expect(screen.getByText('info@artgallery.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders map placeholder', () => {
    render(<App />)
    expect(screen.getByText('Map Placeholder')).toBeInTheDocument()
  })

  it('handles form input changes', async () => {
    const user = userEvent.setup()
    render(<App />)
    const nameInput = screen.getByLabelText(/name/i)
    await user.type(nameInput, 'John')
    expect(nameInput).toHaveValue('John')
  })

  it('handles subject field changes', async () => {
    const user = userEvent.setup()
    render(<App />)
    const subjectInput = screen.getByLabelText(/subject/i)
    await user.type(subjectInput, 'Test Subject')
    expect(subjectInput).toHaveValue('Test Subject')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText(/name/i), 'John')
    await user.type(screen.getByLabelText(/email/i), 'john@test.com')
    await user.type(screen.getByLabelText(/message/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByLabelText(/name/i)).toHaveValue('John')
  })
})

describe('Footer', () => {
  it('renders the ArtGallery footer brand', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('ArtGallery')).toBeInTheDocument()
  })

  it('renders Quick Links section', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Quick Links')).toBeInTheDocument()
  })

  it('renders Visit Us section in footer', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Visit Us')).toBeInTheDocument()
  })

  it('renders social links in footer', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Facebook')).toBeInTheDocument()
    expect(within(footer).getByText('Twitter')).toBeInTheDocument()
    expect(within(footer).getByText('Instagram')).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<App />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})

describe('Accessibility', () => {
  it('has no colorlib references in app code', () => {
    render(<App />)
    expect(screen.queryByText(/colorlib/i)).not.toBeInTheDocument()
  })

  it('has semantic landmarks', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('has aria-labels on icon-only links in top bar', () => {
    render(<App />)
    // Find social icons by their href="#"
    const socialLinks = screen.getAllByRole('link', { name: /facebook/i })
    // The first one should be in the top bar (it has aria-label)
    expect(socialLinks[0]).toHaveAttribute('aria-label', 'Facebook')
    const twitterLinks = screen.getAllByRole('link', { name: /twitter/i })
    expect(twitterLinks[0]).toHaveAttribute('aria-label', 'Twitter')
    const instagramLinks = screen.getAllByRole('link', { name: /instagram/i })
    expect(instagramLinks[0]).toHaveAttribute('aria-label', 'Instagram')
  })
})

describe('App shell', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.body).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(within(nav).getByText('ArtGallery')).toBeInTheDocument()
    expect(screen.getByText(/exhibition on/i)).toBeInTheDocument()
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    expect(screen.getByText('Our Gallery')).toBeInTheDocument()
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    expect(screen.getByText('Ticket Pricing')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
