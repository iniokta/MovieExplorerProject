# 🎬 Movie Explorer

Movie Explorer adalah aplikasi mobile berbasis React Native yang menampilkan informasi film populer menggunakan The Movie Database (TMDB) API. Aplikasi ini dibuat untuk tujuan pembelajaran pengembangan aplikasi mobile dengan integrasi REST API.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)

## ✨ Fitur

- 🎥 **Menampilkan Film Populer** - Melihat daftar film yang sedang populer
- 🔍 **Pencarian Film** - Mencari film berdasarkan judul
- 📱 **Detail Film** - Informasi lengkap tentang film (sinopsis, rating, genre, durasi)
- ⭐ **Rating & Review** - Melihat rating film dari TMDB
- 🖼️ **Poster & Backdrop** - Menampilkan gambar poster dan backdrop berkualitas tinggi
- 📅 **Tanggal Rilis** - Informasi kapan film dirilis
- 🎭 **Genre Film** - Kategori genre setiap film
- 📱 **Responsive UI** - Antarmuka yang smooth dan user-friendly


## 🛠️ Teknologi yang Digunakan

- **React Native** - Framework untuk mobile development
- **React Navigation** - Navigasi antar halaman
- **Axios** - HTTP client untuk API calls
- **TMDB API** - Sumber data film
- **JavaScript ES6+** - Bahasa pemrograman
- **React Hooks** - State management (useState, useEffect)

## 📋 Prasyarat

Sebelum menjalankan project, pastikan Anda sudah menginstall:

- [Node.js](https://nodejs.org/) (v16 atau lebih baru)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (untuk Android)
- [Xcode](https://developer.apple.com/xcode/) (untuk iOS, khusus Mac)
- [Git](https://git-scm.com/) (optional)

## 🚀 Instalasi

### 1. Clone Repository
```bash
https://github.com/iniokta/MovieExplorerProject.git
cd movie-explorer
```

Atau download ZIP dan extract.

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup TMDB API Key

1. Daftar akun di [The Movie Database](https://www.themoviedb.org/)
2. Dapatkan API Key dari [API Settings](https://www.themoviedb.org/settings/api)
3. Buka file `src/config/constants.js`
4. Ganti `YOUR_API_KEY_HERE` dengan API Key Anda:
```javascript
export const API_KEY = 'your_actual_api_key_here';
```

### 4. Install iOS Dependencies (Khusus Mac)
```bash
cd ios
pod install
cd ..
```

## ▶️ Menjalankan Aplikasi

### Android
```bash
# Terminal 1 - Start Metro Bundler
npx react-native start

# Terminal 2 - Run Android
npx react-native run-android
```

### iOS (Mac only)
```bash
# Terminal 1 - Start Metro Bundler
npx react-native start

# Terminal 2 - Run iOS
npx react-native run-ios
```

## 📁 Struktur Project
```
MovieExplorer/
├── src/
│   ├── screens/              # Halaman aplikasi
│   │   ├── HomeScreen.js     # Halaman utama (daftar film)
│   │   └── DetailScreen.js   # Halaman detail film
│   ├── components/           # Komponen reusable
│   │   ├── MovieCard.js      # Komponen kartu film
│   │   └── LoadingSpinner.js # Komponen loading
│   ├── services/             # API services
│   │   └── api.js            # Axios configuration & endpoints
│   └── config/               # Konfigurasi
│       └── constants.js      # API key & base URLs
├── android/                  # Android native files
├── ios/                      # iOS native files
├── App.js                    # Entry point aplikasi
├── package.json              # Dependencies
└── README.md                 # Dokumentasi ini
```

## 🔌 API Endpoints yang Digunakan
https://api.themoviedb.org/3/movie/popular?api_key=9bf19af30d73ab2c1b2640ae757c3317

### 1. Get Popular Movies
```
GET /movie/popular
```
Mengambil daftar film populer

### 2. Get Movie Details
```
GET /movie/{movie_id}
```
Mengambil detail lengkap sebuah film

### 3. Search Movies
```
GET /search/movie?query={query}
```
Mencari film berdasarkan kata kunci

Dokumentasi lengkap: [TMDB API Docs](https://developer.themoviedb.org/reference/intro/getting-started)

## 🎨 Warna Tema

- **Background**: `#000000` (Hitam)
- **Card Background**: `#1a1a1a` (Abu-abu gelap)
- **Primary Color**: `#e50914` (Merah Netflix)
- **Text Primary**: `#FFFFFF` (Putih)
- **Text Secondary**: `#999999` (Abu-abu)
- **Rating Color**: `#FFD700` (Emas)


### Metro Bundler Error
```bash
npx react-native start --reset-cache
```

### Build Failed
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

### Clear Cache
```bash
npm start -- --reset-cache
```

### Check Connected Devices
```bash
adb devices
```

## 📚 Pembelajaran

Project ini dibuat untuk mempelajari:
- ✅ Integrasi REST API dengan React Native
- ✅ State management menggunakan React Hooks
- ✅ Navigation dengan React Navigation
- ✅ Styling dengan StyleSheet
- ✅ Async/Await untuk operasi asynchronous
- ✅ Error handling
- ✅ Component-based architecture

## 🔮 Fitur yang Akan Datang

- [ ] Infinite scroll untuk load more movies
- [ ] Filter berdasarkan genre
- [ ] Simpan film favorit (AsyncStorage)
- [ ] Video trailer player
- [ ] Share film ke social media
- [ ] Dark/Light theme toggle
- [ ] Multi-language support

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Project ini dibuat untuk tujuan pembelajaran dan bersifat open source.

## 👤 Author

-Oktaria rahmadani 23312172
-nabila aulia rahmadani

- GitHub: [@username](https://github.com/iniokta/MovieExplorerProject.git)
- Email: email@example.com

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) untuk menyediakan API gratis
- [React Native](https://reactnative.dev/) untuk framework yang powerful
- Komunitas React Native Indonesia

## 📞 Support

Jika ada pertanyaan atau issue:
- Buka [Issues](https://github.com/username/movie-explorer/issues)
- Email: Oktaria_rahmadani@teknokrat.ac.id

---
---

## 📝 Deskripsi Project (Untuk GitHub/Portfolio)
```
Movie Explorer adalah aplikasi mobile berbasis React Native yang menampilkan 
informasi film populer dari The Movie Database (TMDB) API. Aplikasi ini 
dilengkapi dengan fitur pencarian film, detail lengkap film termasuk sinopsis, 
rating, genre, dan poster berkualitas tinggi. Dibangun menggunakan React 
Navigation untuk navigasi halaman dan Axios untuk HTTP requests.
```
---



