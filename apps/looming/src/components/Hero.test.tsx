import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('centres the heading, the sub-line and the e-mail capture in one band', () => {
    render(<Hero />)

    const hero = screen.getByTestId('hero')

    expect(hero).toHaveClass(
      'flex',
      'w-full',
      'items-center',
      'justify-center',
      'pt-[80px]',
      'pb-[90px]',
    )

    const block = hero.firstElementChild

    expect(block).toHaveClass('max-w-full')
    expect(block?.children[0]).toBe(screen.getByTestId('heading'))
    expect(block?.children[1]).toBe(screen.getByTestId('sub-line'))
    expect(block?.children[2]).toBe(screen.getByTestId('email-form'))
  })

  it('accepts layout overrides', () => {
    render(<Hero className="pt-0" />)

    expect(screen.getByTestId('hero')).toHaveClass('pt-0')
  })
})
