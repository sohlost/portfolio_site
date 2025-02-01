'use client';

import Script from 'next/script';

export function AdSense() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9812963383908086"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      {/* Ad unit container */}
      <div className="my-8">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9812963383908086"
          data-ad-slot="4127374355"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="adsense-init">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </Script>
      </div>
    </>
  );
} 