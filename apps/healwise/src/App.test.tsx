import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Healwise — Healthcare & Medical Landing')
  })

  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('services')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('cta-banner')).toBeInTheDocument()
    expect(screen.getByTestId('departments')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('stats')).toBeInTheDocument()
    expect(screen.getByTestId('pricing')).toBeInTheDocument()
    expect(screen.getByTestId('blog')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders correct navbar links and CTA', () => {
    render(<App />)
    const links = screen.getAllByRole('link')
    const navLabels = ['Home', 'About', 'Services', 'Departments', 'Blog', 'Contact']
    for (const label of navLabels) {
      const link = links.find((l) => l.textContent?.trim() === label)
      expect(link).toBeTruthy()
    }
    expect(screen.getByText('Make Appointment')).toBeInTheDocument()
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('switches department tabs', async () => {
    const user = userEvent.setup()
    render(<App />)

    const dentalTab = screen.getByTestId('dept-tab-dental')
    await user.click(dentalTab)
    const content = screen.getByTestId('dept-content')
    expect(content.textContent).toContain('Dental')
    expect(content.textContent).toContain('Routine Checkups')

    const cardiologyTab = screen.getByTestId('dept-tab-cardiology')
    await user.click(cardiologyTab)
    expect(screen.getByTestId('dept-content').textContent).toContain('Cardiology')
  })

  it('renders pricing plans', () => {
    render(<App />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Platinum')).toBeInTheDocument()
    expect(screen.getByText('$24.50')).toBeInTheDocument()
    expect(screen.getByText('$89.50')).toBeInTheDocument()
  })

  it('renders blog posts', () => {
    render(<App />)
    expect(screen.getByText('The Importance of Regular Health Checkups')).toBeInTheDocument()
    expect(screen.getByText('Tips For Maintaining A Healthy Heart')).toBeInTheDocument()
    expect(screen.getByText('Understanding Modern Dental Care')).toBeInTheDocument()
    expect(screen.getAllByText('Read More').length).toBe(3)
  })

  it('renders testimonials', () => {
    render(<App />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
  })

  it('renders service cards', () => {
    render(<App />)
    const services = screen.getByTestId('services')
    expect(services.textContent).toContain('Qualified Doctors')
    expect(services.textContent).toContain('Emergency Care')
    expect(services.textContent).toContain('Outdoor Checkup')
    expect(services.textContent).toContain('24 Hours Service')
  })

  it('renders stats', () => {
    render(<App />)
    expect(screen.getByText('20+')).toBeInTheDocument()
    expect(screen.getByText('15k+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('100+')).toBeInTheDocument()
  })

  it('renders CTA banner', () => {
    render(<App />)
    expect(screen.getByText('We Provide Free Health Care Consultation')).toBeInTheDocument()
  })

  it('renders about section features', () => {
    render(<App />)
    const about = screen.getByTestId('about')
    expect(about.textContent).toContain('Primary Care')
    expect(about.textContent).toContain('Lab Test')
    expect(about.textContent).toContain('Symptom Check')
    expect(about.textContent).toContain('Heart Rate')
  })

  it('defaults to neurology department', () => {
    render(<App />)
    const content = screen.getByTestId('dept-content')
    expect(content.textContent).toContain('Neurology')
    expect(content.textContent).toContain('Brain & Nerve Care')
  })

  it('renders footer services and links', () => {
    render(<App />)
    const footer = screen.getByTestId('footer')
    expect(footer.textContent).toContain('Quick Links')
    expect(footer.textContent).toContain('Opening Hours')
    expect(footer.textContent).toContain('Primary Care')
    expect(footer.textContent).toContain('Dental Care')
  })
})
