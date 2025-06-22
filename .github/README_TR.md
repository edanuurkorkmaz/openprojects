# 🚀 Açık Kaynak Projeler

<div align="center">
  <img src="../public/placeholder-logo.svg" alt="Open Source Projects" width="120" height="120" />
  
  **Dünyanın en iyi açık kaynak projelerini keşfedin, katkıda bulunun ve toplulukla birlikte büyüyün.**

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

[🌐 Canlı Demo](https://openprojects.dev) • [📝 İngilizce README](./README_EN.md) • [🤝 Katkıda Bulun](#katkıda-bulunma)

</div>

---

## 📖 Proje Hakkında

**Açık Kaynak Projeler**, geliştiricilerin en iyi açık kaynak projelerini keşfedebileceği, katkıda bulunabileceği ve toplulukla etkileşime geçebileceği modern bir platformdur. Proje, global açık kaynak ekosistemini desteklemeyi ve geliştiriciler arasında işbirliğini artırmayı amaçlar.

### ✨ Özellikler

- 🌍 **Çoklu Dil Desteği**: Türkçe ve İngilizce arayüz
- 🔍 **Gelişmiş Arama**: Kategori, dil ve etiketlere göre filtreleme
- ⭐ **Editörün Seçimi**: Özenle seçilmiş öne çıkan projeler
- 🏆 **Sponsor Sistemi**: Platinum, Gold ve Silver sponsor kategorileri
- 👥 **Katkıda Bulunanlar**: API desteği ile katılımcıları görüntüleme
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- 🎨 **Modern UI/UX**: Tailwind CSS ve Framer Motion ile animasyonlar
- 🔄 **Real-time GitHub Verileri**: Yıldız, fork ve katkıda bulunan sayıları

### 🛠️ Teknoloji Yığını

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI, Framer Motion
- **Çoklu Dil**: next-intl (cookie tabanlı)
- **Veri**: GitHub API, contrib.rocks
- **Deployment**: Vercel
- **Icons**: Lucide React, React Circle Flags

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js 18+
- pnpm (önerilen) veya npm/yarn

### Kurulum

1. **Repository'yi klonlayın**

   ```bash
   git clone https://github.com/furkanczay/openprojects.git
   cd openprojects
   ```

2. **Bağımlılıkları yükleyin**

   ```bash
   pnpm install
   ```

3. **Geliştirme sunucusunu başlatın**

   ```bash
   pnpm dev
   ```

4. **Tarayıcınızda açın**
   ```
   http://localhost:3000
   ```

## 📂 Proje Yapısı

```
openprojects/
├── app/                    # Next.js App Router
│   ├── (pages)/           # Sayfa grupları
│   ├── api/               # API rotaları
│   └── globals.css        # Global stiller
├── components/            # React bileşenleri
│   ├── ui/               # Temel UI bileşenleri
│   └── ...               # Özel bileşenler
├── data/                  # Statik veri dosyaları
│   └── projects.json     # Proje veritabanı
├── lib/                   # Yardımcı fonksiyonlar
├── messages/              # Çoklu dil dosyaları
│   ├── tr.json           # Türkçe çeviriler
│   └── en.json           # İngilizce çeviriler
├── i18n/                  # Çoklu dil konfigürasyonu
└── public/                # Statik dosyalar
```

## 🤝 Katkıda Bulunma

Açık kaynak topluluğuna katkıda bulunmak istiyorsanız, aşağıdaki adımları takip edebilirsiniz:

### 1. Projenizi Eklemek

1. **Repository'yi Fork Edin**

   ```bash
   # GitHub'da fork butonuna tıklayın veya
   gh repo fork furkanczay/openprojects
   ```

2. **Proje Bilgilerinizi Ekleyin**

   ```bash
   # data/projects.json dosyasını düzenleyin
   {
     "name": "Proje Adınız",
     "description": "Projenizin açıklaması",
     "githubUrl": "https://github.com/kullanici/proje",
     "website": "https://projeniz.com",
     "language": "JavaScript",
     "tags": ["react", "nextjs", "typescript"],
     "author": "GitHub Kullanıcı Adınız",
     "category": "Frontend",
     "country": "TR",
     "createdAt": "2024-01-01"
   }
   ```

3. **Pull Request Oluşturun**
   ```bash
   git add .
   git commit -m "feat: add new project - [Proje Adı]"
   git push origin main
   # GitHub'da Pull Request oluşturun
   ```

### 2. Geliştirmeye Katkı

1. **Development branch oluşturun**

   ```bash
   git checkout -b feature/yeni-ozellik
   ```

2. **Değişikliklerinizi yapın**
3. **Testlerinizi çalıştırın**

   ```bash
   pnpm build
   pnpm lint
   ```

4. **Pull Request gönderin**

### 📋 Katkı Kuralları

#### ✅ Kabul Edilecek Projeler

- Açık kaynak lisansına sahip projeler
- Aktif olarak geliştirilen projeler
- Dokümantasyonu olan projeler
- Topluluk için faydalı projeler

#### ❌ Kabul Edilmeyecek Projeler

- Kapalı kaynak projeler
- Terk edilmiş projeler (6 ay+ güncellenmeyen)
- Spam veya düşük kaliteli projeler
- Telif hakkı ihlali içeren projeler

## 💎 Sponsor Olma

Projeye sponsor olmak ve açık kaynak topluluğunu desteklemek için:

### Sponsor Seviyeleri

- 🔹 **Silver Sponsor**: $50/ay - Logo + link
- 🏆 **Gold Sponsor**: $100/ay - Büyük logo + açıklama
- 💎 **Platinum Sponsor**: $200/ay - Premium yerleşim + özel badge

### İletişim

- 📧 Email: sponsor@openprojects.dev
- 💬 Discord: [Topluluk Sunucusu](https://discord.gg/openprojects)

## 📊 Proje İstatistikleri

- 🎯 **500+** Açık Kaynak Proje
- 👥 **1000+** Aktif Katkıda Bulunan
- 🌍 **50+** Ülkeden Projeler
- ⭐ **10k+** Toplam GitHub Yıldızı

## 🗺️ Roadmap

- [ ] 🔍 **Gelişmiş Arama**: Elasticsearch entegrasyonu
- [ ] 👤 **Kullanıcı Profilleri**: GitHub OAuth ile giriş
- [ ] 📈 **Analitik Dashboard**: Proje istatistikleri
- [ ] 🔔 **Bildirimler**: Yeni proje ve güncelleme bildirimleri
- [ ] 📱 **Mobil Uygulama**: React Native ile mobil app
- [ ] 🤖 **AI Önerileri**: Kullanıcı tercihlerine göre proje önerileri

## 📄 Lisans

Bu proje [MIT Lisansı](../LICENSE) altında lisanslanmıştır.

## 🙏 Teşekkürler

- [GitHub API](https://docs.github.com/en/rest) - Proje verileri için
- [contrib.rocks](https://contrib.rocks) - Katkıda bulunan görselleştirmesi için
- [Vercel](https://vercel.com) - Hosting için
- [Lucide](https://lucide.dev) - İkonlar için
- Tüm katkıda bulunanlara ❤️

---

<div align="center">
  <p>⭐ Bu projeyi beğendiyseniz yıldızlamayı unutmayın!</p>
  
  **[🏠 Ana Sayfa](https://openprojects.dev) • [📝 İngilizce](./README_EN.md) • [🤝 Katkıda Bulun](https://github.com/furkanczay/openprojects/blob/master/CONTRIBUTING.md)**
</div>
