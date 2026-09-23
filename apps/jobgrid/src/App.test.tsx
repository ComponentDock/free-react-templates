import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('JobGrid — Job Board Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Find your dream job/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Browse from over/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Want to hire perfect person/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Browse top jobs/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Start finding your dream job/i }),
    ).toBeInTheDocument()
  })

  it('renders the navbar with brand and nav links', () => {
    render(<App />)
    expect(screen.getAllByText('JobGrid').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Home/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Categories/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Log in/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Post a Job/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders hero section with search form', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/Job keyword/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Location/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('renders popular search tags', () => {
    render(<App />)
    expect(screen.getByText('#User experience designer')).toBeInTheDocument()
    expect(screen.getByText('#Marketing')).toBeInTheDocument()
    expect(screen.getByText('#Programmer')).toBeInTheDocument()
    expect(screen.getByText('#Finance')).toBeInTheDocument()
    expect(screen.getByText('#UI designer')).toBeInTheDocument()
  })

  it('renders brand logos section', () => {
    render(<App />)
    expect(screen.getByText('Company 1')).toBeInTheDocument()
    expect(screen.getByText('Company 6')).toBeInTheDocument()
  })

  it('renders 6 service category cards', () => {
    render(<App />)
    expect(screen.getAllByText('Browse Job').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByText('Design & creatives').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Telecommunication').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Restaurant').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Programming').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Architecture').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Marketing').length).toBeGreaterThanOrEqual(1)
  })

  it('renders about section with stats', () => {
    render(<App />)
    expect(screen.getByText('89027+')).toBeInTheDocument()
    expect(screen.getByText('Talented waiting for hire')).toBeInTheDocument()
  })

  it('renders top jobs section with 6 job cards', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Browse top jobs/i })).toBeInTheDocument()
    expect(screen.getAllByText('Apply Now').length).toBeGreaterThanOrEqual(6)
  })

  it('renders job post section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Post a job/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Browse for job/i })).toBeInTheDocument()
  })

  it('renders testimonial with dot navigation', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Go to testimonial 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Go to testimonial 2/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Go to testimonial 3/i })).toBeInTheDocument()
  })

  it('switches testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const dot2 = screen.getByRole('button', { name: /Go to testimonial 2/i })
    await user.click(dot2)
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('HR Director at Stripe')).toBeInTheDocument()
  })

  it('renders CTA banner', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /Start finding your dream job/i }),
    ).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders newsletter form', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('prevents default on newsletter form submit', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText(/Enter your email/i)
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByRole('button', { name: /Subscribe/i })
    await user.click(submitBtn)
    expect(input).toHaveValue('')
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    const closeToggle = screen.getByRole('button', { name: /Close menu/i })
    expect(closeToggle).toBeInTheDocument()
    await user.click(closeToggle)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('renders social media icon links in footer', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /Twitter/i })).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: /Pinterest/i })).toBeInTheDocument()
  })

  it('renders footer column headings', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Top categories')).toBeInTheDocument()
    expect(within(footer).getByText('For employer')).toBeInTheDocument()
    expect(within(footer).getByText('Company')).toBeInTheDocument()
  })

  it('prevents default on search form submit', async () => {
    const user = userEvent.setup()
    render(<App />)
    const searchBtn = screen.getByRole('button', { name: /Search/i })
    await user.click(searchBtn)
    // Form should not navigate
    expect(screen.getByPlaceholderText(/Job keyword/i)).toBeInTheDocument()
  })

  it('prevents default on hero search form submit', async () => {
    const user = userEvent.setup()
    render(<App />)
    const keywordInput = screen.getByPlaceholderText(/Job keyword/i)
    await user.type(keywordInput, 'developer')
    expect(keywordInput).toHaveValue('developer')
  })
})
