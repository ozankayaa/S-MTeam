import './style.css'

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 5.18 2 2 0 0 1 4.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 10.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-6h6v6"/></svg>',
  building: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M16 9h3a1 1 0 0 1 1 1v11M8 7h4M8 11h4M8 15h4M8 19h4"/></svg>',
  key: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8M17 4l3 3M14 9l3 3"/></svg>',
  chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5M4 19h17M8 16v-4M12 16V8M16 16V5M20 16v-7"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
}

const services = [
  ['home', 'Satılık Daire', 'Karşıyaka, Bostanlı, Mavişehir ve İzmir'in değerli bölgelerinde doğru konutu birlikte bulalım.'],
  ['key', 'Kiralık Daire', 'Hızlı kiralama, doğru kiracı eşleştirmesi ve güvenilir portföy yönetimi.'],
  ['building', 'Villa ve Müstakil Konut', 'Yaşam odaklı özel portföyler ve prestijli konut seçenekleri.'],
  ['building', 'Ticari Gayrimenkul', 'Ofis, mağaza, dükkan ve yatırım amaçlı ticari mülk danışmanlığı.'],
  ['chart', 'Arsa ve Yatırım Danışmanlığı', 'Değer artışı potansiyeli taşıyan yatırım fırsatlarının analizi.'],
]

const strengths = [
  ['chart', '7 Yıllık Deneyim', 'Her işlemde birikim ve uzmanlık.'],
  ['pin', 'Karşıyaka ve İzmir Bölge Uzmanlığı', 'Yerel pazarı yakından tanıyoruz.'],
  ['shield', 'Şeffaf ve Güvenilir Hizmet', 'Her adımda açık iletişim.'],
  ['arrow', 'Hızlı ve Sonuç Odaklı Süreç Yönetimi', 'Hedefinize giden doğru yol.'],
]

const process = [
  ['01', 'İhtiyaç Analizi', 'Önceliklerinizi ve beklentilerinizi netleştiriyoruz.'],
  ['02', 'Bölge ve Portföy Araştırması', 'İzmir piyasasındaki doğru seçenekleri filtreliyoruz.'],
  ['03', 'Profesyonel Sunum ve Pazarlama', 'Mülkünüzü doğru alıcılarla buluşturuyoruz.'],
  ['04', 'Tapu ve Sözleşme Süreci', 'Resmi adımları şeffaf biçimde yönetiyoruz.'],
  ['05', 'Satış / Kiralama Sonrası Destek', 'İşlem sonrasında da yanınızda oluyoruz.'],
]

const faqs = [
  ['İzmir'de ev satışı ne kadar sürer?', 'Mülkün konumu, doğru fiyatlandırma ve pazarlama planına göre değişir. Bölge analiziyle en gerçekçi süreyi belirliyoruz.'],
  ['Kiralama sürecinde hangi belgeler gerekir?', 'Kimlik, gelir durumunu gösteren belgeler ve mülke ait temel evraklar sürecin başlangıcı için yeterlidir.'],
  ['Tapu işlemlerinde danışmanlık sağlıyor musunuz?', 'Evet. Sözleşme hazırlığından tapu randevusuna kadar tüm süreci takip ediyoruz.'],
  ['Yatırım amaçlı arsa seçerken nelere dikkat edilmeli?', 'İmar durumu, ulaşım, çevre gelişimi, altyapı ve değer artışı potansiyeli birlikte değerlendirilmelidir.'],
]

const app = document.querySelector('#app')
app.innerHTML = `
  <div class="topbar"><div class="container topbar-inner"><a class="topbar-phone" href="tel:+905356344705">${icons.phone} <strong>0535 634 47 05</strong></a><span class="topbar-location">${icons.pin} Karşıyaka / İzmir</span><a class="topbar-whatsapp" href="https://wa.me/905356344705" target="_blank" rel="noopener"><span></span>WhatsApp'tan Ulaş</a></div></div>
  <header class="site-header" id="top"><div class="container header-inner"><a class="logo-link" href="#top" aria-label="S&M Team ana sayfa"><img class="site-logo" src="${import.meta.env.BASE_URL}images/smteam-logo.svg" alt="S&M Team Gayrimenkul Danışmanlık logosu" /></a><button class="menu-toggle" aria-label="Menüyü aç" aria-expanded="false">${icons.menu}</button><nav class="nav" aria-label="Ana menü"><a href="#hakkimizda">Hakkımızda</a><a href="#hizmetler">Hizmetler</a><a href="#calismalar">Çalışmalarımız</a><a href="#iletisim">İletişim</a><a class="nav-cta" href="tel:+905356344705">${icons.phone} Hemen Ara</a></nav></div></header>
  <main>
    <section class="hero"><div class="hero-image" style="background-image:url('https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&w=1600')" role="img" aria-label="Modern gayrimenkul binası"></div><div class="hero-overlay"></div><div class="container hero-content"><p class="eyebrow light">KARŞIYAKA • İZMİR</p><h1>İzmir'de Güvenilir<br /><em>Gayrimenkul Danışmanlığı</em></h1><p class="hero-copy">Karşıyaka merkezli profesyonel danışmanlık ile satılık daire, kiralık konut, villa, ticari gayrimenkul ve yatırım fırsatlarında güvenilir çözümler sunuyoruz.</p><p class="hero-tags">Satılık <b>•</b> Kiralık <b>•</b> Villa <b>•</b> Ticari <b>•</b> Arsa Yatırımı</p><div class="hero-actions"><a class="button button-primary" href="tel:+905356344705">${icons.phone} Hemen Ara</a><a class="button button-outline" href="https://wa.me/905356344705" target="_blank" rel="noopener"><span class="whatsapp-dot"></span> WhatsApp Mesaj Gönder</a></div></div></section>

    <section class="intro section" id="hakkimizda"><div class="container intro-grid"><div class="intro-visual"><img src="https://images.pexels.com/photos/8815930/pexels-photo-8815930.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Gayrimenkul danışmanlığı - anahtar teslim" loading="lazy" /><div class="experience-badge"><strong>7</strong><span>yıllık<br />deneyim</span></div></div><div class="intro-content"><p class="eyebrow">HAKKIMIZDA</p><h2>Doğru yatırım,<br /><em>güvenli gelecek.</em></h2><p>S&M Team Gayrimenkul Danışmanlık olarak İzmir genelinde satılık daire, kiralık konut, villa, ticari gayrimenkul ve yatırım danışmanlığı alanlarında profesyonel hizmet sunuyoruz. Saime Kaya'nın 7 yıllık sektör deneyimi, bölgesel piyasa bilgisi ve müşteri memnuniyeti odaklı yaklaşımı sayesinde alıcı ve satıcıları doğru fırsatlarla buluşturuyoruz.</p></div></div></section>

    <section class="services section section-tint" id="hizmetler"><div class="container"><div class="section-heading"><div><p class="eyebrow">UZMANLIK ALANLARIMIZ</p><h2>Size özel <em>gayrimenkul çözümleri</em></h2></div><p>İhtiyacınız ne olursa olsun İzmir piyasasındaki deneyimimizle süreci sadeleştiriyoruz.</p></div><div class="service-grid">${services.map(([icon, title, text], i) => `<article class="service-card"><div class="service-icon">${icons[icon]}</div><span class="card-number">0${i + 1}</span><h3>${title}</h3><p>${text}</p><a href="#iletisim" aria-label="${title} için iletişime geç">Detaylı bilgi ${icons.arrow}</a></article>`).join('')}</div></div></section>

    <section class="showcase section" id="calismalar"><div class="container"><div class="section-heading"><div><p class="eyebrow">GERÇEK ÇALIŞMALARIMIZ</p><h2>Öne Çıkan Gayrimenkul<br /><em>Çalışmalarımız</em></h2></div><p>S&M Team Gayrimenkul Danışmanlık olarak İzmir genelindeki satılık, kiralık ve yatırım odaklı çalışmalarımızı profesyonel sunumlarla müşterilerimize ulaştırıyoruz.</p></div><div class="poster-grid"><figure class="poster-card"><button class="poster-button" type="button" data-image="https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1200" aria-label="Modern salon iç mekanını büyüt"><img src="https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Modern açık plan salon" loading="lazy" /></button><figcaption>Modern Konut Portföyü</figcaption></figure><figure class="poster-card"><button class="poster-button" type="button" data-image="https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&w=1200" aria-label="Lüks apartman dış cephesini büyüt"><img src="https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Lüks apartman dış cephesi" loading="lazy" /></button><figcaption>Prestijli Konut Projeleri</figcaption></figure><figure class="poster-card"><button class="poster-button" type="button" data-image="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1200" aria-label="Anahtar teslim görselini büyüt"><img src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Anahtar teslim anı" loading="lazy" /></button><figcaption>Anahtar Teslim Hizmeti</figcaption></figure></div></div></section>

    <section class="cta-band"><div class="container cta-inner"><div><p class="eyebrow light">GÜNCEL PORTFÖYLER</p><h2>Portföylerimiz Hakkında<br /><em>Hemen Bilgi Alın</em></h2><p>Güncel satılık ve kiralık portföylerimiz sürekli güncellenmektedir. Size en uygun daire, villa, ticari gayrimenkul veya yatırım fırsatlarını öğrenmek için hemen bizi arayabilir ya da WhatsApp üzerinden mesaj gönderebilirsiniz.</p></div><div class="cta-actions"><a class="button button-primary" href="tel:+905356344705">${icons.phone} 0535 634 47 05</a><a class="button button-whatsapp" href="https://wa.me/905356344705" target="_blank" rel="noopener"><span class="whatsapp-dot"></span> WhatsApp'tan Yaz</a></div></div></section>

    <section class="why section"><div class="container"><div class="section-heading centered"><div><p class="eyebrow">NEDEN S&M TEAM?</p><h2>Güven üzerine kurulu<br /><em>bir iş ortaklığı</em></h2></div></div><div class="why-grid">${strengths.map(([icon, title, text]) => `<article><div class="why-icon">${icons[icon]}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>

    <section class="process section section-tint"><div class="container"><div class="section-heading"><div><p class="eyebrow">NASIL ÇALIŞIYORUZ?</p><h2>Hayalinizden anahtara<br /><em>uzanan yolculuk</em></h2></div><p>Gayrimenkul sürecini başından sonuna kadar yanınızda olarak yönetiyoruz.</p></div><div class="timeline">${process.map(([num, title, text]) => `<div class="timeline-item"><span>${num}</span><div><h3>${title}</h3><p>${text}</p></div></div>`).join('')}</div></div></section>

    <section class="faq section section-tint" id="sss"><div class="container faq-grid"><div><p class="eyebrow">MERAK ETTİKLERİNİZ</p><h2>Sık sorulan<br /><em>sorular</em></h2><p class="faq-lead">Gayrimenkul sürecinizle ilgili her konuda size yardımcı olmaktan memnuniyet duyarız.</p></div><div class="accordion">${faqs.map(([question, answer]) => `<details><summary>${question}<span>+</span></summary><p>${answer}</p></details>`).join('')}</div></div></section>

    <section class="contact section" id="iletisim"><div class="container contact-grid"><div><p class="eyebrow">İLETİŞİM</p><h2>Hayalinizdeki mülk<br /><em>bir telefon kadar yakın.</em></h2><div class="contact-card contact-details"><h3>S&M Team Gayrimenkul Danışmanlık</h3><p>${icons.pin} Karşıyaka / İzmir</p><a href="tel:+905356344705">${icons.phone} 0535 634 47 05</a><a href="https://wa.me/905356344705" target="_blank" rel="noopener"><span class="whatsapp-dot"></span> WhatsApp Destek Hattı</a></div></div><div class="map-wrap"><div class="location-card"><div class="location-pin">${icons.pin}</div><h3>Karşıyaka / İzmir</h3><p>İzmir genelinde güvenilir gayrimenkul danışmanlığı.</p><a class="button button-primary" href="https://www.google.com/maps/search/?api=1&query=Kar%C5%9F%C4%B1yaka%2C%20%C4%B0zmir" target="_blank" rel="noopener">Google Maps'te Aç ${icons.arrow}</a></div></div></section>
  </main>
  <div class="lightbox" role="dialog" aria-modal="true" aria-label="Afiş önizlemesi" aria-hidden="true"><button class="lightbox-close" type="button" aria-label="Önizlemeyi kapat">${icons.close}</button><img alt="Büyütülmüş gayrimenkul afişi" /></div>
  <footer><div class="container footer-inner"><a class="logo-link" href="#top"><img class="site-logo" src="${import.meta.env.BASE_URL}images/smteam-logo.svg" alt="S&M Team Gayrimenkul Danışmanlık logosu" /></a><p>© 2026 S&M Team Gayrimenkul Danışmanlık — Tüm hakları saklıdır.<br /><span>İzmir Karşıyaka'da profesyonel gayrimenkul danışmanlığı hizmeti sunulmaktadır.</span></p><a class="footer-phone" href="tel:+905356344705">${icons.phone} 0535 634 47 05</a></div></footer>
`

const menuButton = document.querySelector('.menu-toggle')
const nav = document.querySelector('.nav')
menuButton.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.innerHTML = open ? icons.close : icons.menu })
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.innerHTML = icons.menu }))

const lightbox = document.querySelector('.lightbox')
const lightboxImage = lightbox.querySelector('img')
const closeLightbox = () => { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); lightboxImage.removeAttribute('src'); document.body.classList.remove('no-scroll') }
document.querySelectorAll('.poster-button').forEach((button) => button.addEventListener('click', () => { lightboxImage.src = button.dataset.image; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll') }))
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox)
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox() })
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox() })
