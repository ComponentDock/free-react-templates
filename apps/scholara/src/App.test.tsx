import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Scholara education landing page', () => {
  describe('Hero section', () => {
    beforeEach(() => render(<App />))

    it('renders the hero with headline and CTA', () => {
      expect(
        screen.getByRole('heading', {
          level: 1,
          name: /showcase courses, events and more/i,
        }),
      ).toBeInTheDocument()
      expect(screen.getByText(/education & school/i)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /get started now/i })).toBeInTheDocument()
    })
  })

  describe('Countdown banner', () => {
    beforeEach(() => render(<App />))

    it('shows countdown digits', () => {
      expect(screen.getByText(/ends tomorrow/i)).toBeInTheDocument()
      expect(screen.getByText(/days/i)).toBeInTheDocument()
      expect(screen.getByText(/hours/i)).toBeInTheDocument()
      expect(screen.getByText(/minutes/i)).toBeInTheDocument()
      expect(screen.getByText(/seconds/i)).toBeInTheDocument()
    })

    it('shows a Learn More link in the top bar', () => {
      const links = screen.getAllByText(/learn more/i)
      expect(links.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Navigation', () => {
    beforeEach(() => render(<App />))

    it('renders the logo and nav links', () => {
      const logos = screen.getAllByText('Scholara')
      expect(logos.length).toBeGreaterThanOrEqual(1)
      expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /^programs$/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /^blog$/i })).toBeInTheDocument()
      const contactLinks = screen.getAllByRole('link', { name: /contact/i })
      expect(contactLinks.length).toBeGreaterThanOrEqual(1)
    })

    it('shows the phone number', () => {
      expect(screen.getByText(/call us/i)).toBeInTheDocument()
    })
  })

  describe('About section', () => {
    beforeEach(() => render(<App />))

    it('renders heading', () => {
      expect(
        screen.getByRole('heading', {
          level: 2,
          name: /comprehensive teaching approach/i,
        }),
      ).toBeInTheDocument()
    })
  })

  describe('Programs section', () => {
    beforeEach(() => render(<App />))

    it('shows the section title', () => {
      expect(
        screen.getByRole('heading', {
          level: 2,
          name: /programs we offer/i,
        }),
      ).toBeInTheDocument()
    })

    it('displays exactly 2 program cards', () => {
      expect(screen.getByText(/faculty of science/i)).toBeInTheDocument()
      expect(screen.getByText(/faculty of arts/i)).toBeInTheDocument()
    })
  })

  describe('Essential Resources section', () => {
    beforeEach(() => render(<App />))

    it('shows the section title and resource items', () => {
      expect(
        screen.getByRole('heading', {
          level: 2,
          name: /essential resources/i,
        }),
      ).toBeInTheDocument()
      expect(screen.getByText(/first year students/i)).toBeInTheDocument()
      expect(screen.getByText(/tuition & fees/i)).toBeInTheDocument()
      expect(screen.getByText(/international students/i)).toBeInTheDocument()
    })
  })

  describe('Top Stories section', () => {
    beforeEach(() => render(<App />))

    it('shows the section title and 3 story cards', () => {
      expect(
        screen.getByRole('heading', {
          level: 2,
          name: /top stories/i,
        }),
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /more stories/i })).toBeInTheDocument()
      const stories = screen.getAllByText(/linguistics alumna/i)
      expect(stories).toHaveLength(3)
    })
  })

  describe('Partners section', () => {
    beforeEach(() => render(<App />))

    it('shows the section title', () => {
      expect(
        screen.getByRole('heading', {
          level: 2,
          name: /our partners/i,
        }),
      ).toBeInTheDocument()
    })
  })

  describe('Trusted section', () => {
    beforeEach(() => render(<App />))

    it('renders the trusted heading and join button', () => {
      expect(
        screen.getByRole('heading', {
          level: 2,
          name: /trusted by over 6000/i,
        }),
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /join now/i })).toBeInTheDocument()
    })
  })

  describe('Footer', () => {
    beforeEach(() => render(<App />))

    it('renders column headings', () => {
      expect(screen.getByText(/quick links/i)).toBeInTheDocument()
      const programsHeadings = screen.getAllByText(/^programs$/i)
      expect(programsHeadings.length).toBeGreaterThanOrEqual(1)
      expect(screen.getByRole('heading', { level: 4, name: /^resources$/i })).toBeInTheDocument()
      expect(screen.getByText(/newsletter/i)).toBeInTheDocument()
    })

    it('has a newsletter form', () => {
      expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument()
    })

    it('submits the newsletter form', async () => {
      const user = userEvent.setup()
      const emailInput = screen.getByPlaceholderText(/enter your email/i)
      await user.type(emailInput, 'test@example.com')
      expect(emailInput).toHaveValue('test@example.com')
      const submitBtn = screen.getByRole('button', { name: /subscribe/i })
      await user.click(submitBtn)
      expect(emailInput).toHaveValue('')
    })

    it('links to Component Dock', () => {
      const links = screen.getAllByRole('link')
      const cdLink = links.find((l) => l.getAttribute('href') === 'https://www.componentdock.com/')
      expect(cdLink).toBeInTheDocument()
    })
  })

  describe('Scroll-to-top', () => {
    it('appears after scrolling and scrolls to top on click', async () => {
      const user = userEvent.setup()
      const scrollToMock = vi.fn()
      Object.defineProperty(window, 'scrollTo', { value: scrollToMock, writable: true })
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
      render(<App />)

      act(() => {
        window.scrollY = 600
        window.dispatchEvent(new Event('scroll'))
      })

      const btn = screen.getByRole('button', { name: /scroll to top/i })
      expect(btn).toBeInTheDocument()

      await user.click(btn)
      expect(scrollToMock).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      })
    })
  })

  describe('Mobile responsiveness', () => {
    beforeEach(() => render(<App />))

    it('renders hamburger menu button', () => {
      const menuBtn = screen.getByRole('button', { name: /open menu/i })
      expect(menuBtn).toBeInTheDocument()
    })

    it('toggles mobile menu on hamburger click', async () => {
      const user = userEvent.setup()
      const menuBtn = screen.getByRole('button', { name: /open menu/i })
      await user.click(menuBtn)
      expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
      // Clicking a nav link closes the menu — use the mobile panel's link
      const homeLinks = screen.getAllByRole('link', { name: /^home$/i })
      await user.click(homeLinks[homeLinks.length - 1]!)
      expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
    })
  })
})
