
# Frontend Developer Case Study

Bu proje, React, Next.js ve Webpack Module Federation kullanılarak mikro frontend mimarisiyle geliştirilmiş şekilde bir e-ticaret uygulamasıdır.

---

## Proje Mimarisi

- **Host Application:**  
Next.js tabanlı, `basketRemote` ve `productsRemote`'dan mikro frontend bileşenlerini dinamik olarak yükler.

- **Products Remote:**  
Next.js + RTK Query kullanarak ürün listesini API üzerinden çeker.

- **Basket Remote:**  
React + Redux kullanarak, sepete eklenen ürünleri listeler ve yönetir.

---

## Kurulum & Çalıştırma

1. **Klonlama:**

```powershell
git clone https://github.com/BerivanBakis/kayra-eticaret.git
cd e-commerce-app3
```

2. **Kurulum:**

```powershell
# Host uygulama
cd host-app
npm install

# Products Remote
cd ../products-remote
npm install

# Basket Remote
cd ../basket-remote
npm install
```

3. **Çalıştırma:**

Her bir uygulamayı ayrı PowerShell penceresinde başlat:

```powershell
cd products-remote
npm run dev
```

```powershell
cd basket-remote
npm start
```

```powershell
cd host-app
npm run dev
```

---
