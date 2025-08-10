"use client"

import React, { useTransition } from 'react'
import { Locale } from '@/i18n/config'
import { setUserLocale } from '@/services/locale'
import { useLocale } from 'next-intl'

const LocaleSwitcher = () => {
  const currentLocale = useLocale()
  const locales = ["en", "fa"]
  const [isPending, startTransition] = useTransition();


  const setLocale = (value: string) => {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <div className='absolute top-6 right-6 flex gap-4'>
      {locales.map((locale) => (
        <button
          key={locale}
          disabled={isPending}
          onClick={() => setLocale(locale)}
          className={`capitalize font-bold border-2 border-white rounded-lg size-10 cursor-pointer transition-all
          ${currentLocale === locale ? "bg-white text-black" : "text-white hover:bg-gray-800"}
          ${isPending && "cursor-not-allowed"}`}>
          {locale}
        </button>
      ))}
    </div>
  )
}

export default LocaleSwitcher