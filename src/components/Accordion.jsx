import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div
            key={item.id}
            className="rounded-xl border border-border bg-card transition-all duration-300 shadow-2xs hover:shadow-xs"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between p-5 text-left font-heading font-semibold text-heading sm:text-base focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <HiChevronDown
                className={`h-5 w-5 flex-shrink-0 text-paragraph transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-primary' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-paragraph border-t border-slate-100 pt-3">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
