import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SecurityConsultants } from './SecurityConsultants'

describe('SecurityConsultants', () => {
  it('renders section headings', () => {
    render(<SecurityConsultants />)
    expect(screen.getByText('Security Consultants')).toBeInTheDocument()
    expect(screen.getByText('Justice serves')).toBeInTheDocument()
  })

  it('renders editorial text', () => {
    render(<SecurityConsultants />)
    const texts = screen.getAllByText(/a small river named duden/i)
    expect(texts.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Read more links', () => {
    render(<SecurityConsultants />)
    const links = screen.getAllByText('Read more')
    expect(links.length).toBeGreaterThanOrEqual(1)
  })

  it('renders three tabs', () => {
    render(<SecurityConsultants />)
    expect(screen.getByRole('tab', { name: 'Investigative Services' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Security Consultations' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Criminal Defense Investigations' })).toBeInTheDocument()
  })

  it('defaults to first tab selected', () => {
    render(<SecurityConsultants />)
    const tab = screen.getByRole('tab', { name: 'Investigative Services' })
    expect(tab).toHaveAttribute('aria-selected', 'true')
  })

  it('switches tab content on click', async () => {
    const user = userEvent.setup()
    render(<SecurityConsultants />)
    await user.click(screen.getByRole('tab', { name: 'Security Consultations' }))
    expect(screen.getByRole('tab', { name: 'Security Consultations' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Security Consultations')
  })

  it('covers fallback when activeTab is not found', () => {
    // Pass an invalid initialTab to trigger the ?? tabs[0]! fallback
    render(<SecurityConsultants initialTab="nonexistent" />)
    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveTextContent('Investigative Services')
  })

  it('defaults to first tab when no initialTab', () => {
    // The ?? tabs[0]! fallback branch on line 28
    // This happens when activeTab doesn't match any tab id
    // Since we always start with a valid tab, we test the default case
    render(<SecurityConsultants />)
    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveTextContent('Investigative Services')
  })

  it('renders images', () => {
    render(<SecurityConsultants />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
