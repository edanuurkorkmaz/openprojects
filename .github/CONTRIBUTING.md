# 🤝 Contributing Guide

## 🌍 Language / Dil

- [🇺🇸 English](#english)
- [🇹🇷 Türkçe](#türkçe)

---

## English

### Welcome Contributors! 🎉

Thank you for your interest in contributing to **Open Source Projects**! We're excited to have you join our community of developers who are passionate about open source.

### 🚀 Ways to Contribute

#### 1. Add Your Project

Help grow our collection by adding your open source project to the platform.

**Steps:**

1. **Fork the Repository**

   ```bash
   git clone https://github.com/furkanczay/openprojects.git
   cd openprojects
   ```

2. **Add Your Project**
   Edit `data/projects.ts` and add your project information:

   ```typescript
   {
     name: "Project Name",
     description: "Project Summary",
     githubUrl: "https://github.com/username|organization/repository",
     website: "https://project.com",
     language: "JavaScript",
     tags: ["react", "nextjs", "typescript"],
     author: "Github Username|Organization",
     category: "Frontend",
     country: "TR" // Country code TR | US etc.,
   }
   ```

3. **Submit Pull Request**
   ```bash
   git add .
   git commit -m "feat: add new project - [Project Name]"
   git push origin master
   ```

#### 2. Improve the Platform

Help us enhance the platform with new features, bug fixes, or improvements.

**Development Setup:**

1. **Install Dependencies**

   ```bash
   pnpm install
   ```

2. **Start Development Server**

   ```bash
   pnpm dev
   ```

3. **Create Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
5. **Test Your Changes**

   ```bash
   pnpm build
   pnpm lint
   ```

6. **Submit Pull Request**

### 📋 Project Guidelines

#### ✅ Accepted Projects

- **Open Source License**: Must have a valid open source license
- **Active Development**: Recently updated (within last 6 months)
- **Documentation**: Has README with clear installation/usage instructions
- **Community Value**: Provides value to the developer community
- **Working State**: Project is functional and usable

#### ❌ Not Accepted

- Closed source or proprietary projects
- Abandoned projects (no updates for 6+ months)
- Spam, low-quality, or incomplete projects
- Projects with copyright violations
- Personal learning projects without community value

### 🏷️ Categories

Please choose the most appropriate category for your project:

- **Frontend**: React, Vue, Angular, etc.
- **Backend**: Node.js, Python, Go, etc.
- **Framework**: Full-stack frameworks
- **Library**: Reusable code libraries
- **Tools**: Development tools and utilities
- **AI/ML**: Machine learning and AI projects
- **Mobile**: Mobile app development
- **DevOps**: CI/CD, deployment, monitoring
- **Database**: Database-related projects
- **Security**: Security tools and libraries

### 🌟 Getting Featured

To increase your chances of being featured:

1. **High Quality**: Well-documented and actively maintained
2. **Community Impact**: Solves real problems for developers
3. **Popularity**: Has significant GitHub stars/usage
4. **Innovation**: Introduces new concepts or improvements
5. **Documentation**: Excellent README and documentation

### 💎 Sponsorship

Support the project and get your project highlighted:

- **🥈 Silver Sponsor** ($50/month): Logo + link in sponsor section
- **🥇 Gold Sponsor** ($100/month): Larger logo + description
- **💎 Platinum Sponsor** ($200/month): Premium placement + special badge

Contact us at: sponsor@openprojects.dev

### 🐛 Bug Reports

Found a bug? Please help us fix it:

1. **Check Existing Issues**: Search for similar reports
2. **Create Detailed Report**: Include steps to reproduce
3. **Provide Context**: Browser, OS, screenshots if applicable

### 💡 Feature Requests

Have an idea for improvement?

1. **Check Existing Requests**: Avoid duplicates
2. **Describe the Feature**: Clear description and use case
3. **Explain the Value**: How it benefits the community

### 📝 Code Style

Please follow our coding standards:

- **TypeScript**: Use TypeScript for all new code
- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Format code with Prettier
- **Components**: Use functional components with hooks
- **Naming**: Use descriptive names for variables and functions

### 🔄 Pull Request Process

1. **Fork & Clone**: Fork the repo and clone to your machine
2. **Branch**: Create a feature branch from `main`
3. **Develop**: Make your changes following our guidelines
4. **Test**: Ensure all tests pass and no lint errors
5. **Commit**: Use conventional commit messages
6. **PR**: Create a pull request with clear description
7. **Review**: Address any feedback from maintainers

### 📞 Need Help?

- 📧 Email: support@openprojects.dev
- 💬 Discord: [Community Server](https://discord.gg/openprojects)
- 🐛 Issues: [GitHub Issues](https://github.com/furkanczay/openprojects/issues)

---

## Türkçe

### Katkıda Bulunanlara Hoş Geldiniz! 🎉

**Açık Kaynak Projeler** platformuna katkıda bulunma ilginiz için teşekkür ederiz! Açık kaynak konusunda tutkulu geliştiriciler topluluğumuza katılmanızdan heyecan duyuyoruz.

### 🚀 Katkı Yolları

#### 1. Projenizi Ekleyin

Açık kaynak projenizi platforma ekleyerek koleksiyonumuzun büyümesine yardımcı olun.

**Adımlar:**

1. **Repository'yi Fork Edin**

   ```bash
   git clone https://github.com/furkanczay/openprojects.git
   cd openprojects
   ```

2. **Projenizi Ekleyin**
   `data/projects.ts` dosyasını düzenleyin ve proje bilgilerinizi ekleyin:

   ```typescript
   {
     name: "Proje Adınız",
     description: "Projenizin kısa açıklaması",
     githubUrl: "https://github.com/kullanici/repository",
     website: "https://projeniz.com",
     language: "JavaScript",
     tags: ["react", "nextjs", "typescript"],
     author: "GitHub Kullanıcı Adınız",
     category: "Frontend",
     country: "TR" // Ülke Kodu TR | US vb.,
   }
   ```

3. **Pull Request Gönderin**
   ```bash
   git add .
   git commit -m "feat: add new project - [Proje Adı]"
   git push origin main
   ```

#### 2. Platformu Geliştirin

Yeni özellikler, hata düzeltmeleri veya iyileştirmelerle platformu geliştirmemize yardımcı olun.

**Geliştirme Kurulumu:**

1. **Bağımlılıkları Yükleyin**

   ```bash
   pnpm install
   ```

2. **Geliştirme Sunucusunu Başlatın**

   ```bash
   pnpm dev
   ```

3. **Özellik Branch'i Oluşturun**

   ```bash
   git checkout -b feature/ozellik-adi
   ```

4. **Değişikliklerinizi Yapın**
5. **Değişikliklerinizi Test Edin**

   ```bash
   pnpm build
   pnpm lint
   ```

6. **Pull Request Gönderin**

### 📋 Proje Kuralları

#### ✅ Kabul Edilecek Projeler

- **Açık Kaynak Lisansı**: Geçerli bir açık kaynak lisansına sahip olmalı
- **Aktif Geliştirme**: Son 6 ay içinde güncellenmiş olmalı
- **Dokümantasyon**: Kurulum/kullanım talimatları içeren README'si olmalı
- **Topluluk Değeri**: Geliştirici topluluğuna değer katmalı
- **Çalışır Durumda**: Proje fonksiyonel ve kullanılabilir olmalı

#### ❌ Kabul Edilmeyecekler

- Kapalı kaynak veya özel projeler
- Terk edilmiş projeler (6+ ay güncellenmemiş)
- Spam, düşük kaliteli veya eksik projeler
- Telif hakkı ihlali içeren projeler
- Topluluk değeri olmayan kişisel öğrenme projeleri

### 🏷️ Kategoriler

Projeniz için en uygun kategoriyi seçin:

- **Frontend**: React, Vue, Angular vb.
- **Backend**: Node.js, Python, Go vb.
- **Framework**: Full-stack framework'ler
- **Library**: Yeniden kullanılabilir kod kütüphaneleri
- **Tools**: Geliştirme araçları ve yardımcı programlar
- **AI/ML**: Makine öğrenmesi ve AI projeleri
- **Mobile**: Mobil uygulama geliştirme
- **DevOps**: CI/CD, deployment, monitoring
- **Database**: Veritabanı ile ilgili projeler
- **Security**: Güvenlik araçları ve kütüphaneleri

### 🌟 Öne Çıkarılmak

Projenizin öne çıkarılma şansını artırmak için:

1. **Yüksek Kalite**: İyi dokümante edilmiş ve aktif olarak sürdürülmeli
2. **Topluluk Etkisi**: Geliştiriciler için gerçek problemleri çözmeli
3. **Popülerlik**: Önemli GitHub yıldızları/kullanımı olmalı
4. **Yenilik**: Yeni konseptler veya iyileştirmeler getirmeli
5. **Dokümantasyon**: Mükemmel README ve dokümantasyon

### 💎 Sponsorluk

Projeyi destekleyin ve projenizin öne çıkarılmasını sağlayın:

- **🥈 Silver Sponsor** (50$/ay): Sponsor bölümünde logo + link
- **🥇 Gold Sponsor** (100$/ay): Daha büyük logo + açıklama
- **💎 Platinum Sponsor** (200$/ay): Premium yerleştirme + özel rozet

İletişim: sponsor@openprojects.dev

### 🐛 Hata Raporları

Hata buldunuz? Düzeltmemize yardımcı olun:

1. **Mevcut Sorunları Kontrol Edin**: Benzer raporları arayın
2. **Detaylı Rapor Oluşturun**: Yeniden üretme adımlarını dahil edin
3. **Bağlam Sağlayın**: Tarayıcı, OS, gerekirse ekran görüntüleri

### 💡 Özellik İstekleri

İyileştirme fikriniz var mı?

1. **Mevcut İstekleri Kontrol Edin**: Tekrarları önleyin
2. **Özelliği Açıklayın**: Net açıklama ve kullanım durumu
3. **Değeri Açıklayın**: Topluluğa nasıl fayda sağladığını

### 📝 Kod Stili

Lütfen kodlama standartlarımızı takip edin:

- **TypeScript**: Tüm yeni kodlar için TypeScript kullanın
- **ESLint**: Mevcut ESLint konfigürasyonunu takip edin
- **Prettier**: Kodu Prettier ile formatlayın
- **Bileşenler**: Hook'lar ile fonksiyonel bileşenler kullanın
- **İsimlendirme**: Değişkenler ve fonksiyonlar için açıklayıcı isimler

### 🔄 Pull Request Süreci

1. **Fork & Clone**: Repo'yu fork edin ve makinenize klonlayın
2. **Branch**: `main`'den özellik branch'i oluşturun
3. **Geliştirme**: Kurallarımızı takip ederek değişikliklerinizi yapın
4. **Test**: Tüm testlerin geçtiğinden ve lint hatası olmadığından emin olun
5. **Commit**: Conventional commit mesajları kullanın
6. **PR**: Net açıklamalı pull request oluşturun
7. **İnceleme**: Maintainer'lardan gelen geri bildirimleri ele alın

### 📞 Yardıma İhtiyacınız Var?

- 📧 Email: contact@czay.dev
- 💬 Discord: [Topluluk Sunucusu](https://discord.gg/SkundF4FFU)
- 🐛 Sorunlar: [GitHub Issues](https://github.com/furkanczay/openprojects/issues)

---

<div align="center">
  <p>⭐ Bu rehberi faydalı bulduysanız projeyi yıldızlamayı unutmayın!</p>
  
  **[🏠 Home](https://openprojects.dev) • [📖 README](./README.md)**
</div>
