import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('stages the pair on a periwinkle ground that is content height, not viewport height', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main') as HTMLElement
    const className = main.getAttribute('class') ?? ''

    expect(className).toContain('bg-ground')
    expect(className).toContain('px-4')
    expect(className).toContain('py-[clamp(36px,7vw,96px)]')
    expect(className).not.toContain('min-h-screen')
    expect(className).not.toContain('h-screen')
    expect(className).not.toContain('justify-center')
  })

  it('puts the two cards in one stretched 2fr / 1fr row that stacks at 900', () => {
    const { container } = render(<App />)
    const grid = container.querySelectorAll('main > div')[0] as HTMLElement
    const className = grid.getAttribute('class') ?? ''

    expect(className).toContain('max-w-[1160px]')
    expect(className).toContain('mx-auto')
    expect(className).toContain('grid-cols-[minmax(0,2fr)_minmax(0,1fr)]')
    expect(className).toContain('items-stretch')
    expect(className).toContain('gap-[22px]')
    expect(className).toContain('max-[900px]:grid-cols-1')
    expect(grid.children).toHaveLength(2)
  })

  it('is a two-heading outline: one h1, one h2, no nav and no hero', () => {
    render(<App />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'One useful CSS trick, every Friday.',
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Get release notes by email',
    )
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('is two labelled sections, two forms, two fields, no images and one link', () => {
    const { container } = render(<App />)
    const regions = screen.getAllByRole('region')

    expect(regions).toHaveLength(2)
    for (const region of regions) {
      const id = region.getAttribute('aria-labelledby') as string
      expect(document.getElementById(id)).not.toBeNull()
    }

    expect(container.querySelectorAll('form')).toHaveLength(2)
    expect(container.querySelectorAll('input')).toHaveLength(2)
    expect(container.querySelectorAll('button')).toHaveLength(2)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('keeps the two cards independent in both directions', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Notify me' }))
    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByRole('alert').id).toBe('postbox-compact-error')
    expect(screen.getByLabelText('Email address')).not.toHaveAttribute('aria-invalid')

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Check your inbox')
    expect(screen.getByRole('alert')).toHaveTextContent('Enter your email address to subscribe.')
    expect(screen.getByLabelText('Work email')).toHaveValue('')
  })
})
