import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Persona — Personal Branding Website Template')
  })

  it('renders every section in the reference order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()

    const hero = screen.getByRole('region', { name: 'Personal Website' })
    const services = screen.getByRole('region', { name: 'Services' })
    const projects = screen.getByRole('region', { name: 'Projects' })
    const clients = screen.getByRole('region', { name: 'Clients' })
    const experience = screen.getByRole('region', { name: 'Experience' })
    const contact = screen.getByRole('region', { name: 'Contact' })

    expect(hero.compareDocumentPosition(services) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(
      services.compareDocumentPosition(projects) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      projects.compareDocumentPosition(clients) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      clients.compareDocumentPosition(experience) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      experience.compareDocumentPosition(contact) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it('renders the floating action bar inside the hero region', () => {
    render(<App />)
    const hero = screen.getByRole('region', { name: 'Personal Website' })
    expect(within(hero).getByRole('complementary', { name: 'Quick actions' })).toBeInTheDocument()
  })
})
