import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the centred caption over the violet gradient band', () => {
    const { container } = render(<Hero />)
    const section = screen.getByRole('region', { name: 'Domain search' })
    expect(section).toHaveClass('bg-gradient-to-b', 'from-violet', 'to-violet-deep')
    expect(section).toHaveClass('min-h-[600px]', 'md:min-h-[680px]', 'lg:min-h-[890px]')
    expect(screen.getByText('Domain and hosting specialists for growing teams')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Fast, secure hosting for every site',
    )
    expect(container.querySelector('h1')).toHaveClass('uppercase', 'text-white')
  })

  it('renders a labelled domain search with a globe and the circular peach button', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Search for a domain name')).toHaveAttribute(
      'placeholder',
      'Search for a domain name',
    )
    expect(screen.getByRole('button', { name: 'Search domains' })).toHaveClass(
      'rounded-full',
      'bg-peach',
    )
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('announces the searched domain without navigating away', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.type(screen.getByLabelText('Search for a domain name'), 'presto.example')
    await user.click(screen.getByRole('button', { name: 'Search domains' }))
    expect(screen.getByRole('status')).toHaveTextContent('Checking availability for presto.example')
    expect(window.location.hash).toBe('')
  })

  it('prompts for a name when the search is submitted empty', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Search domains' }))
    expect(screen.getByRole('status')).toHaveTextContent('Enter a domain name to search.')
  })

  it('renders four coloured TLD prices with violet separators between them', () => {
    const { container } = render(<Hero />)
    const list = container.querySelector('ul') as HTMLElement
    const items = within(list).getAllByRole('listitem')
    expect(items).toHaveLength(4)
    expect(within(list).getByText('.org')).toHaveClass('text-tld-org')
    expect(within(list).getByText('.com')).toHaveClass('text-tld-com')
    expect(within(list).queryByText('.rog')).not.toBeInTheDocument()
    expect(items[0]).not.toHaveClass('border-l')
    expect(items[1]).toHaveClass('border-l', 'border-violet')
  })

  it('closes the band with the white cloud-scallop divider', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero-scallop')).toHaveClass('absolute', 'bottom-0', 'w-full')
  })

  it('lets Enter submit the form as well', () => {
    render(<Hero />)
    const form = screen.getByRole('search')
    fireEvent.submit(form)
    expect(screen.getByRole('status')).toHaveTextContent('Enter a domain name to search.')
  })
})
