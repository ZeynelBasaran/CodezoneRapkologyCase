## Codezone Rapkology — Türkçe README

Bu repo, Next.js App Router mimarisiyle hazırlanmış bir arayüz projesidir. Tema yönetimi, Tailwind CSS ile stil sistemi ve içerik bölümleri (Hero, Trendler, Favoriler, Keşfet) üzerine kurulu bir sayfa düzeni içerir.

### Teknolojiler

- **Next.js 15 (App Router)**
- **React 19**
- **Tailwind CSS 3** (PostCSS ile)
- **next-themes** (Açık/Koyu tema desteği)
- **Swiper** (gerekli olduğunda slider/karusel için)

### Proje Yapısı (özet)

```
app/
  layout.js        → Global layout, font ve ThemeProvider
  page.js          → Ana sayfa (Hero, Trendler, Favoriler, Keşfet)
components/
  Navbar.jsx
  home/
    HeroSection.jsx
    HeroUnder.jsx
    Trendler.jsx
    Favoriler.jsx
    Kesfet.jsx
    KesfetButonSelect.jsx
public/
  icon/ ...        → SVG ikonlar
  image/ ...       → Statik görseller
tailwind.config.js → Ekran kırılımları, renkler, font aileleri
```

### Özellikler

- **App Router** ile `app/` dizininde sayfa ve yerleşim yönetimi
- **Global tema**: `components/provider/theme-provider.jsx` üzerinden `next-themes` ile tema geçişi
- **Özel font**: Google Fonts `Saira Condensed` (`Saira_Condensed`) entegre
- **Tailwind tema genişletmeleri**: özel renk paleti, ekran kırılımları, harf aralıkları
- **Bölümlere ayrılmış ana sayfa**: `HeroSection`, `HeroUnder`, `Trendler`, `Favoriler`, `Kesfet`

### Kurulum

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

3. Tarayıcıdan uygulamayı görüntüleyin: `http://localhost:3000`

### Komutlar

- **Geliştirme**: `npm run dev`
- **Üretim derlemesi**: `npm run build`
- **Üretimde çalıştırma**: `npm run start`
- **Lint**: `npm run lint`

### Yapılandırma Notları

- Global stiller `app/globals.css` içinde yönetilir.
- `app/layout.js` dosyasında font değişkeni (`--font-saira`) ve `ThemeProvider` tanımlıdır.
- Tailwind içerik taraması `app/`, `components/`, `pages/` ve `src/` dizinlerini kapsar.

### Varlıklar (Assets)

- SVG ikonlar `public/icon/` altında, görseller `public/image/` altında tutulur.
- Örnek/mock veriler `public/mockData.js` içinde bulunur.

### Geliştirme Önerileri

- Bileşenleri küçük ve tek sorumluluk prensibine uygun tutun.
- Stil için Tailwind yardımcı sınıflarını tercih edin; karmaşık stilleri `globals.css` veya modüler stillere taşıyın.
- Tema geçişlerinde FOUC (Flash of Unstyled Content) yaşamamak için `suppressHydrationWarning` ve `next-themes` ayarlarını koruyun.

### Sürüm Bilgileri (kısaca)

- `next@15.4.2`, `react@19.1.0`, `tailwindcss@3.4.17`, `next-themes@0.4.6`

### Lisans

Bu proje için lisans bilgisi belirtilmemiştir. Gerekirse `LICENSE` dosyası ekleyin.

### Katkı

Katkılarınızı memnuniyetle karşılarız. Lütfen bir dal (branch) açıp değişikliklerinizi PR olarak gönderin.
