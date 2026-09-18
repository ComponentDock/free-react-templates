import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// Mock lucide-react's missing social brand icons
vi.mock('lucide-react', async () => {
  const actual = await vi.importActual<typeof import('lucide-react')>('lucide-react')
  const Stub = (props: React.SVGProps<SVGSVGElement>) => <svg data-testid="icon-stub" {...props} />
  return {
    ...actual,
    Facebook: Stub,
    Twitter: Stub,
    Instagram: Stub,
  }
})

import { Team } from './Team'

const members = [
  { name: 'Jacika Chouhan', role: 'Senior Business Consultant' },
  { name: 'Dirluba Jahan', role: 'Marketing Strategist' },
  { name: 'Jorina Khan', role: 'Financial Advisor' },
  { name: 'Mevina Akter', role: 'HR Consultant' },
]

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Experts')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our consultants')
  })

  it('renders all team member names', () => {
    render(<Team />)
    for (const m of members) {
      expect(screen.getByText(m.name)).toBeInTheDocument()
    }
  })

  it('renders all team member roles', () => {
    render(<Team />)
    for (const m of members) {
      expect(screen.getByText(m.role)).toBeInTheDocument()
    }
  })

  it('renders team member images with alt text', () => {
    render(<Team />)
    for (const m of members) {
      expect(screen.getByRole('img', { name: m.name })).toBeInTheDocument()
    }
  })

  it('renders social links for each member', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByRole('link', { name: 'Facebook' })
    expect(facebookLinks).toHaveLength(4)

    const twitterLinks = screen.getAllByRole('link', { name: 'Twitter' })
    expect(twitterLinks).toHaveLength(4)

    const websiteLinks = screen.getAllByRole('link', { name: 'Website' })
    expect(websiteLinks).toHaveLength(4)

    const instagramLinks = screen.getAllByRole('link', { name: 'Instagram' })
    expect(instagramLinks).toHaveLength(4)
  })
})
