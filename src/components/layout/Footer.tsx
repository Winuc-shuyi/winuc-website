"use client"

import Link from 'next/link'
import Image from 'next/image'
import siteConfig from '@/config/site.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              导航
            </h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              联系我们
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>邮箱: {siteConfig.contact.email}</li>
              <li>电话: {siteConfig.contact.phone}</li>
              <li>地址: {siteConfig.contact.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              关注我们
            </h3>
            <div className="flex space-x-4">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => (
                <a 
                  key={platform} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {platform === 'github' && (
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.127 8.84 21.44C9.34 21.538 9.515 21.229 9.515 20.962C9.515 20.721 9.507 19.987 9.502 19.143C6.73 19.759 6.139 17.927 6.139 17.927C5.685 16.772 5.029 16.465 5.029 16.465C4.121 15.831 5.098 15.844 5.098 15.844C6.1 15.917 6.63 16.892 6.63 16.892C7.521 18.429 8.97 17.975 9.533 17.717C9.629 17.092 9.889 16.639 10.175 16.397C7.954 16.151 5.62 15.317 5.62 11.534C5.62 10.455 6.01 9.57 6.649 8.875C6.539 8.623 6.199 7.568 6.749 6.181C6.749 6.181 7.584 5.909 9.49 7.213C10.294 6.989 11.15 6.876 12 6.872C12.85 6.876 13.707 6.989 14.513 7.213C16.417 5.909 17.25 6.181 17.25 6.181C17.801 7.568 17.461 8.623 17.35 8.875C17.991 9.57 18.379 10.455 18.379 11.534C18.379 15.326 16.041 16.147 13.813 16.388C14.172 16.686 14.492 17.277 14.492 18.184C14.492 19.468 14.479 20.632 14.479 20.962C14.479 21.232 14.651 21.544 15.159 21.44C19.138 20.124 22 16.442 22 12.017C22 6.484 17.522 2 12 2Z" />
                    )}
                    {platform === 'twitter' && (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    )}
                    {platform === 'linkedin' && (
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {currentYear} {siteConfig.name}. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
} 