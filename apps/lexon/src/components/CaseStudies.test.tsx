import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders the section heading', () => {
    render(<CaseStudies />)
    expect(screen.getByRole('heading', { name: /recent case studies/i })).toBeInTheDocument()
  })

  it('renders four tabs', () => {
    render(<CaseStudies />)
    expect(screen.getByRole('tab', { name: 'Vehicle Accident' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Health Law' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Insurance Law' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Bankruptcy' })).toBeInTheDocument()
  })

  it('shows Vehicle Accident cases by default', () => {
    render(<CaseStudies />)
    expect(
      screen.getByRole('heading', { name: 'Car Accident Insurance Critical Case' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Rear-End Collision Settlement' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Post-Accident Medical Negligence' }),
    ).toBeInTheDocument()
  })

  it('switches cases when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)

    await user.click(screen.getByRole('tab', { name: 'Health Law' }))
    expect(screen.getByRole('heading', { name: 'Medical Malpractice Defense' })).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'Car Accident Insurance Critical Case' }),
    ).not.toBeInTheDocument()
  })

  it('switches to Insurance Law cases', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)

    await user.click(screen.getByRole('tab', { name: 'Insurance Law' }))
    expect(screen.getByRole('heading', { name: 'Denied Claim Appeal Success' })).toBeInTheDocument()
  })

  it('switches to Bankruptcy cases', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)

    await user.click(screen.getByRole('tab', { name: 'Bankruptcy' }))
    expect(screen.getByRole('heading', { name: 'Personal Bankruptcy Filing' })).toBeInTheDocument()
  })

  it('renders read more links for each case', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)

    const readMoreLinks = screen.getAllByText(/read more/i)
    expect(readMoreLinks.length).toBe(3)

    await user.click(readMoreLinks[0]!)
  })
})
