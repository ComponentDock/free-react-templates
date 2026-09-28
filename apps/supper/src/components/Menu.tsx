interface MenuItemProps {
  name: string
  description: string
}

function MenuItem({ name, description }: MenuItemProps) {
  return (
    <div className="py-4">
      <h3 className="mb-1 text-lg font-bold text-charcoal">{name}</h3>
      <p className="text-sm text-body-text">{description}</p>
    </div>
  )
}

const MENU_ITEMS: MenuItemProps[] = [
  {
    name: 'Warm Spinach Dip & Chips',
    description: 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
  },
  {
    name: 'Key West Machos',
    description:
      'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.',
  },
  {
    name: 'Crispy Onion Rings',
    description:
      'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.',
  },
  {
    name: 'Lobster & Shrimp Quesadilla',
    description:
      'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend.',
  },
  {
    name: 'Jumbo Lump Crab Stack',
    description: 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
  },
  {
    name: 'Jamaican Chicken Wings',
    description:
      'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.',
  },
  {
    name: 'Bahamian Seafood Chowder',
    description:
      'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.',
  },
  {
    name: 'Grilled Chicken & Tropical Fruit on Mixed Greens',
    description:
      'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend.',
  },
]

export function Menu() {
  return (
    <section id="menu" className="bg-light-bg py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-bold text-charcoal"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Menu
          </h2>
        </div>
        <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
